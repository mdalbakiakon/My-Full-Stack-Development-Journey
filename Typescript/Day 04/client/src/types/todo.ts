// work status
export type Status = "pending" | "done";

// todo type
export type Todo = {
    id: string;
    title: string;
    status: Status;
}