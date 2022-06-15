export abstract class Source {
    concurrency: number;

    constructor(params: { concurrency: number }) {
        this.concurrency = params.concurrency || 10;
    }

    abstract retreive(): Promise<string[] | null>;
}