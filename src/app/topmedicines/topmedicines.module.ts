import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopmedicinesPageRoutingModule } from './topmedicines-routing.module';

import { TopmedicinesPage } from './topmedicines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopmedicinesPageRoutingModule
  ],
  declarations: [TopmedicinesPage]
})
export class TopmedicinesPageModule {}
