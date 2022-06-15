import { Amazon } from "./Amazon";
import { Custom } from "./Custom";
import { Ebay } from "./Ebay";
import { Parser } from "./Parser";

export function createParser(url: string): Parser {
    const productUrlMap = {
        "ebay.com": Ebay,
        "www.ebay.com": Ebay,
        "amazon.com": Amazon,
        "www.amazon.com": Amazon,
    }; // TODO: make more smart map to allow diferrent region. i.e. amazon.co.uk etc.

    const parsedUrl = new URL(url);
    const domain = parsedUrl.host;
    const ParserClass = productUrlMap[domain];
    if (ParserClass) {
        return new ParserClass(domain);
    }

    throw new Error("Domain is not supported yet"); // requires additional checks for working with multiple domains
    // return new Custom(domain);
}