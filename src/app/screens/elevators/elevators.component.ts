import { Component } from '@angular/core';

@Component({
  selector: 'app-elevators',
  template: `
    <main>
      <app-cabins-hero></app-cabins-hero>
      <app-cabins-realisation></app-cabins-realisation>
      <app-cabins-materials></app-cabins-materials>
    </main>
  `,
  styleUrls: ['./elevators.component.scss'],
})
export class ElevatorsComponent {
  constructor() {}
}
