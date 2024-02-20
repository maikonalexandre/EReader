import { NotebookText } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "../../drawer";
import { useLocation } from "react-router-dom";

export function Catalog() {
  const location = useLocation();
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <button
          data-reading={location.pathname !== "/read"}
          className="p-1 rounded-md data-[reading=true]:hidden hover:bg-zinc-700"
        >
          <NotebookText size={16} />
        </button>
      </DrawerTrigger>

      <DrawerContent className="h-full w-80">
        <h2>Hello</h2>
      </DrawerContent>
    </Drawer>
  );
}
