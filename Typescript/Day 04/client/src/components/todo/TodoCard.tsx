import type { Todo } from "@/types/todo";
import { Circle, CircleCheckBig, X } from "lucide-react";
import { Button } from "../ui/Button";

type Props = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export function TodoCard({ todo, onToggle, onDelete }: Props) {
  return (
    <div
      key={todo.id}
      className="flex justify-between items-center gap-2.5 w-full h-15 border-2 border-(--inp-border-col)/50 rounded-3xl"
    >
      <Button onClick={() => onToggle(todo.id)}>
        {todo.status === "done" ? (
          <CircleCheckBig
            className={"text-[yellowgreen]"}
            strokeWidth={3}
          />
        ) : (
          <Circle
            className={"text-(--btn-icon-col) hover:text-[yellowgreen]"}
            strokeWidth={3}
          />
        )}
      </Button>
      <div className="flex flex-1 flex-col justify-between items-start">
        <span>{todo.title}</span>
        <span className="text-sm text-white/25 font-semibold">
          {todo.status}
        </span>
      </div>
      <Button onClick={() => onDelete(todo.id)}>
        <X
          className="text-(--btn-icon-col) hover:text-red-500"
          strokeWidth={3}
        />
      </Button>
    </div>
  );
}
