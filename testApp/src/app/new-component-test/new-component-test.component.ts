import { Component } from '@angular/core';

@Component({
  selector: 'app-new-component-test',
  templateUrl: './new-component-test.component.html',
  styleUrls: ['./new-component-test.component.css']
})
export class NewComponentTestComponent {
  name = 'Anonymous';
  printing = false;
  persons = [{ name: 'Anonymous', age: '99' }, { name: 'Person_1', age: '28' }, { name: 'Person_2', age: '35' }];
  customSubmit = (event: Event) => {
    console.log(`Poszło!`);
    console.log(event)
    this.printing = !this.printing
  };
}
