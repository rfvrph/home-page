import { HideToolbarService } from './../../service/hide-toolbar.service';
import { async } from '@angular/core/testing';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.page.html',
  // styleUrls: ['./viewer.page.scss'],
})
export class ViewerPage implements OnInit {
  constructor(private element: ElementRef, public hide: HideToolbarService) {

  }
  obj: {
    mlt: string[][],
    type: string[], // mlt or ast
    code: string, // 文字コード
    codeFlag: boolean, // 文字コード切り替え、falseでS-JIS
    files: FileList,
    fileName: string[],
    selectNumber: number;
    fileLength: number;
  } = {
      mlt: [],
      type: [],
      code: 'shift-jis',
      codeFlag: false,
      files: null,
      fileName: [],
      selectNumber: 0,
      fileLength: 0
    };
  styleClass: string;
  sizeNumber = 2;
  @ViewChild(IonContent, { static: true }) content: IonContent;
  resetFlag: boolean;

  ScrollToTop() {
    this.content.scrollToTop(0);
    // ion-contentの[scrollEvents]="true"
  }
  ngOnInit() { }

  sizeChangeTwoTimes(n) {
    this.sizeChange(n);
    setTimeout(() => this.sizeChange(n), 50);
  }
  sizeChange(n: number) {
    this.sizeNumber = n;
    for (let i = 0; i < this.obj.mlt[this.obj.selectNumber].length; i++) {

      const textArea = this.element.nativeElement.getElementsByTagName('textarea')[i];

      switch (n) {
        case 0:
          this.styleClass = 'font-size-small';
          break;
        case 1:
          this.styleClass = 'font-size-medium';
          break;
        case 2:
          this.styleClass = 'font-size-default';
          break;
        default:
          break;
      }
      textArea.style.overflow = 'hidden';
      textArea.style.height = 'auto';
      textArea.style.height = textArea.scrollHeight + 'px';
      this.ScrollToTop();
      localStorage.sizeNumber = JSON.stringify(this.sizeNumber);
    }


  }
  ionViewWillEnter() {
    if ('sizeNumber' in localStorage) {
      this.sizeNumber = JSON.parse(localStorage.sizeNumber);
    }
    // if ('tmpObj' in localStorage) {
    //   this.obj = JSON.parse(localStorage.tmpObj);
    // }
  }
  ionViewWillLeave() {
    this.hide.hideBarFlag = true;
    // trueにするとページ離脱時にhideバーが戻るが、
    // なぜそうなるか分からない
    // nakagaii.page.tsも同様
  }
  CodeFlag() {
    if (this.obj.codeFlag) {
      this.obj.code = 'utf-8';
    } else {
      this.obj.code = 'shift-jis';
    }
  }

  changeInputs(files: FileList, n: number) {
    for (let j = 0; j < files.length; j++) {

      this.obj.fileName.push(files[j].name);
      if ((/.mlt$/).test(files[j].name)) {
        this.obj.type.push('mlt');
      } else if ((/.ast$/).test(files[j].name)) {
        this.obj.type.push('ast');
      } else if ((/.txt$/).test(files[j].name)) {
        this.obj.type.push('txt');
      }

    }
    this.obj.files = files;
    this.delayMlt(n);
  }
  delayMlt(n) {
    setTimeout(() => this.mltShift(n), 5);
  }

  mltShift(n) {
    this.ScrollToTop();
    this.CodeFlag();
    for (let j = 0; j < this.obj.files.length; j++) {
      let lines: string[] = [];
      const reader: FileReader = new FileReader();
      // obj.mltをobj.filesに変換したい。(文字コード変換のため)

      reader.readAsText(this.obj.files.item(j), this.obj.code);
      reader.onload = () => {

        const fileContent: string = reader.result as string;
        // console.log(fileContent);
        // 文字コードここは変わる
        // fileにしたときutf-8に変わるのは仕様
        if (this.obj.type[j] === 'mlt') {
          lines = fileContent.split(/\[SPLIT\]/m);
        } else if (this.obj.type[j] === 'ast') {
          lines = fileContent.split(/^\[AA]\[.*\]$/m);
          lines.shift();
        } else {
          lines[0] = fileContent;
        }
        if (n === 1) {
          // 文字コードを変更したとき、配列を上書きする。
          this.obj.mlt[this.obj.mlt.length + j - this.obj.files.length] = lines;
        } else {
          // ファイルを追加したとき、配列に追加する。
          this.obj.mlt.push(lines);
          this.obj.selectNumber = this.obj.mlt.length - this.obj.files.length;
        }
      };
    }
    if (n !== 1) {
      this.obj.fileLength += this.obj.files.length;

    }
    // localStorage.tmpObj = JSON.stringify(this.obj);
    setTimeout(() => this.sizeChangeTwoTimes(this.sizeNumber), 1000);
    // async/awaitにしたい。
  }
  selectFiles(value) {
    this.obj.selectNumber = value;
  }
  saveLocal(event, i: number) {
    // ionChangeですると、入力ごとでフォーカスが外れる。
    // this.obj.mlt[i] = event.target.value;
    // localStorage.tmpObj = JSON.stringify(this.obj);
  }

  doSave() {
    // UTF-8で保存される。SJISでも保存したい。

    const tmp: string[] = [];

    if (this.obj.type[this.obj.selectNumber] === 'mlt') {
      tmp.unshift(this.obj.mlt[this.obj.selectNumber].join('\n[SPLIT]\n'));
    } else if (this.obj.type[this.obj.selectNumber] === 'ast') {
      tmp.unshift(this.obj.mlt[this.obj.selectNumber].join('\n[AA][]\n'));
      tmp.unshift('\n[AA][]\n');
    } else {
      tmp.unshift(this.obj.mlt[this.obj.selectNumber].join(''));
    }

    const newFile: Blob = new Blob(
      tmp,
      // 'new' + this.obj.fileName[this.obj.selectNumber]
    );

    const reader: FileReader = new FileReader();
    // reader.readAsText(newFile, this.obj.code);
    reader.readAsText(newFile, 'shift-jis');
    reader.onload = () => {
      // console.log(this.obj.files.item(this.obj.selectNumber));
      // ↑をreadAsTextすれば変換可
      // だが、保存時にUTF-8に変換される

      // console.log(newFile);

      // console.log('rsult', reader.result);
      // UTF-8のまま
      const fileContent: string = (reader.result as string);
      const newFile2: Blob = new Blob(
        [fileContent],
        // {'new' + this.obj.fileName[this.obj.selectNumber]},
      );
      const link = document.createElement('a');
      link.href = URL.createObjectURL(newFile2);
      // link.download = 'new ' + this.obj.fileName[this.obj.selectNumber];
      // link.click();
      // 同じこと？
      link.setAttribute('download', 'new' + this.obj.fileName[this.obj.selectNumber]);
      link.dispatchEvent(new MouseEvent('click'));
    };
  }
  doReset() {
    this.obj = {
      mlt: [],
      type: [],
      code: 'shift-jis',
      codeFlag: false,
      files: null,
      fileName: [],
      selectNumber: 0,
      fileLength: 0
    };
    this.resetFlag = false;
  }
}


