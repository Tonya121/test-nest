import React from 'react';
import { Field } from 'react-final-form';

import { Input } from './styles';

const TextInput = ({ name, type }) => (
  <Field name={name}>
    {props => (
      <div>
        <Input type={type} {...props.input} />
      </div>
    )}
  </Field>
);

export default TextInput;
