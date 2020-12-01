import * as React from "react";
import {
  Form,
  Input,
  DatePicker,
  Select,
  InputNumber,
  Button,
  Divider,
  Radio,
  Rate,
  Checkbox,
  Row,
  Col,
  Typography,
} from "antd";
const { TextArea } = Input;
const { Text } = Typography;
const { Option } = Select;
import PropTypes from "prop-types";
NForm.propTypes = {
  onChange: PropTypes.func,
  item: PropTypes.object,
};
NForm.defaultProps = {
  onChange: () => {},
};
export default function NForm(props) {
  const v = props.item;
  const { placeholder, onChange, options, onLoad } = props.item;
  return v.type === "divider" ? (
    <Divider>{v.label}</Divider>
  ) : v.type === "button" ? (
    <Form.Item {...props.tailLayout}>
      <Button type="primary" onClick={v.onClick}>
        {v.label}
      </Button>
    </Form.Item>
  ) : (
    <Form.Item
      key={v.name}
      name={v.name}
      label={v.label ? <Text strong>{v.label}</Text> : null}
      rules={[{ required: v.required }]}
    >
      {v.type === "text" ? (
        <Input
          disabled={v.disabled}
          addonBefore={v.icon}
          placeholder={v.placeholder}
          size={v.size}
        />
      ) : v.type === "area" ? (
        <TextArea rows={4} />
      ) : v.type === "number" ? (
        <InputNumber disabled={v.disabled} style={{ width: 300 }} />
      ) : v.type === "rate" ? (
        <Rate allowHalf />
      ) : v.type === "radio" ? (
        <Radio.Group
          size={v.size || "large"}
          options={(v.options || []).map((v) => ({
            value: v.key,
            label: v.value,
          }))}
          onChange={v.onChange}
          optionType={v.optionType || "button"}
          buttonStyle="solid"
          value={v.value}
          disabled={v.disabled}
        />
      ) : v.type === "checkbox" ? (
        <Checkbox.Group onChange={v.onChange}>
          {(v.options || []).map((w) => (
            <Row key={w.key}>
              <Col span={24}>
                <Checkbox value={w.key}>{w.value}</Checkbox>
              </Col>
            </Row>
          ))}
        </Checkbox.Group>
      ) : v.type === "date" ? (
        <DatePicker disabled={v.disabled} style={{ width: 300 }} format="LL" />
      ) : v.type === "time" ? (
        <DatePicker picker={"time"} style={{ width: 300 }} format="HH:mm" />
      ) : v.type === "select" || v.type === "multiple" || v.type === "tags" ? (
        <Select
          style={{ minWidth: 150 }}
          size={v.size}
          disabled={v.disabled}
          placeholder={v.placeholder}
          mode={v.type === "multiple" || v.type === "tags" ? v.type : null}
          showSearch={v.showSearch}
          allowClear
          onChange={v.onChange}
          loading={v.loading ? true : false}
          filterOption={(input, option) => {
            return (
              option.children &&
              typeof option.children === "string" &&
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            );
          }}
        >
          {(v.options || []).map((v) => (
            <Option key={v.key} value={v.key}>
              {v.value}
            </Option>
          ))}
        </Select>
      ) : null}
    </Form.Item>
  );
}
