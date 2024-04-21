import { CurvedButton } from "./CurvedButton.jsx";
export default {
  title: "atoms/CurvedButton",
  component: CurvedButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    title: "Registration",
    type: "button",
    greenOrBlack: "",
    size: "big",
    onClick: () => {
      console.log("TESTING");
    },
  },
};
