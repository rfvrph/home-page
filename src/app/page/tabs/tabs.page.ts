import { HideToolbarService } from './../../service/hide-toolbar.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  // styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  darkFlag: boolean;
  constructor(public hide: HideToolbarService) { }
  darkMode() { // ページを再読み込みするとリセットされる
    // Query for the toggle that is used to change between themes
    const toggle = document.querySelector('#themeToggle');

    // Listen for the toggle check/uncheck to toggle the dark class on the <body>
    toggle.addEventListener('ionChange', (ev) => {
      document.body.classList.toggle('dark',);
      // document.body.classList.toggle('dark', ev.detail.checked);
    });

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addListener((e) => checkToggle(e.matches));

    // Called when the app loads


    // Called by the media query to check/uncheck the toggle
    function checkToggle(shouldCheck) {
      // toggle.checked = shouldCheck;
    }
    function loadApp() {
      checkToggle(prefersDark.matches);
    }
  }
  onClick() {
    this.darkFlag = !this.darkFlag;
    localStorage.darkFlag = JSON.stringify(this.darkFlag);
  }
  ionViewWillEnter() {
    this.darkMode();
    if ('darkFlag' in localStorage) {
      this.darkFlag = JSON.parse(localStorage.darkFlag);
    }
  }

}
