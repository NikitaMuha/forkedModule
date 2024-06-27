import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'username',
})
export class UsernamePipe implements PipeTransform {
  transform(value: string): string {
    const credentials = JSON.parse(localStorage.getItem('credentials'));
    const username = credentials?.username || '';
    return value.replace('Hello world', `Hello, ${username}`);
  }
}
