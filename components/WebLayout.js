import React from "react";
import { Layout, Typography } from "antd";
const { Header, Content } = Layout;
const { Text } = Typography;
import { Img } from "components";
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
        <Text style={{ color: "white", fontSize: 32, fontWeight: 800 }}>
          PlayZone
        </Text>
      </Header>
      <Content style={{ marginTop: 64 }}>{props.children}</Content>
    </Layout>
  );
}
