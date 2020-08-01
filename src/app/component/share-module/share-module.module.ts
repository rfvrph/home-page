import { LinkButtonComponent } from './../link-button/link-button.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HideButtonComponent } from '../hide-button/hide-button.component';



@NgModule({
  declarations: [
    LinkButtonComponent,
    HideButtonComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    LinkButtonComponent,
    HideButtonComponent
  ]

})
export class ShareModuleModule { }
