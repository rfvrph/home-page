import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HideToolbarService {
  hideBarFlag = true;

  hideBar() {
    console.log(this.hideBarFlag);
    return this.hideBarFlag = !this.hideBarFlag;
  }
  constructor() { }
}
