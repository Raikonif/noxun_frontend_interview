interface MappingSquareCharProps {
  textInput: string;
}

function MappingSquareChar({ textInput }: MappingSquareCharProps) {
  return (
    <div className="items-center grid grid-cols-6 gap-4">
      {textInput.split("").map((char) => (
        <span className="flex items-center justify-center">
          <h3
            className={`${char === " " ? "bg-orange-600" : "bg-cyan-600"} text-center h-[30px] w-[30px] text-white p-2 border mx-2`}>
            {char}
          </h3>
        </span>
      ))}
    </div>
  );
}

export default MappingSquareChar;
