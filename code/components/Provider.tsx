"use client";

import {
  useContext,
  createContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

import data from "@/public/assets/data.json";

interface ContextProps {
  name: string;
  addName: (name: string) => void;
  saying: Saying[];
  reset: () => void;
  setNewSaying: (id: number) => void;
  addNewSaying: (id: number) => void;
}

type Saying = {
  id: number;
  content: string;
};

const AppContext = createContext<ContextProps>({} as ContextProps);

export default function Provider({ children }: { children: ReactNode }) {
  const [name, setName] = useState<string>("");
  const [saying, setSaying] = useState<Saying[]>([data[0]]);

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedSaying = localStorage.getItem("saying");

    if (storedName) {
      setName(storedName);
    }

    if (storedSaying) {
      setSaying(JSON.parse(storedSaying));
    }
  }, []);

  const reset = () => {
    setName("");
    setSaying([data[0]]);
    localStorage.clear()
  };

  const setNewSaying = (id: number) => {
    const newSaying = [data[id]];
    setSaying(newSaying);
    localStorage.setItem("saying", JSON.stringify(newSaying));
  };
  
  const addNewSaying = (id: number) => {
    setSaying((prev) => {
      const updatedSayings = [...prev, data[id]];
      localStorage.setItem("saying", JSON.stringify(updatedSayings));
      return updatedSayings;
    });
  };
  

  const addName = (name: string) => {
    setName(name)
    localStorage.setItem("name", name)
  }

  return (
    <AppContext.Provider value={{ name, saying, addNewSaying, addName, reset, setNewSaying }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
