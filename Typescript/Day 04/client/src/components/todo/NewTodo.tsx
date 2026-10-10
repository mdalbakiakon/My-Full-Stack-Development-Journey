import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/Button";

type Props = {
    onAdd: (text: string) => void;
};

export function NewTodo({ onAdd }: Props) {
    const [text, setText] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (text.trim() === "") return;
        onAdd(text);
        setText("");
    }

    return (
        <form onSubmit={handleSubmit} className="w-full h-12 flex justify-between items-center gap-2.5 select-none">
            <input
                type="text"
                name="todoInput"
                id="todoInput"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="What to do?"
                className="outline-none border-2 border-(--inp-border-col) flex flex-1 rounded-2xl px-2.5 h-full"
            />

            <Button variant="cta" className="h-full" type="submit">
                <ChevronRight className="h-full aspect-square text-foreground" strokeWidth={3} />
            </Button>
        </form>
    );
}