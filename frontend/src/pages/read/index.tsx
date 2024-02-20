import { Progress } from "../../components/ui/progrees";

export function Read() {
  return (
    <div className="px-4">
      <h1>read</h1>
      <div className="flex items-center gap-2">
        <div>
          <span className="text-xs font-medium">5%</span>
        </div>
        <Progress value={50} className="bg-sky-500 h-[3px]" />
      </div>
    </div>
  );
}
