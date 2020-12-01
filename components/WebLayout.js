import React from "react";
import { Layout, Typography, Row, Col, Modal, Divider } from "antd";
const { Title } = Typography;
const { Header, Content } = Layout;
import { RegisterForm, LoginForm } from "components";
const { Text } = Typography;
import { Img } from "components";
const linkStyle = {
  color: "white",
  fontSize: 16,
  fontWeight: 600,
  marginRight: 8,
};
export default function WebLayout(props) {
  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#212121 " }}>
      <Header
        style={{
          backgroundColor: "#363636",
          position: "fixed",
          zIndex: 1,
          width: "100%",
        }}
      >
        <Row>
          <Col flex="100px">
            <Text style={{ color: "white", fontSize: 32, fontWeight: 800 }}>
              PlayZone
            </Text>
          </Col>
          <Col flex="auto" style={{ textAlign: "right" }}>
            <RegisterHeader />
          </Col>
        </Row>
      </Header>
      <Content style={{ marginTop: 40 }}>{props.children}</Content>
    </Layout>
  );
}

function RegisterHeader() {
  const [visible, setVisible] = React.useState();
  const [state, setState] = React.useState();
  const onCancel = () => {
    setVisible(false);
  };
  const onShowModal = (type) => {
    setState(type);
    setVisible(true);
  };
  return (
    <>
      <a onClick={() => onShowModal("login")} style={linkStyle}>
        Login
      </a>
      <Divider type="vertical" />
      <a onClick={() => onShowModal("signup")} style={linkStyle}>
        Register
      </a>
      <Modal
        footer={[]}
        title={
          <Title level={4}>{`${
            state === "login" ? "Login" : "Register"
          }`}</Title>
        }
        visible={visible}
        onCancel={onCancel}
      >
        {state === "login" ? <LoginForm /> : <RegisterForm />}
      </Modal>
    </>
  );
}
