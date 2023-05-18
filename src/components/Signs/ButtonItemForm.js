import React from 'react';
import { Form } from 'antd';
import Style from './Signs.module.css';
import CustomButtons from '../CustomButtons';

const ButtonItemForm = ({buttons}) => {
  return (
    <Form.Item>
      <CustomButtons buttons={buttons} buttonClass={Style.button} />
    </Form.Item>
  );
};

export default ButtonItemForm;
