import { Injectable } from '@angular/core';
import 'encoding-japanese';
@Injectable({
  providedIn: 'root'
})
export class ReadMltService {
  // 2重リストで返す
  // たぶんtxtだと動作しない

  // usage

  // page.ts
  // contents: string[] = [];
  // names = ['a.mlt', 'b.mlt'];
  // constructor(private readMltService: ReadMltService) { }
  // ngOnInit() {
  //   this.func();
  // }
  // async func() {
  //   this.contents = await this.readMltService.loop(this.names);
  // }

  // page.html
  //   <p *ngFor="let content of contents;let i = index;">
  //   <ion-item *ngFor="let con of content;let g = index">
  //     <ion-note>{{g+1}}</ion-note>
  //     <ion-text class="Saitamaar" innerHTML="{{con}}"></ion-text>
  //   </ion-item>
  // </p>

  constructor() { }
  ionViewDidEnter() {

  }
  async loop(arrayFilePath: string[],) {
    const array: string[] = [];
    for (const path of arrayFilePath) {
      const s = await this.encode(path);
      await array.push(s);
    }
    console.log('a', array);
    return array;
  }

  async encode(filePath: string) {
    const url = '/assets/mlts/' + filePath;
    // 保存場所の指定
    const res = await fetch(url);
    const content = await res.arrayBuffer();
    const fileName = res.url;
    console.log('path', filePath);

    if (content) {
      // Shift_JIS Array
      const sjisArray = new Uint8Array(content);

      // Convert encoding to UNICODE (JavaScript Unicode Array).
      const unicodeArray = Encoding.convert(sjisArray, {
        to: 'UNICODE',
        from: 'SJIS'
      });


      // Join to string.
      const unicodeString = Encoding.codeToString(unicodeArray);
      // document.getElementById(id).classList.add('Saitamaar');
      // document.getElementById(id).innerHTML = unicodeString;




      if ((/.mlt$/).test(fileName)) {
        // const fileType = 'mlt';
        const lines = unicodeString.split(/\[SPLIT\]/m);
        console.log('line', lines);
        return lines;

      } else if ((/.ast$/).test(fileName)) {
        // const fileType = 'ast';
        const lines = unicodeString.split(/^\[AA]\[.*\]$/m).shift();
        return lines;
      } else if ((/.txt$/).test(fileName)) {
        // const fileType = 'txt';
        const lines = unicodeString;
        return lines;
      }
    }

  }
}


