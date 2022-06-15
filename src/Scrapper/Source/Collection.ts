import { Source } from "./Source";

export class Collection extends Source {
    items: string[];

    async retreive(): Promise<string[] | null> {
        if (this.items.length === 0) {
            return null;
        }

        return this.items.splice(0, this.concurrency);
    }
}
