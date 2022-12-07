import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerticalcliderPageRoutingModule } from './verticalclider-routing.module';

import { VerticalcliderPage } from './verticalclider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerticalcliderPageRoutingModule
  ],
  declarations: [VerticalcliderPage]
})
export class VerticalcliderPageModule {}
