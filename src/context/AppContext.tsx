import {
  FC,
  PropsWithChildren,
  createContext,
  useState,
  useContext,
} from "react";

import type { AppContextType, DataType } from "../types/types";

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState<DataType[]>([]);

  const setDataHandler = (newData: DataType | DataType[]) => {
    setData((previousState) => {
      if (Array.isArray(newData)) {
        return [...previousState, ...newData];
      }
      return [...previousState, newData];
    });
  };

  return (
    <AppContext.Provider value={{ data, setData: setDataHandler }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
