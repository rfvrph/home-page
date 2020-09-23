
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-reader-localtxt',
  templateUrl: './reader-localtxt.component.html',
  styleUrls: ['./reader-localtxt.component.scss'],
})

export class ReaderLocaltxtComponent implements OnInit {
  @Input() paths: string[];
  id: number;
  // ファイル名を配列で取得
  outputs: string[][];
  // 複数個のファイルの中身を取得
  output: string[];
  // 上から１つファイル分の中身を取得


  // usage
  // ionic g page episode

  // app-routing.module.ts
  // path'episode' → path'episode/:id'

  // episode.module.tsへcomponentをimport

  // episode.page.html
  // <app-reader-localtxt [paths]="array"></app-reader-localtxt>
  // <a href="/episode/1">1話</a>
  // <a href="/episode/2">2話</a>

  // episode.page.ts
  // array=['example1.mlt','test/example2.mlt'](ローカルのファイルのパスを入力)

  // mlt保存場所
  // assets/mlts/example1.mlt
  // assets/mlts/test/example2.mlt

  constructor(
    public route: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = parseInt(params.get('id'), 10);
    });
    this.outputs = await this.makeArray(this.paths);
    this.output = this.outputs[this.id - 1];
  }

  async makeArray(arrayFilePath: string[]) {
    const array: string[][] = [];
    for (const path of arrayFilePath) {
      const s = await this.encode(path);
      array.push(s);
    }
    return array;
  }

  async encode(filePath: string) {
    const url = '/assets/mlts/' + filePath;
    // 保存場所の指定
    const res = await fetch(url);
    const content = await res.arrayBuffer();
    const fileName = res.url;
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

      if ((/.mlt$/).test(fileName)) {
        // const fileType = 'mlt';
        const lines = unicodeString.split(/\[SPLIT\]/m);
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
