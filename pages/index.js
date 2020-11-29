import React from "react";
import { Card, Button } from "antd";
import { TeamList } from "components";
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
    <Card>
      <TeamList data={teams} />
      <Button style={{ marginTop: 8 }}>Register</Button>
    </Card>
  );
}
