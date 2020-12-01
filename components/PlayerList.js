import React from "react";
import { List, Typography, Row } from "antd";
const { Text } = Typography;
import { TextImage } from "components";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
PlayerList.propTypes = {
  data: PropTypes.array.isRequired,
};
export default function PlayerList({ data }) {
  const router = useRouter();
  const onClickList = (item) => {
    router.push({ pathname: "/player", query: { id: item.id } });
  };
  return (
    <List
      bordered
      dataSource={data}
      className="hover"
      header={<Text style={{ fontSize: 16, fontWeight: 600 }}>Players</Text>}
      renderItem={(item) => (
        <List.Item onClick={() => onClickList(item)}>
          <Row style={{ width: "100%", padding: 4 }}>
            <TextImage round img={item.img || "player"} name={item.name} />
          </Row>
        </List.Item>
      )}
    />
  );
}
