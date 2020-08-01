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


  goBack: boolean;
  goNext: boolean;
  isClose: boolean;
  episode: string;
  i = -1;


  // nakagaiisServiceから読み込み
  ep41: string = this.nakagaii.ep41;
  ep42: string = this.nakagaii.ep42;
  ep43: string = this.nakagaii.ep43;
  ep44: string = this.nakagaii.ep44;
  ep45: string = this.nakagaii.ep45;
  ep46: string = this.nakagaii.ep46;
  ep47: string = this.nakagaii.ep47;
  ep48: string = this.nakagaii.ep48;
  ep49: string = this.nakagaii.ep49;
  ep50: string = this.nakagaii.ep50;
  ep51: string = this.nakagaii.ep51;
  ep52: string = this.nakagaii.ep52;
  ep53: string = this.nakagaii.ep53;
  ep54: string = this.nakagaii.ep54;
  ep55: string = this.nakagaii.ep55;
  ep56: string = this.nakagaii.ep56;
  ep57: string = this.nakagaii.ep57;
  ep58: string = this.nakagaii.ep58;

  episodes: { ep: string, style: string }[] = [
    { ep: this.ep41, style: '' }, { ep: this.ep42, style: '' },
    { ep: this.ep43, style: '' }, { ep: this.ep44, style: '' },
    { ep: this.ep45, style: '' }, { ep: this.ep46, style: '' },
    { ep: this.ep47, style: '' }, { ep: this.ep48, style: '' },
    { ep: this.ep49, style: '' }, { ep: this.ep50, style: '' },
    { ep: this.ep51, style: '' }, { ep: this.ep52, style: '' },
    { ep: this.ep53, style: '' }, { ep: this.ep54, style: '' },
    { ep: this.ep55, style: '' }, { ep: this.ep56, style: '' },
    { ep: this.ep57, style: '' }, { ep: this.ep58, style: '' }
  ];

  constructor(private nakagaii: NakagaiiService, public hide: HideToolbarService) { }

  // ここから
  @ViewChild(IonContent, { static: true }) content: IonContent;
  ScrollToTop() {
    this.content.scrollToTop(0); // ion-contentの[scrollEvents]="true"
  }
  // ここまでセット

  ngOnInit() {
    for (let index = 0; index < this.episodes.length; index++) {
      this.episodes[index].style = 'outline';
    }
  }


  onClick(i: number) {
    if (this.i >= 0) {
      this.episodes[this.i].style = 'outline'; // 変更を元に戻す
    }
    this.i = i;
    if (i === -1) {
      // 非表示設定 41話～58話 41話と58話はボタン非表示 trueで非表示
      this.goBack = true;
      this.goNext = true;
    }
    else if (i <= 0) {
      this.goBack = true;
      this.goNext = false;
      i = 0;
    } else if (i >= 17) {
      this.goBack = false;
      this.goNext = true;
    } else {
      this.goBack = false;
      this.goNext = false;
    }


    if (i >= 0) {
      this.episode = this.episodes[i].ep;
      this.episodes[i].style = 'solid';
    } else {
      this.episode = '';

    }

    this.isClose = !this.goBack || !this.goNext;

  }



  ionViewDidEnter() {
    this.onClick(-1);
  }
  ionViewWillLeave() {
    this.hide.hideBarFlag = true;
  }




}
