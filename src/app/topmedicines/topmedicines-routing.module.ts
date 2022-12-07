import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopmedicinesPage } from './topmedicines.page';

const routes: Routes = [
  {
    path: '',
    component: TopmedicinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopmedicinesPageRoutingModule {}
