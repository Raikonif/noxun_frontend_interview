import { useContext, useState } from "react";
import SecondInputTextCard from "./SecondInputTextCard";
import ThirdCardForChars from "./ThirdCardForChars";
import TextInputContext from "../context/TextInputContext.tsx";

function MainComponent() {
  const [isEmptyText, setIsEmptyText] = useState<boolean>(true);
  const { textInput, setTextInput } = useContext(TextInputContext);
  return (
    <div
      className={`${isEmptyText ? "border-orange-400" : "border-cyan-400"} flex flex-col justify-center w-96 bg-slate-700 px-2 py-5 border-4 rounded-xl m-2`}>
      <h1
        className={`${
          isEmptyText ? "text-orange-400" : "text-cyan-400"
        } text-center`}
      >
        MainComponent
      </h1>
      <SecondInputTextCard setIsEmptyText={setIsEmptyText} setTextInput={setTextInput} textInput={textInput} />
      <ThirdCardForChars textInput={textInput} />
    </div>
  );
}

export default MainComponent;
