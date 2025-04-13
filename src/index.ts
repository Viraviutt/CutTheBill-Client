import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(cors());
app.use(morgan("dev"));

app.post("/api/:store/scrapp/:product", (req: Request, res: Response) => {
    console.log(req.params);
    res.send("Hello World!");
});

app.listen(65168, () => {
    console.log("Example app listening on: http://localhost:65168");
});