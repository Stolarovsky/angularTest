import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponentTestComponent } from './new-component-test/new-component-test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PersonsService } from './persons.service';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentTestComponent,
    SecondComponentComponent,
    ThirdComponentComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PersonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
