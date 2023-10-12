import { Sticker } from "./sticker.interface";

export interface FullTable extends Table {
    stickers: Sticker[];
}

export interface Table {
    id: number;
    name: string;
}