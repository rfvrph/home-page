import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NakagaiiPage } from './nakagaii.page';

const routes: Routes = [
  {
    path: '',
    component: NakagaiiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NakagaiiPageRoutingModule {}
