import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';

const routes: Routes = [
  { path: 'secondComponent/:money', component: SecondComponentComponent },
  { path: 'thirdComponent', component: ThirdComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
