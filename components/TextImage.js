import React from "react";
import { Typography, Space, Avatar } from "antd";
const { Text } = Typography;
import { Img } from "components";
export default function TextImage({ img, name, round }) {
  return (
    <div>
      <Space align="center">
        <Avatar
          style={{ width: 44, height: 44, borderRadius: round ? "50%" : 0 }}
          icon={
            <Img
              layout="fixed"
              width={44}
              height={44}
              src={`/images/${img}.png`}
            />
          }
        />
        <Text strong>{name}</Text>
      </Space>
    </div>
  );
}
