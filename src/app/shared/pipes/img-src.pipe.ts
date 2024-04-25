import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageSrc',
  standalone: true,
})
export class ImageSourcePipe implements PipeTransform {
  handler: { [key: string]: string } = {
    'web:popular': 'assets/icons/popular.svg',
    'web:new_games': 'assets/icons/new-games.svg',
    'web:buy_bonus': 'assets/icons/buy-bonus.svg',
  };

  transform(key: string): string {
    return this.handler[key] || '';
  }
}
