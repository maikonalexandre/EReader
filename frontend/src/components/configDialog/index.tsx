import { useNavigate } from "react-router-dom";
import { Button } from "../navbar/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

export function ConfigDialog() {
  const navigate = useNavigate();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="MoreVertical"
          onClick={() => {
            navigate("/config");
          }}
        />
      </DialogTrigger>

      <DialogContent>
        <div>cont</div>
      </DialogContent>
    </Dialog>
  );
}
