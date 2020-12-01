import React from "react";
import { Card, Button, Modal } from "antd";
import { TeamList, RegisterForm } from "components";
import { Typography } from "antd";
const { Title } = Typography;
import Main from "./Main";
export default function Home(props) {
  return (
    <Main>
      <MainComponent />
    </Main>
  );
}
function MainComponent(props) {
  const { teams } = props.reducer.play;
  return (
    <>
      <Game teams={teams} title="Dota 2" />
      <Game teams={teams} title="CSGO" />
      <Game teams={teams} title="Pubg" />
    </>
  );
}

function Game({ title, teams }) {
  return (
    <Card style={{ marginBottom: 8 }}>
      <Title level={2}>{title}</Title>
      <TeamList data={teams} />
      <RegisterComponent />
    </Card>
  );
}
function RegisterComponent() {
  const [visible, setVisible] = React.useState();
  const onCancel = () => {
    setVisible(false);
  };
  const onShowModal = () => {
    setVisible(true);
  };
  return (
    <>
      <Button
        type="primary"
        size="large"
        style={{ marginTop: 8, width: "100%", maxWidth: 200 }}
        onClick={onShowModal}
      >
        Register
      </Button>
      <Modal
        footer={[]}
        title={<Title level={4}>Register</Title>}
        visible={visible}
        onCancel={onCancel}
      >
        <RegisterForm />
      </Modal>
    </>
  );
}
