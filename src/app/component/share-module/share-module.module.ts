import { ReaderLocaltxtComponent } from './../reader-localtxt/reader-localtxt.component';
import { LinkButtonComponent } from './../link-button/link-button.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HideButtonComponent } from '../hide-button/hide-button.component';



@NgModule({
  declarations: [
    LinkButtonComponent,
    HideButtonComponent,
    ReaderLocaltxtComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    LinkButtonComponent,
    HideButtonComponent,
    ReaderLocaltxtComponent
  ]

})
export class ShareModuleModule { }
