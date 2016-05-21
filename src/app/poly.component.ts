import { Component } from '@angular/core';
import { PolymerElement } from '@vaadin/angular2-polymer';

@Component({
  moduleId: module.id,
  selector: 'poly-app',
  templateUrl: 'poly.component.html',
  styleUrls: ['poly.component.css'],
  directives: [
    PolymerElement('paper-scroll-header-panel'),
    PolymerElement('paper-toolbar'),
  ]
})
export class PolyAppComponent {
  title = 'poly works!';
}
