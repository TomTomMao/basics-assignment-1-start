import { Component } from '@angular/core';

@Component({
  selector: 'app-small-component',
  template: `<p>
    This is a small component, it use internal templates and styles
  </p>`,
  styles: [
    `
      p {
        color: blue;
        font-size: 5px;
      }
    `,
  ],
})
export class SmallComponentComponent {}
