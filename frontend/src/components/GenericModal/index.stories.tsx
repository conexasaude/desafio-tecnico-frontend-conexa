import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { action } from "@storybook/addon-actions";
import GenericModal from ".";

const containerStyle = {
  maxWidth: "1100px",
  margin: "20px auto",
};

export default {
  title: "GenericModal",
  component: GenericModal,
} as ComponentMeta<typeof GenericModal>;

const Template: ComponentStory<typeof GenericModal> = (args: any) => (
  <div style={containerStyle}>
    <GenericModal handleClose={action("handleClose called")} show {...args}>
      <div>Eu sou um simples conteúdo</div>
    </GenericModal>
  </div>
);

export const Default = Template.bind({});
Default.args = {};
