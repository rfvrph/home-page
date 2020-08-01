import { HideToolbarService } from './../../service/hide-toolbar.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public hide: HideToolbarService) { }

}
