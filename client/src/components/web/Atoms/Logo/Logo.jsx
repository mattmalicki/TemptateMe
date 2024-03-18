import { ReactComponent as LogoIcon } from "./icon-logo.svg";

const Logo = (size) => {
  return (
    <div style={`width: ${size}px, height: ${size}px`}>
      <LogoIcon />
    </div>
  );
};

export { Logo };
