import { useLocation, useNavigate } from "react-router-dom";
import { FrameAction } from "./action";
import { Title } from "./title";
import { Catalog } from "./catalog";
import { Button } from "./button";
import { ConfigDialog } from "../configDialog";

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="group px-3">
      <nav
        data-reading={location.pathname == "/read"}
        className="w-full py-2 grid grid-cols-3 transition-all duration-500 data-[reading=true]:invisible group-hover:visible"
      >
        <div className="flex gap-1">
          <Button type="Library" onClick={() => navigate("/")} />
          <Button
            type="BookPlus"
            data-reading={location.pathname != "/"}
            className="p-1 rounded-md data-[reading=true]:hidden hover:bg-zinc-700"
          />
          <Catalog />
        </div>
        <Title />
        <div className="flex gap-2 justify-self-end">
          <ConfigDialog />
          <FrameAction type="Minimise" />
          <FrameAction type="ToggleMaximise" />
          <FrameAction type="Close" />
        </div>
      </nav>
    </div>
  );
}
