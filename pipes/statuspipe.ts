import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'statusName'})
export class StatusName implements PipeTransform {
  transform(value: number): string {
    const statusCodes = {
        1: "Pending",
        2: "Approved",
        3: "Denied"
    };
    
    return statusCodes[value];
  }
}