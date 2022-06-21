import React from "react";
import Button from "./Button";
import { action, actions } from "@storybook/addon-actions";

export default {
  title: "Form/Button",
  component: Button,
  // args: {
  //   children: "Button",
  // },
  // decorators: [(story) => <Center>{story()}</Center>],
};

export const Primary = () => (
  <Button variant="primary" onClick={action("Click handler")}>
    Primary
  </Button>
);
export const Secondary = () => (
  <Button variant="secondary" {...actions("onClick", "onMouseOver")}>
    Secondary
  </Button>
);
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

// const Template = (args) => <Button {...args} />;

// export const PrimaryA = Template.bind({});
// PrimaryA.args = {
//   variant: "primary",
//   // children: "Primary Args",
// };

// export const SecondaryA = Template.bind({});
// SecondaryA.args = {
//   variant: "secondary",
//   // children: "Secondary Args",
// };

// export const LongPrimaryA = Template.bind({});
// LongPrimaryA.args = {
//   ...PrimaryA.args,
//   // children: "Long Primary Args",
// };
