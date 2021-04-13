import { Char } from "../model/char";

var chars: Char[] = [new Char()];

export function findChar(id: string): Char {
    return chars.find(c => c.id === id);
}
