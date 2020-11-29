import React from "react";
import { List, Typography, Avatar, Row } from "antd";
const { Text, Title } = Typography;
import { Img } from "components";
import imgTeamLiquid from "images/team_liquid.png";
import imgNavi from "images/navi.png";
import PropTypes from "prop-types";
TeamList.propTypes = {
  data: PropTypes.array.isRequired,
};
export default function TeamList({ data }) {
  const images = { navi: imgNavi, team_liquid: imgTeamLiquid };
  return (
    <List
      bordered
      dataSource={data}
      header={<Title level={4}>Registerd Team</Title>}
      renderItem={(item) => (
        <List.Item>
          <Row style={{ width: "100%", padding: 4 }}>
            <div>
              <Img src={`images/${item.src}.png`} />
              <Text strong>{item.name}</Text>
            </div>
          </Row>
        </List.Item>
      )}
    />
  );
}
