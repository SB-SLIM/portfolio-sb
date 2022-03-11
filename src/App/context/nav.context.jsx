import { createContext, useContext, useState } from "react";

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [activePage, setActivePage] = useState("About");
  const [sideIsOpen, setSideIsOpen] = useState(false);

  return (
    <NavContext.Provider
      value={{ sideIsOpen, setSideIsOpen, activePage, setActivePage }}
    >
      {children}
    </NavContext.Provider>
  );
};

export const useNavContext = () => {
  return useContext(NavContext);
};
