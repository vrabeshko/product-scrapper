export abstract class DBConnection {
    table: string;

    abstract init(): Promise<void>;
    abstract insert(fields: any): Promise<any>;
    abstract select(): Promise<{ records: any[]; }>;

    constructor(table: string) {
        this.table = table;
    }
}