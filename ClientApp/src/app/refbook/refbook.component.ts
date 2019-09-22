import { Component } from '@angular/core';

@Component({
  selector: 'ref-book',
  templateUrl: './refbook.component.html'
})
export class RefbookComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
}
