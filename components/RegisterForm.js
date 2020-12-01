import React from "react";
import { Form, Button, Divider } from "antd";
import { NForm } from "components";
import {
  UserOutlined,
  KeyOutlined,
  MailOutlined,
  FacebookOutlined,
  GooglePlusOutlined,
} from "@ant-design/icons";
export default function RegisterForm(props) {
  const [forms, setForm] = React.useState([]);
  React.useEffect(() => {
    setForm([
      {
        type: "text",
        name: "username",
        placeholder: "Username",
        icon: <UserOutlined />,
        size: "large",
        required: true,
      },
      {
        type: "text",
        name: "password",
        placeholder: "Password",
        icon: <KeyOutlined />,
        size: "large",
        required: true,
      },
      {
        type: "text",
        name: "email",
        placeholder: "Email",
        icon: <MailOutlined />,
        size: "large",
        required: true,
      },
    ]);
  }, []);
  return (
    <Form>
      <Button
        size="large"
        style={{ marginRight: 8, backgroundColor: "#3b5998", color: "white" }}
        icon={<FacebookOutlined />}
      >
        Login With Facebook
      </Button>
      <Button
        size="large"
        style={{ backgroundColor: "#db4a39", color: "white", marginBottom: 24 }}
        icon={<GooglePlusOutlined />}
      >
        Login With Google
      </Button>
      {(forms || []).map((v) => (
        <NForm item={v} />
      ))}
      <Button style={{ marginTop: 8, width: 200 }} size="large" type="primary">
        Signup
      </Button>
    </Form>
  );
}
