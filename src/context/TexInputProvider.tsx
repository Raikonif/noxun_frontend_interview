import { ReactNode, useState } from "react";
import TextInputContext from "./TextInputContext.tsx";


interface Props {
  children: ReactNode;
}

function TextInputProvider({ children }: Props) {
  const [textInput, setTextInput] = useState<string>("");
  return (
    <TextInputContext.Provider value={{ textInput, setTextInput }}>
      {children}
    </TextInputContext.Provider>
  );
}

export default TextInputProvider;
