import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import Center from "../src/components/center/Center";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { theme } from "@chakra-ui/theme";
import "@storybook/addon-console";
import { withConsole } from "@storybook/addon-console";
import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withA11y } from "@storybook/addon-a11y";

// This is for version 5
// addDecorator((story) => (
//   <ChakraProvider theme={theme}>
//     <Box m="4">{story()}</Box>
//   </ChakraProvider>
// ));

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withKnobs);
addParameters({ viewport: { viewports: INITIAL_VIEWPORTS } });
addDecorator(withA11y);

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <Box m="4">
        <Story />
      </Box>
    </ChakraProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },

  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
