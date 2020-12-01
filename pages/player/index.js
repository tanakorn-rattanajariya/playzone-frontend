import React from "react";
import { Card } from "antd";
import Main from "../Main";
export default function Player(props) {
  return (
    <Main>
      <MainComponent />
    </Main>
  );
}
function MainComponent(props) {
  const { player } = props.reducer.play;
  return <Card></Card>;
}
