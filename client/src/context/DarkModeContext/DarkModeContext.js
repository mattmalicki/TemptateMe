import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext();

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const setDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <DarkModeContext.Provider value={{ isDark, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
