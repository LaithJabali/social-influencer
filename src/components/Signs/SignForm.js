import React from 'react';
import { Form } from 'antd';
import InputItemForm from './InputItemForm';
import ButtonItemForm from './ButtonItemForm';
import LinkItemForm from './LinkItemForm';

const SignForm = ({ formItems, ForgotLink, buttons }) => {
  return (
    <Form>
      <InputItemForm formItems={formItems} />
      <LinkItemForm ForgotLink={ForgotLink} />
      <ButtonItemForm buttons={buttons} />
    </Form>
  );
};

export default SignForm;
