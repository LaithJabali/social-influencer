import React from 'react';
import MyLink from './MyLink';
import { Form } from 'antd';

const LinkItemForm = ({ForgotLink}) => {
  return (
    <Form.Item>
      <MyLink Links={ForgotLink} />
    </Form.Item>
  );
};

export default LinkItemForm;
