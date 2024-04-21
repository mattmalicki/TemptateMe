import { AuthForm } from "./AuthForm.jsx";

export default {
  title: "organisms/AuthForm",
  component: AuthForm,
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
