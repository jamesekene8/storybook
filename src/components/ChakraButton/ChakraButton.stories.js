import React from "react";
import { Button } from "@chakra-ui/react";
import { text, boolean } from "@storybook/addon-knobs";

export default {
  title: "Chakra/Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => <Button {...args} />;

export const Success = Template.bind({});
Success.args = {
  colorScheme: "green",
  children: "Success",
};

export const Danger = Template.bind({});
Danger.args = { colorScheme: "red", children: "Danger" };

export const Log = () => {
  <Button colorScheme="blue" onClick={() => console.log("Button Clicked")}>
    Log
  </Button>;
};

export const knobs = () => (
  <Button disabled={boolean("Disabled", false)}>
    {text("label", "Button Label")}
  </Button>
);

// export const Success = () => <Button colorScheme="green">Success</Button>;
// export const Danger = () => <Button colorScheme="red">Danger</Button>;
