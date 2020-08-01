import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReplacePage } from './replace.page';

const routes: Routes = [
  {
    path: '',
    component: ReplacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReplacePageRoutingModule {}
