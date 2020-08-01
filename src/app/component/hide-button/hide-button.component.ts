import { HideToolbarService } from './../../service/hide-toolbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hide-button',
  templateUrl: './hide-button.component.html',
  // styleUrls: ['./hide-button.component.scss'],
})
export class HideButtonComponent implements OnInit {

  constructor(public hide: HideToolbarService) { }

  ngOnInit() { }

}
