import React, { createContext, useState, useContext } from "react";

// Create the context
const SidebarContext = createContext();

// Custom hook to consume the context
export const useSidebar = () => useContext(SidebarContext);

// SidebarContext component
const SidebarProvider = ({ children }) => {
  // State for sidebar visibility
  const [isShowSidebar, setIsShowSidebar] = useState(true);

  return (
    <SidebarContext.Provider value={{ isShowSidebar, setIsShowSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
