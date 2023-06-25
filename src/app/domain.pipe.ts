import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'domain'
})
export class DomainPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    try {
      const domainAndPath = value.split('//')[1];
      return domainAndPath.split('/')[0]
    } catch (error) {
      return null;
    }
  }

}
