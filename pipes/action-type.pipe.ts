import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'actionType'
})
export class ActionTypePipe implements PipeTransform {

  transform(value: number): string {
    const actionCodes = {
        1: "Food",
        2: "Lodging",
        3: "Travel",
        4: "Other"
    };
    
    return actionCodes[value];
  }
}
