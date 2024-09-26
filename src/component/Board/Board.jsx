import { useState } from "react";
import Button from "../Button/Button";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleBoard = (i) => {
    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  return (
    <div>
      <div className="flex">
        <Button value={squares[0]} handleSqure={() => handleBoard(0)} />
        <Button value={squares[1]} handleSqure={() => handleBoard(1)} />
        <Button value={squares[2]} handleSqure={() => handleBoard(2)} />
      </div>
      <div className="flex">
        <Button value={squares[3]} handleSqure={() => handleBoard(3)} />
        <Button value={squares[4]} handleSqure={() => handleBoard(4)} />
        <Button value={squares[5]} handleSqure={() => handleBoard(5)} />
      </div>
      <div className="flex">
        <Button value={squares[6]} handleSqure={() => handleBoard(6)} />
        <Button value={squares[7]} handleSqure={() => handleBoard(7)} />
        <Button value={squares[8]} handleSqure={() => handleBoard(8)} />
      </div>
    </div>
  );
}
