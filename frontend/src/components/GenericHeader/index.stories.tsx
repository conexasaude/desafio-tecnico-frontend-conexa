import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import GenericHeader from '.';

export default {
  title: 'GenericHeader',
  component: GenericHeader,
} as ComponentMeta<typeof GenericHeader>;

const Template: ComponentStory<typeof GenericHeader> = (args: any) => (
  <GenericHeader {...args} />
);

export const DesktopOneChild = Template.bind({});
DesktopOneChild.args = {
  children: <div>Simple children</div>,
};

export const DesktopTwoChildren = Template.bind({});
DesktopTwoChildren.args = {
  children: (
    <>
      <div>Simple children</div>
      <div>Simple second children</div>
    </>
  ),
};
