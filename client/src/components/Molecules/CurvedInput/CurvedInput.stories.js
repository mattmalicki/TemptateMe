import { CurvedInput } from "./CurvedInput.jsx";

export default {
  title: "molecules/CurvedInput",
  component: CurvedInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    placeholderText: "TEST",
    buttonText: "TEST",
    onChange: () => {},
    onClick: () => {},
  },
};
