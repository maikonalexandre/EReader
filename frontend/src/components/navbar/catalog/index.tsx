import { Drawer, DrawerContent, DrawerTrigger } from "../../ui/drawer";
import { useLocation } from "react-router-dom";
import { Button } from "../button";

export function Catalog() {
  const location = useLocation();
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button
          type="NotebookText"
          data-reading={location.pathname !== "/read"}
          className="p-1 rounded-md data-[reading=true]:hidden hover:bg-zinc-700"
        />
      </DrawerTrigger>

      <DrawerContent className="h-full w-80">
        <h2>Hello</h2>
      </DrawerContent>
    </Drawer>
  );
}
