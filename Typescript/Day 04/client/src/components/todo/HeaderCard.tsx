"use client";
import { useEffect, useState } from "react";
import { Todo } from "@/types/todo";

type Props = {
  todoList: Todo[];
};

export function HeaderCard({ todoList }: Props) {
  const [today, setToday] = useState<Date | null>(null);

  useEffect(() => {
    const id = setTimeout(() => setToday(new Date()), 0);
    return () => clearTimeout(id);
  }, []);

  const month = today ? today.toLocaleDateString("en-US", { month: "short" }) : "";
  const day = today ? today.getDate() : "";

  const total = todoList.length;
  const done = todoList.filter((todo) => todo.status === "done").length;
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <div className="flex justify-between items-center w-full h-30 gap-2.5 select-none">
      <div className="h-full w-15 rounded-full bg-(--cal-col) flex flex-col justify-start items-center p-0.5">
        <span className="flex-1 flex justify-center items-center text-2xl font-semibold bg-(--bg-sec-col) w-full aspect-square rounded-full">
          {day}
        </span>
        <span className="w-full aspect-square rounded-full flex justify-center items-center text-(--bg-sec-col)/80 text-xl tracking-tighter">
          {month}
        </span>
      </div>

      <div className="flex-1 bg-(--bg-sec-col) h-full rounded-3xl p-4 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm opacity-60">Todo progress</p>
            <p className="text-2xl font-semibold">{percent}%</p>
          </div>
          <p className="text-sm opacity-60">
            {done}/{total} done
          </p>
        </div>

        <div className="w-full h-3 rounded-full bg-foreground/10 overflow-hidden">
          <div
            className="h-full rounded-full bg-(--cal-col) transition-all duration-500"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
}