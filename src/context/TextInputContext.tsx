import { createContext } from "react";

interface IContextData {
  textInput: string;
  setTextInput: (textInput: string) => void;
}

const TextInputContext = createContext<IContextData>({} as IContextData);

export default TextInputContext;
