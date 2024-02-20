import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={() => {
          navigate("/read");
        }}
        className="p-2 bg-zinc-700"
      >
        click me
      </button>
    </div>
  );
}
