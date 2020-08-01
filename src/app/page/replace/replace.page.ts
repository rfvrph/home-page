import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-replace',
  templateUrl: './replace.page.html',
  styleUrls: ['./replace.page.scss'],
})
export class ReplacePage implements OnInit {
  aaInp: string;
  aaOut: string;
  resetReplaceBeforeWord =
    `／
＼
/
ｌ
i
!
l
ｌ
j
{
}
|
ヽ
r
｝
_
＿`;
  resetReplaceAfterWord =
    `,'
',
,'
:
:
:
:
:
:
:
:
:
',
;;
:
..
....`;
  replaceBeforeWord: string = this.resetReplaceBeforeWord;
  replaceAfterWord: string = this.resetReplaceAfterWord;

  constructor() { }

  ngOnInit() {
  }

  aaTrance() {
    const bef = this.splitByLine(this.replaceBeforeWord);
    const af = this.splitByLine(this.replaceAfterWord);
    this.aaOut = this.aaInp;
    for (let i = 0; i <= this.replaceBeforeWord.length - 1; i++) {
      this.aaOut = (this.aaOut.split(bef[i]).join(af[i]));
    }
  }


  splitByLine(w) {
    // textareaから1文字ずつ取得
    const word = w.replace(/\r\n|\r/g, '\n'); // 他の改行コードを/nに変換
    const lines = word.split('\n');
    const outArray = new Array();

    for (let i = 0; i < lines.length; i++) {
      // 空行は無視する
      if (lines[i] === '') {
        continue;
      }

      outArray.push(lines[i]);
    }

    return outArray;
  }

  reset() {
    this.replaceBeforeWord = this.resetReplaceBeforeWord;
    this.replaceAfterWord = this.resetReplaceAfterWord;
    this.aaInp = '';
    this.aaOut = '';
  }
}
