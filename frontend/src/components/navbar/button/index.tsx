import { Library, MoreVertical, NotebookText, VaultIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type: keyof typeof variants;
}

const variants = {
  Library: <Library size={16} />,
  MoreVertical: <MoreVertical size={16} />,
  NotebookText: <NotebookText size={16} />,
};

export function Button({ type, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge("p-1 rounded-md hover:bg-zinc-700", className)}
    >
      {variants[type]}
    </button>
  );
}
