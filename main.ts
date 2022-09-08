import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

const router = new Router();

router.get('/', ({ response }: { response: Response }) => {
    response.body = {
        message: "Hello World",
    };
});

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Running: http://localhost:8080");
await app.listen({
    port: 8080
});
