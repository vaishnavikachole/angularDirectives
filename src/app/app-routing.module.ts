import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { ForDirectiveComponent } from './for-directive/for-directive.component';

const routes: Routes = [
  {path:'style-binding',component:StyleBindingComponent},
  {path:'for-directive',component:ForDirectiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
