import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ConexaHeader from '.';

export default {
  title: 'ConexaHeader',
  component: ConexaHeader,
} as ComponentMeta<typeof ConexaHeader>;

const Template: ComponentStory<typeof ConexaHeader> = (args: any) => (
  <ConexaHeader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'Dr.Gandalf',
};
