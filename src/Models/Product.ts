import { Model } from "./Model";
import { createID } from "../Utilities/ID";

type ProductType = {
    id?: string;
    title: string;
    cost?: string;
    url: string;
};

export class Product extends Model {
    async createProduct(product: ProductType) {
        return this.connection.insert({
            id: createID(),
            title: product.title.trim(),
            cost: product.cost,
        });
    }

    async query(title?: string): Promise<ProductType[]> {
        const items = await this.connection.select();

        if (title) {
            return items.records.filter(item => item.title.includes(title))
        }

        return items.records;
    }
}