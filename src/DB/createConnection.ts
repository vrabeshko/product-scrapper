import Collection from "./Collection";
import { DBConnection } from "./DBConnection";

export function createConnection(table: string): DBConnection {
    const type = process.env.DB_TYPE;

    if (type === "Collection") {
        return new Collection(table);
    }

    throw new Error("Invalid DB type");
}