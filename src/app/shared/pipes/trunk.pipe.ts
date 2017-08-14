 import { Pipe, PipeTransform } from '@angular/core';

 @Pipe({name: 'truncute'})

 export class TruncatePipe implements PipeTransform {
    transform(value: string, chars: number): string {
        let text = `${value.substring(0, chars)} ...`;
        return text;
    }
 } 