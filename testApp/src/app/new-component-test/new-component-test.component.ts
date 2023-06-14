import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component-test',
  templateUrl: './new-component-test.component.html',
  styleUrls: ['./new-component-test.component.css']
})
export class NewComponentTestComponent implements OnInit, OnDestroy {
  name = 'Anonymous';
  printing = false;
  persons = [{ name: "", age: "" }];
  customSubmit = (event: Event) => {
    console.log(`Poszło!`);
    console.log(event)
    this.printing = !this.printing
  };
  ngOnInit() {
    console.log('Component init!')
    this.persons = [{ name: 'Anonymous', age: '99' }, { name: 'Person_1', age: '28' }, { name: 'Person_2', age: '35' }];
  };
  ngOnDestroy() {
    console.log('Component destroyed!')
  };
}