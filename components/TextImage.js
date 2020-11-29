import React from "react";
import { Typography, Space } from "antd";
const { Text } = Typography;
import { Img } from "components";
export default function TextImage({ img, name }) {
  return (
    <div>
      <Space align="center">
        <Img
          style={{
            objectFit: "contain",
          }}
          src={`/images/${img}.png`}
        />
        <Text strong>{name}</Text>
      </Space>
    </div>
  );
}
