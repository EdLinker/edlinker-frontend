import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'icon'
})
export class BollToIconPipe implements PipeTransform {
    transform(value: boolean) {
        if (value === true) { return `check_circle_outline` ;}
        return `do_not_disturb`;
    }
}
