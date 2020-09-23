import { ActivatedRoute, ParamMap } from '@angular/router';
import { HideToolbarService } from './../../service/hide-toolbar.service';
import { NakagaiiService } from './../../service/contents/nakagaii.service';
import { IonContent } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nakagaii',
  templateUrl: './nakagaii.page.html',
  // styleUrls: ['./nakagaii.page.scss'],
})
export class NakagaiiPage implements OnInit {
  fill: string[] = [];
  id: number;
  paths: string[] = [];

  constructor(public hide: HideToolbarService, public route: ActivatedRoute) {
    for (let i = 0; i < 18; i++) {
      this.fill.push('outline');
      this.paths.push(`nakagaii/${i + 41}.txt`);
    }
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = parseInt(params.get('id'), 10);
      this.fill[this.id - 1] = 'solid';
    });
  }

  ngOnInit() { }
  ionViewWillLeave() {
    this.hide.hideBarFlag = true;
  }
}
