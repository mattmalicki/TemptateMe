import { RectangleInput } from "./RectangleInput.jsx";

export default {
  title: "molecules/RectangleInput",
  component: RectangleInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    isEmail: false,
    isPassword: false,
    isName: false,
    isError: false,
    isWarning: false,
    isCorrect: false,
    placeholderText: "",
    messageText: "",
    onChange: () => {},
  },
};
