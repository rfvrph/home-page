import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewerPageRoutingModule } from './viewer-routing.module';

import { ViewerPage } from './viewer.page';
import { ShareModuleModule } from 'src/app/component/share-module/share-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewerPageRoutingModule,
    ShareModuleModule
  ],
  declarations: [ViewerPage]
})
export class ViewerPageModule { }
