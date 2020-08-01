import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReplacePageRoutingModule } from './replace-routing.module';

import { ReplacePage } from './replace.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReplacePageRoutingModule
  ],
  declarations: [ReplacePage]
})
export class ReplacePageModule {}
