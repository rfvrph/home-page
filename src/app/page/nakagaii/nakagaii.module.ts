import { ShareModuleModule } from 'src/app/component/share-module/share-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NakagaiiPageRoutingModule } from './nakagaii-routing.module';

import { NakagaiiPage } from './nakagaii.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NakagaiiPageRoutingModule,
    ShareModuleModule
  ],
  declarations: [NakagaiiPage]
})
export class NakagaiiPageModule { }
