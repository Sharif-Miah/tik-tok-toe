import { useState } from "react";
import Button from "../Button/Button";
// import calculateWinner from "../CalculateWinner/CalculateWinner";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  let status;

  const handleBoard = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div>
      <h1>{status}</h1>
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

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
