import React from "react";
import { Card, Button } from "antd";
import { TeamList } from "components";
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
      <Button
        type="primary"
        size="large"
        style={{ marginTop: 8, width: "100%", maxWidth: 200 }}
      >
        Register
      </Button>
    </Card>
  );
}
