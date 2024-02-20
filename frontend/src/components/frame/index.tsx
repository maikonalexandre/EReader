import {
  BookText,
  Library,
  Minus,
  MoreVertical,
  NotebookText,
  Plus,
  X,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { FrameAction } from "./action";
import { Title } from "./title";
import { Catalog } from "./catalog";

export function Frame() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="group px-3">
      <nav
        data-reading={location.pathname == "/read"}
        className="w-full py-2 grid grid-cols-3 transition-all duration-500 data-[reading=true]:invisible group-hover:visible"
      >
        <div className="flex gap-1">
          <button
            onClick={() => {
              navigate("/");
            }}
            className="p-1 rounded-md hover:bg-zinc-700"
          >
            <Library size={16} />
          </button>

          <Catalog />
        </div>
        <Title />
        <div className="flex gap-2 justify-self-end">
          <button
            onClick={() => {
              navigate("/config");
            }}
            className="p-1 rounded-md hover:bg-zinc-700"
          >
            <MoreVertical size={16} />
          </button>
          <FrameAction type="Minimise" />
          <FrameAction type="ToggleMaximise" />
          <FrameAction type="Close" />
        </div>
      </nav>
    </div>
  );
}
