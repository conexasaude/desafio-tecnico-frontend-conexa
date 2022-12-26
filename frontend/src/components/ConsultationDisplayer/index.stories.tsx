import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ConsultationDisplayer from '.';

export default {
  title: 'ConsultationDisplayer',
  component: ConsultationDisplayer,
} as ComponentMeta<typeof ConsultationDisplayer>;

const Template: ComponentStory<typeof ConsultationDisplayer> = (args: any) => (
  <>
    <br />
    <ConsultationDisplayer {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  consultationList: [
    {
      id: 1,
      date: 'Fri Feb 05 2021 10:20:00 GMT-0300 (Brasilia Standard Time)',
      patient: {
        id: 1,
        firstName: 'Frodo',
        lastName: 'Baggins',
        email: 'frodo.baggins@mail.com',
      },
    },
    {
      id: 2,
      date: 'Thu Feb 11 2021 09:00:00 GMT-0300 (Brasilia Standard Time)',
      patient: {
        id: 3,
        firstName: 'Saruman',
        lastName: 'The White',
        email: 'saruman.thewhite@mail.com',
      },
    },
  ],
  callToActionList: [
    {
      label: 'Atender',
      fn: (consultationInfo) => null,
    },
  ],
};
