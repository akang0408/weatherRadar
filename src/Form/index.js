import React from 'react';
import { Button, FormWrapper } from './styles';

const Form = ({ getWeather }) => (
  <FormWrapper onSubmit={getWeather}>
    <input type='text' name='city' placeholder='City...'/>
    <input type='text' name='country' placeholder='Country...'/>
    <Button>Get Weather</Button>
  </FormWrapper>
)

export default Form;