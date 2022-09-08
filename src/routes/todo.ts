import { Router } from "https://deno.land/x/oak/mod.ts";
import todoController from "../logic/todo.ts";

const todoRouter = new Router("/todo");
todoRouter
    .get("/todos", todoController.getAllTodos)

export default todoRouter;