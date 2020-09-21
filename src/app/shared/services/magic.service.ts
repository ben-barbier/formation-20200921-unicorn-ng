import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class MagicService {
    constructor() {}

    public enchant(name: string): string {
        return name
            .trim()
            .split('')
            .map((letter, idx) => (idx % 2 ? letter.toLocaleLowerCase() : letter.toLocaleUpperCase()))
            .join('');
    }
}
