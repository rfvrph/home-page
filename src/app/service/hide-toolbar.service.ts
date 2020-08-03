import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HideToolbarService {
  hideBarFlag = true;

  hideBar() {
    return this.hideBarFlag = !this.hideBarFlag;
  }
  constructor() { }
}
