import { Component, OnDestroy, OnInit } from '@angular/core';
import { PersonsService } from '../persons.service';

@Component({
  selector: 'app-new-component-test',
  templateUrl: './new-component-test.component.html',
  styleUrls: ['./new-component-test.component.css']
})
export class NewComponentTestComponent implements OnInit, OnDestroy {
  name = 'Anonymous';
  printing = false;
  // persons = [{ name: "", age: "" }];
  persons = [{ name: '', age: '' }];

  customSubmit = (event: Event) => {
    console.log(`Poszło!`);
    console.log(event)
    this.printing = !this.printing
  };

  constructor(private personsService: PersonsService) { }

  ngOnInit() {
    console.log('Component init!')
    this.persons = this.personsService.allPersons();
  };

  ngOnDestroy() {
    console.log('Component destroyed!')
  };
}