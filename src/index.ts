import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import { AliexpressScrapper } from "./modules/scrappers/AliexpressScrapper";
import { IScrapper } from "./modules/scrappers/IScrapper";

const scrappers: { [key: string]: IScrapper } = {
    aliexpress: new AliexpressScrapper()
};

const app = express();

app.use(cors());
app.use(morgan("dev"));

app.post("/api/:store/scrapp/:product", (req: Request, res: Response) => {
    const { store, product } = req.params;
    if(store in scrappers) {
        scrappers[store].search(product);
    }
    res.send("Hello World!");
});

app.listen(65168, () => {
    console.log("Example app listening on: http://localhost:65168");
});