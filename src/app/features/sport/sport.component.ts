import { Component } from '@angular/core';

@Component({
  selector: 'app-sport',
  standalone: true,
  imports: [],
  template: `<h1>SPORT COMING SOON!</h1> `,
  styles: [
    `
      h1 {
        text-align: center;
        padding-top: 50px;
        color: white;
        font-size: 50px;
      }
    `,
  ],
})
export class SportComponent {}
