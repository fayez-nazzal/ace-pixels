// A context that holds & change the value of paintColor

import { Context, createContext } from "preact";
import { useState } from "react";

export const paintContext = createContext({
  paintColor: "#000",
  setPaintColor: (value: string) => {},
});

interface IPaintContextProviderProps {
  children: JSX.Element;
}

export const PaintContextProvider = ({
  children,
}: IPaintContextProviderProps) => {
  const [paintColor, setPaintColor] = useState("#000");

  return (
    <paintContext.Provider value={{ paintColor, setPaintColor }}>
      {children}
    </paintContext.Provider>
  );
};
