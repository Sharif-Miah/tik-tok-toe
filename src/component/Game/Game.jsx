import Board from "../Board/Board";

export default function Game() {
  return (
    <div>
      <h1 className="text-lg my-4 underline text-center font-bold">
        Tik Tok Toe App
      </h1>
      <div className="flex justify-center gap-5 mt-6">
        <div>
          <Board />
        </div>
        <div>{/* <ol>{ Write to order list here }</ol> */}</div>
      </div>
    </div>
  );
}
