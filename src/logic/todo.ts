import todos from "./stubs/todo.ts"


export default {
    /**
     * @description create new todo
     * @route POST /todos
     */
    createTodo: async (request) => {
        return Response();
    },
    /**
     * @description get all todos
     * @route GET /todos
     */
    getAllTodos: async ({ response }: { response: any }) => {
        response.status = 200;
        response.body = {
            success: true,
            data: todos
        };
    }
}