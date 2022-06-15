import { Source } from "./Source";

class DB extends Source {
    async retreive(): Promise<string[] | null> {
        return Promise.resolve(null);
    }
}