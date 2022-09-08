import app from "./src/drivers/server.ts";


console.log("Running: http://localhost:8080");
await app.listen({
    port: 8080
});
