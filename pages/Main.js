import stylesheet from "styles/index.less";
import React from "react";
import { connect } from "react-redux";
import Head from "next/head";
import { Row, Col, message } from "antd";
import { WebLayout } from "components";
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    reducer: {
      play: state.play,
      component: state.component,
      interact: state.interact,
    },
  };
};
import actions from "../redux/actions";
const mapDispatchToProps = (dispatch) => ({
  action: {
    interact: (api, doc, item) =>
      dispatch(actions.interact.call(api, doc, item)),
  },
});
function errorMessage(error) {
  message.error(error);
}
function successMessage() {
  message.success("success");
}

function Main(props) {
  const { fullscreen, noLayout } = props;
  const { error, success } = props.reducer.component;
  React.useEffect(() => {
    if (error) {
      errorMessage(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (success) {
      successMessage();
    }
  }, [success]);
  return (
    <>
      <Head>
        <title>Siametrics TMS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="Description" content="Play Zone" />
      </Head>
      <style
        dangerouslySetInnerHTML={{
          __html: stylesheet,
        }}
      />
      <WebLayout>
        <Row gutter={8} style={{ paddingTop: 24 }}>
          <Col xs={{ span: 0 }} sm={{ span: fullscreen ? 0 : 4 }} />
          <Col xs={{ span: 24 }} sm={{ span: fullscreen ? 24 : 16 }}>
            <div style={{ padding: fullscreen ? 0 : 10 }}>
              {React.Children.map(props.children, (child) => {
                return React.cloneElement(child, {
                  action: props.action,
                  reducer: props.reducer,
                });
              })}
            </div>
          </Col>
          <Col xs={{ span: 0 }} sm={{ span: fullscreen ? 0 : 4 }} />
        </Row>
      </WebLayout>
    </>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
