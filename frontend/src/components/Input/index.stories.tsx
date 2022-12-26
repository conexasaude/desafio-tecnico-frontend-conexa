import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Input from '.';

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: any) => (
  <>
    <br />
    <form style={{ maxWidth: '400px', width: '100%', margin: '32px auto' }}>
      <Input {...args} />
    </form>
  </>
);

export const TypeEmail = Template.bind({});
TypeEmail.args = {
  labelText: 'E-mail',
  placeholder: 'Digite seu e-mail',
  name: 'email',
  required: true,
  type: 'email',
  onChange: action('onChange called'),
};

export const TypePassword = Template.bind({});
TypePassword.args = {
  labelText: 'Senha',
  placeholder: 'Digite sua senha',
  name: 'password',
  required: true,
  type: 'password',
  onChange: action('onChange called'),
  toolTip: 'sua senha deve conter carcteres e numero',
};
