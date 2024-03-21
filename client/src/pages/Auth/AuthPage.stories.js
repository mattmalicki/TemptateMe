import { AuthPage } from "./AuthPage.jsx";

export default {
  title: "pages/AuthPage",
  component: AuthPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    isRegister: false,
  },
};
