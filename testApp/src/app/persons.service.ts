import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  private personsService = [{ name: 'Anonymous', age: '99' }, { name: 'Person_1', age: '28' }, { name: 'Person_2', age: '35' }];
  constructor() { }

  allPersons() {
    return this.personsService
  }
}
