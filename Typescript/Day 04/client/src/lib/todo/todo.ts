import type { Todo } from "@/types/todo";

// add new work to the list
export function addWork(todoList: Todo[], newWork: Todo): Todo[] {
    return [newWork, ...todoList];
}

// deleting from the list
export function deleteWork(todoList: Todo[], id: string): Todo[] {
    return todoList.filter((elem) => elem.id !== id);
}

// make work is done
export function doneWork(todoList: Todo[], id: string): Todo[] {
    return todoList.map(
        (elem): Todo => (elem.id === id ? { ...elem, status: "done" } 
        : elem)
    );
}

// toggle work status
export function toggleWork(todoList: Todo[], id: string): Todo[] {
    return todoList.map(
        (elem): Todo => (elem.id === id ?
            {
                ...elem,
                status: elem.status === "done" ? "pending" : "done"
            }
            : elem)
    )
}