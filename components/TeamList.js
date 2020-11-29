import React from "react";
import { List, Typography, Row } from "antd";
const { Text } = Typography;
import { TextImage } from "components";
import PropTypes from "prop-types";
TeamList.propTypes = {
  data: PropTypes.array.isRequired,
};
export default function TeamList({ data }) {
  return (
    <List
      bordered
      dataSource={data}
      header={
        <Text style={{ fontSize: 16, fontWeight: 600 }}>Registerd Team</Text>
      }
      footer={<a>See all 202 teams</a>}
      renderItem={(item) => (
        <List.Item>
          <Row style={{ width: "100%", padding: 4 }}>
            <TextImage img={item.img} name={item.name} />
          </Row>
        </List.Item>
      )}
    />
  );
}
