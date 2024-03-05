import React, { useEffect } from "react";

interface SecondInputTextCardProps {
  setIsEmptyText: (isEmptyText: boolean) => void;
  setTextInput: (textInput: string) => void;
  textInput: string;
}

function SecondInputTextCard({ setIsEmptyText, textInput, setTextInput }: SecondInputTextCardProps) {
  useEffect(() => {
    if (textInput === "") {
      setIsEmptyText(true);
    } else {
      setIsEmptyText(false);
    }
  }, [textInput, setIsEmptyText]);

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.target.value);
  };

  return (
    <div className="m-2 flex flex-col p-6 w-22 border">
      <h2 className="text-white mb-2">Type Something</h2>
      <input
        type="text"
        className="px-2 py-1 w-full"
        placeholder="Write ..."
        value={textInput}
        onChange={(e) => onChangeText(e)}
      />
    </div>
  );
}

export default SecondInputTextCard;
