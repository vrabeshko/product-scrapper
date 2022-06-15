import { v4 as uuid } from "uuid";

export function createID(): string {
    return uuid();
}