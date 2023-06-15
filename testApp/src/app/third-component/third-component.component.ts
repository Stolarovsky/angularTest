import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-third-component',
  templateUrl: './third-component.component.html',
  styleUrls: ['./third-component.component.css']
})
export class ThirdComponentComponent {

  myForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  })

  submitForm() {
    console.log(this.myForm.value)
  }

}
