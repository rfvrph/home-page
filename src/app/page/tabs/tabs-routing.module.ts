import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'work',
        loadChildren: () => import('../work/work.module').then(m => m.WorkPageModule)
      }, {
        path: 'work/nakagaii',
        loadChildren: () => import('../nakagaii/nakagaii.module').then(m => m.NakagaiiPageModule)
      },
      {
        path: 'other',
        loadChildren: () => import('../other/other.module').then(m => m.OtherPageModule)
      },
      {
        path: 'other/replace',
        loadChildren: () => import('../replace/replace.module').then(m => m.ReplacePageModule)
      }, {
        path: 'other/viewer',
        loadChildren: () => import('../viewer/viewer.module').then(m => m.ViewerPageModule)
      },
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
      },

    ]
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
