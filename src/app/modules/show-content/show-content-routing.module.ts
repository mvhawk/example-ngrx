import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowContentPageComponent } from './show-content-page/show-content-page.component';

const routes: Routes = [
  {
    path: '',
    component: ShowContentPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowContentRoutingModule { }
