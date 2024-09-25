import Button from "../Button/Button";

export const Board = () => {
  return (
    <div className="border border-gray-400 p-3">
      <div className="flex">
        <Button />
        <Button />
        <Button />
      </div>
      <div className="flex">
        <Button />
        <Button />
        <Button />
      </div>
      <div className="flex">
        <Button />
        <Button />
        <Button />
      </div>
    </div>
  );
};
