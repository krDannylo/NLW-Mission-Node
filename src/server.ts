import express from "express";

const app = express();

app.get("/test", (req, res) => {
    return res.send("Hello World - Get")
})

app.post("/test-post", (req, res) => {
    return res.send("Hello World - POST")
})

app.listen(3000, () => console.log("Server is running..."));