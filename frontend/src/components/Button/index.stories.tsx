import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '.';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: any) => (
  <>
    <br />
    <Button {...args} />
  </>
);

export const SolidButton = Template.bind({});
SolidButton.args = {
  children: 'Entrar',
  onClick: action('onClick called'),
};
