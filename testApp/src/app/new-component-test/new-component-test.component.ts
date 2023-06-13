import { Component } from '@angular/core';

@Component({
  selector: 'app-new-component-test',
  templateUrl: './new-component-test.component.html',
  styleUrls: ['./new-component-test.component.css']
})
export class NewComponentTestComponent {
  customSubmit = function (event: Event) {
    console.log(`Poszło!`);
    console.log(event)
  };
}
