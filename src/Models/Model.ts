import { DBConnection } from "../DB/DBConnection";

export class Model {
    connection: DBConnection;

    constructor(connection: DBConnection) {
        this.connection = connection;
    }
}