import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerticalcliderPage } from './verticalclider.page';

const routes: Routes = [
  {
    path: '',
    component: VerticalcliderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerticalcliderPageRoutingModule {}
