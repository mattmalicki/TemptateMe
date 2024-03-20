import { RectangleButton } from "./RectangleButton.jsx";

export default {
  title: "atoms/RectangleButton",
  component: RectangleButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    title: "Register",
    type: "button",
    colorScheme: "green",
    onClick: () => {
      console.log("TESTING");
    },
  },
};
