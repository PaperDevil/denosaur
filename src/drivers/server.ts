import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "../routes/todo.ts";

const app = new Application(

);

app.use(router.routes());
app.use(router.allowedMethods());

export default app;