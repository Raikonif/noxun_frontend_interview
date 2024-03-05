import { useEffect, useState } from "react";
import MappingSquareChar from "./MappingSquareChar";

interface ThirdCardForCharsProps {
  textInput: string;
}

function ThirdCardForChars({ textInput }: ThirdCardForCharsProps) {
  const [cleanText, setCleanText] = useState<string>(textInput);
  useEffect(() => {
    const textWithoutSpaces = textInput.trim();
    setCleanText(textWithoutSpaces);
  }, [cleanText, textInput]);
  return (
    <div className="p-5 border m-2 w">
      {textInput === "" ? (
        <h3 className="text-white p-1">{"Input a Text"}</h3>
      ) : (
        <MappingSquareChar textInput={cleanText} />
      )}
    </div>
  );
}

export default ThirdCardForChars;
