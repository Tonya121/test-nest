import React from 'react';
import { Form } from 'react-final-form';
import TextInput from '../field/TextInput';
import { FormWrap } from './styles';

const FormCard = () => {
  const onSubmit = () => {
    console.log('rtg')
  }
  return (
    <Form onSubmit={onSubmit}>
      {props => (
        <FormWrap onSubmit={props.handleSubmit}>
          <div>
             <TextInput name="title" type="text"/>
             <TextInput name="upload" type="file"/>
          </div>
         
          <div>
             <button type="submit">Submit</button>
          </div>
         
        </FormWrap>
      )}
    </Form>
  )
};

export default FormCard;