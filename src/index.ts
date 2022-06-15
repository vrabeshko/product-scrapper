import dotenv from "dotenv";
import express from "express";
import { createConnection } from "./DB/createConnection";
import { Product } from "./Models/Product";
import { scrapProducts } from "./Scrapper";
import { Collection as ScrappingSource } from "./Scrapper/Source/Collection";

dotenv.config();

const dbConnection = createConnection("products"); // create connection globally to keep records in memory for collection type

const port = process.env.SERVER_PORT;

const app = express();

app.use(express.json())

app.get("/", async (req, res) => {
    res.send("Hey");
});

app.get("/products", async (req, res) => {
    const productModel = new Product(dbConnection);

    const search = req.query.search && req.query.search.toString();

    res.json(await productModel.query(search));
});

app.post("/products/scrap", async (req, res) => {
    const body = req.body;

    if (!req.body || !req.body.items || !req.body.items.length) {
        throw new Error("Invalid input. `items` should be provided");
    }

    const scrappingSource = new ScrappingSource({ concurrency: parseInt(process.env.SCRAP_CONCURRENCY, 10) || 10 });
    scrappingSource.items = body.items;

    const productModel = new Product(dbConnection);

    await scrapProducts(scrappingSource, productModel);

    res.json({ success: true });
});

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${ port }`);
});