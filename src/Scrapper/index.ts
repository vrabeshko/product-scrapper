import { get } from "../Utilities/HTTP";
import { Product } from "../Models/Product";
import { createParser } from "./Parser/createParser";
import { Source } from "./Source/Source";

export async function scrapProducts(source: Source, productModel: Product): Promise<void> {
    let sourceItems: string[] = await source.retreive();

    while(sourceItems !== null) {
        await Promise.all(sourceItems.map(async (url) => {
            try {
                // tslint:disable-next-line:no-console
                console.log(`Processing ${url}`);
                const parser = createParser(url);

                parser.initHTML(await get(url)); // TODO: handle 404

                const title = parser.getProductTitle();
                const cost = parser.getProductCost(); // TODO: handle possible items without price

                // tslint:disable-next-line:no-console
                console.log(`Got product '${title}' with price '${cost}'`);

                return productModel.createProduct({
                    title,
                    cost,
                    url,
                });
            } catch (err) {
                // TODO: need to log error
                // tslint:disable-next-line:no-console
                console.log(err);
            }
        }));

        sourceItems = await source.retreive();
    }
}