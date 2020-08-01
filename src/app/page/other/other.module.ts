import { ShareModuleModule } from './../../component/share-module/share-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherPageRoutingModule } from './other-routing.module';

import { OtherPage } from './other.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtherPageRoutingModule,
    ShareModuleModule
  ],
  declarations: [OtherPage]
})
export class OtherPageModule { }
