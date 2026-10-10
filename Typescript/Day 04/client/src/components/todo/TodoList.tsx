import type { Todo } from "@/types/todo";
import { TodoCard } from "./TodoCard";

type Props = {
    todoList: Todo[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
};

export function TodoList({ todoList, onToggle, onDelete }: Props) {
    return (
        <div className="flex flex-col justify-center items-center gap-2.5 w-full">
            {todoList.map((todo) => (
                <TodoCard
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}