import { Parser } from "./Parser";

export class Amazon extends Parser {
    getProductTitle(): string {
        return this.content.querySelector("#productTitle").innerText;
    }

    getProductCost(): string {
        const [minPrice, maxPrice] = this.content.querySelectorAll("#corePrice_desktop .a-price");

        if (!minPrice) {
            return null;
        }

        if (maxPrice) {
            return `${minPrice.firstChild.innerText} - ${maxPrice.firstChild.innerText}`;
        }

        return minPrice.firstChild.innerText;
    }
}