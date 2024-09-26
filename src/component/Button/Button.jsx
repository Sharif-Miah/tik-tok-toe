export default function Button({ value, handleSqure }) {
  return (
    <button
      onClick={handleSqure}
      className="border border-gray-400 m-1 w-12 h-12 rounded text-lg"
    >
      {value}
    </button>
  );
}
