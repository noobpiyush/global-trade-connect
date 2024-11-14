import express from "express"
import { rootRouter } from "./router";

const app = express();


app.use(express.json());

app.get("/health", async (req, res) => {
    res.send({msg:"hii there"})

    return;
})

app.use("/api/v1",rootRouter)
app.listen(3001);
