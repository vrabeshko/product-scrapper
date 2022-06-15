import { DBConnection } from "./DBConnection";

class Collection extends DBConnection {
    data: { records: any[]; };

    constructor(table: string) {
        super(table);

        this.data = { records: [] };
    }

    async init(): Promise<void> {
        return Promise.resolve();
    }

    async select(): Promise<{ records: any[]; }> {
        return this.data;
    }

    async insert(fields: any): Promise<any> {
        this.data.records.push(fields);
        return fields;
    }
}

export default Collection;