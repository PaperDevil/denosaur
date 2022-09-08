import { v4 } from "https://deno.land/std/uuid/mod.ts";
import { Todo } from "../interfaces/Todo.ts";

let todos: Todo[] = [
    {
        id: v4.generate(),
        todo: "Walk around house",
        isComplete: false
    }
];

export default todos;