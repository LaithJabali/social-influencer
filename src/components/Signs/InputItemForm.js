import React from 'react';
import { Form, Input } from 'antd';
import Style from './Signs.module.css';

const InputItemForm = ({ formItems }) => {
  return (
    <>
      {formItems.map((item) => (
        <Form.Item key={item.name} name={item.name} rules={item.rules}>
          <Input placeholder={item.placeholder} className={Style.input} />
        </Form.Item>
      ))}
    </>
  );
};

export default InputItemForm;
