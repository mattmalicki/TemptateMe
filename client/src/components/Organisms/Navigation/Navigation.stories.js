import { Navigation } from "./Navigation.jsx";

export default {
  title: "organisms/Navigation",
  component: Navigation,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    isFooter: false,
  },
};
