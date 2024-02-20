import { MinusIcon, Plus, X } from "lucide-react";

import {
  Quit,
  WindowToggleMaximise,
  WindowMinimise,
} from "../../../../wailsjs/runtime";

const Variants = {
  Close: { element: <X size={16} />, function: () => Quit() },
  ToggleMaximise: {
    element: <Plus size={16} />,
    function: () => WindowToggleMaximise(),
  },
  Minimise: {
    element: <MinusIcon size={16} />,
    function: () => WindowMinimise(),
  },
};

interface ActionProps extends React.HTMLProps<HTMLButtonElement> {
  type: keyof typeof Variants;
}

export function FrameAction({ type }: ActionProps) {
  return (
    <button
      onClick={Variants[type].function}
      className="p-1 bg-zinc-800 rounded-full hover:bg-zinc-700"
    >
      {Variants[type].element}
    </button>
  );
}
