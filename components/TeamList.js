import React from "react";
import { List, Typography, Row } from "antd";
const { Text } = Typography;
import { TextImage } from "components";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
TeamList.propTypes = {
  data: PropTypes.array.isRequired,
};
export default function TeamList({ data }) {
  const router = useRouter();
  const onClickList = (item) => {
    router.push({ pathname: "/team", query: { id: item.id } });
  };
  return (
    <List
      style={{ marginTop: 12 }}
      bordered
      dataSource={data}
      className="hover"
      header={
        <Text style={{ fontSize: 16, fontWeight: 600 }}>Registerd Team</Text>
      }
      footer={<a>See all 202 teams</a>}
      renderItem={(item) => (
        <List.Item onClick={() => onClickList(item)}>
          <Row style={{ width: "100%", padding: 4 }}>
            <TextImage round img={item.img} name={item.name} />
          </Row>
        </List.Item>
      )}
    />
  );
}
