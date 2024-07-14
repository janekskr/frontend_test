"use client";

import {
  useContext as useContext,
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

import data from "@/public/assets/data.json"

interface ContextProps {
  name: string;
  setName: Dispatch<SetStateAction<string>>
  saying: Saying[];
  reset: () => void
  setNewSaying: (id:number) => void
  addNewSaying: (id:number) => void
}

type Saying = {
  id: number;
  content: string
}

const AppContext = createContext<ContextProps>({} as ContextProps);

export default function Provider({ children }: { children: ReactNode }) {
  const [name, setName] = useState<string>(localStorage.getItem("name") ?? "");
  const [saying, setSaying] = useState<Saying[]>(localStorage.getItem("saying") ? JSON.parse(localStorage.getItem("saying")!) : [data[0]])

  const reset = () => {
    setName("")
    setSaying([data[0]])
  }

  const setNewSaying = (id: number) => {
    setSaying([data[id]])
  }

  const addNewSaying = (id: number) => {
    setSaying(prev => [...prev, data[id]])
  }

  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("saying", JSON.stringify(saying));
  }, [name, saying]);

  return (
    <AppContext.Provider value={{ name, saying, addNewSaying, setName, reset, setNewSaying }}>{children}</AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
