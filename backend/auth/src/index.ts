import express from "express"
import { rootRouter } from "./router";

import cors from "cors"

const app = express();


app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173"
}))

app.get("/health", async (req, res) => {
    res.send({msg:"hii there"})

    return;
})

app.use("/api/v1",rootRouter)
app.listen(3001);
