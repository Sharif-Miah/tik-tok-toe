import { useState } from "react";

export default function Button() {
  const [value, setValue] = useState(null);
  const handleClick = () => {
    setValue("X");
  };
  return (
    <button
      onClick={handleClick}
      className="text-lg border border-gray-400  my-1 mx-1 w-12 h-12"
    >
      {value}
    </button>
  );
}
