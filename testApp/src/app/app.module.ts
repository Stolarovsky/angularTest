import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponentTestComponent } from './new-component-test/new-component-test.component';
import { FormsModule } from '@angular/forms';

import { PersonsService } from './persons.service';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PersonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
