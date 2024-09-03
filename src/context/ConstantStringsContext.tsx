import React, { createContext, useContext, ReactNode } from "react";
import { STRINGS } from "../constants/strings.en.ts";

interface ConstantStringsContextType {
  strings: typeof STRINGS;
}

interface ConstantStringsProviderProps {
  children: ReactNode;
}

export const ConstantStringsContext = createContext<
  ConstantStringsContextType | undefined
>(undefined);


export const ConstantStringsProvider: React.FC<
  ConstantStringsProviderProps
> = ({ children }) => {
  return (
    <ConstantStringsContext.Provider value={{ strings: STRINGS }}>
      {children}
    </ConstantStringsContext.Provider>
  );
};
