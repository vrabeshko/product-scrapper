import { Parser } from "./Parser";

export class Ebay extends Parser {
    getProductTitle(): string {
        return this.content.querySelector(".x-item-title").innerText;
    }

    getProductCost(): string {
        return this.content.querySelector(".mainPrice span").innerText;
    }
}