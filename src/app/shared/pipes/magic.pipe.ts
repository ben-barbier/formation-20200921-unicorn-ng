import { Pipe, PipeTransform } from '@angular/core';
import { MagicService } from '../services/magic.service';

@Pipe({
    name: 'magic',
})
export class MagicPipe implements PipeTransform {
    constructor(private magicService: MagicService) {}

    transform(value: string): string {
        console.count('transform');
        return this.magicService.enchant(value);
    }
}
