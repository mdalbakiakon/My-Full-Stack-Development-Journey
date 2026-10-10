"use client";

import { HeaderCard } from "@/components/todo/HeaderCard";
import { NewTodo } from "@/components/todo/NewTodo";
import { TodoList } from "@/components/todo/TodoList";
import { useState } from "react";
import type { Todo } from "@/types/todo";
import { addWork, toggleWork, deleteWork } from "@/lib/todo/todo";
import { uniqueId } from "@/lib/utils/uniqueId";

export default function Home() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  function handleAdd(text: string) {
    const newWork: Todo = {
      id: uniqueId(),
      title: text,
      status: "pending",
    };
    setTodoList(addWork(todoList, newWork));
  }

  function handleToggle(id: string) {
    setTodoList(toggleWork(todoList, id));
  }

  function handleDelete(id: string) {
    setTodoList(deleteWork(todoList, id));
  }

  return (
    <div className="w-full">
      <main className="max-w-lg w-full mx-auto py-7.5 flex flex-col justify-center items-center gap-7.5">
        <HeaderCard todoList={todoList}/>
        <NewTodo onAdd={handleAdd} />
        <TodoList
          todoList={todoList}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      </main>
    </div>
  );
}
