import React from "react";
import Main from "../Main";
import { Card, Row, Col, Typography, Menu } from "antd";
const { Text, Title } = Typography;
import { Img, PlayerList } from "components";
export default function Profile() {
  const [current, setCurrent] = React.useState("team");
  return (
    <Main fullscreen>
      <MainComponent current={current} setCurrent={setCurrent} />
    </Main>
  );
}

function MainComponent(props) {
  const { team } = props.reducer.play;
  const { current, setCurrent } = props;
  return (
    <Row style={{ marginTop: 36 }} gutter={8}>
      <Col xs={{ span: 0 }} sm={{ span: 4 }}></Col>
      <Col xs={{ span: 24 }} sm={{ span: 16 }}>
        <Row gutter={8}>
          <Col xs={{ span: 24 }} sm={{ span: 8 }}>
            <ProfileMenu
              team={team}
              current={current}
              setCurrent={setCurrent}
            />
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 16 }}>
            <Card>
              {current === "team" ? (
                <TeamComponent {...props} />
              ) : current === "achievement" ? (
                <AchievementComponent {...props} />
              ) : current === "history" ? (
                <HistoryComponent {...props} />
              ) : null}
            </Card>
          </Col>
        </Row>
      </Col>
      <Col xs={{ span: 0 }} sm={{ span: 4 }}></Col>
    </Row>
  );
}
function ProfileMenu({ team, current, setCurrent }) {
  const onSelectMenu = (v) => {
    setCurrent(v.key);
  };
  return (
    <Card style={{ textAlign: "center" }}>
      <Img
        style={{ width: "100%", height: 150 }}
        src={`/images/${team.img}.png`}
      />
      <Title style={{ marginTop: 16, fontWeight: 800 }} level={2}>
        {team.name}
      </Title>
      <Menu
        mode="inline"
        selectedKeys={[current]}
        onSelect={onSelectMenu}
        style={{ width: 256, marginTop: 36 }}
      >
        <Menu.Item key="team">Team</Menu.Item>
        <Menu.Item key="achievement">Achievement</Menu.Item>
        <Menu.Item key="history">History</Menu.Item>
      </Menu>
    </Card>
  );
}

function TeamComponent(props) {
  const { players } = props.reducer.play;
  return (
    <>
      <Title level={4}>Team</Title>
      <PlayerList data={players} />
    </>
  );
}
function AchievementComponent(props) {
  return (
    <>
      <Title level={4}>Achievement</Title>
    </>
  );
}
function HistoryComponent(props) {
  return (
    <>
      <Title level={4}>History</Title>
    </>
  );
}
