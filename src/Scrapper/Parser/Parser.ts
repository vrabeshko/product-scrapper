import { HTMLElement, parse } from "node-html-parser";

export abstract class Parser {
    domain: string;
    content: HTMLElement;

    constructor(domain: string) {
        this.domain = domain;
    }

    initHTML(html: string): void {
        this.content = parse(html);
    }

    abstract getProductTitle(): string; // TODO: make general methods based on types of selectors
    abstract getProductCost(): string;
}