import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.page.html',
  // styleUrls: ['./work.page.scss'],
})
export class WorkPage implements OnInit {

  constructor() { }
  portfolios: {
    title: string; url: string; blog: string; date: string; episode: string; outside: boolean;
  }[] = [
      {
        title: 'やる夫と蒼星石は仲がいい(～40話)',
        url: 'http://yaruomatometai.blog72.fc2.com/blog-category-108.html',
        blog: 'やる夫まとめ隊',
        date: '2012.1.14 ～ 2016.11.28',
        episode: '69',
        outside: true,
      }, {
        title: 'やる夫と蒼星石は仲がいい(41話～58話)',
        url: 'nakagaii',
        blog: '当サイト',
        date: '',
        episode: '-',
        outside: false,
      }, {
        title: 'やる夫と蒼星石は仲がいい(59話～69話)',
        url: 'https://jbbs.shitaraba.net/bbs/read_archive.cgi/otaku/15956/1452775984/',
        blog: 'やる夫スレヒロイン板（新）',
        date: '',
        episode: '-',
        outside: true,
      }, {
        title: 'やる夫で学ぶ初めてのぷよぷよ',
        url: 'http://oyoguyaruo.blog72.fc2.com/blog-entry-4191.html',
        blog: '泳ぐやる夫シアター',
        date: '2012.2.25 ～ 2012.5.12',
        episode: '12',
        outside: true,

      }, {
        title: '蒼星石はやる夫を幸せにしたい悪魔のようです',
        url: 'http://yaruomatometai.blog72.fc2.com/blog-entry-3512.html',
        blog: 'やる夫まとめ隊',
        date: '2012.4.28 ～ 2012.5.22',
        episode: '4',
        outside: true,
      }, {
        title: 'やらない夫はやる夫と結婚できないようです',
        url: 'http://yaruoislife.jp/blog-entry-3672.html',
        blog: 'やる夫が人生でいいじゃない',
        date: '2015.12.24 ～ 2015.12.25',
        episode: '3',
        outside: true,
      }, {
        title: '私は頻尿で困っています。',
        url: 'http://yaruoislife.jp/blog-entry-7217.html',
        blog: 'やる夫が人生でいいじゃない',
        date: '2016.5.6 ～ 2016.6.17',
        episode: '3',
        outside: true,
      }, {
        title: '私のカワイイ後輩',
        url: 'http://yaruoislife.jp/blog-entry-19868.html',
        blog: 'やる夫が人生でいいじゃない',
        date: '2017.12.22 ～ 2017.12.25',
        episode: '3',
        outside: true,
      }, {
        title: '【R-18】こいしちゃんと学ぶHな騙しAAの作り方',
        url: 'http://touhouyaruosure.com/blog-entry-6336.html',
        blog: '東方やる夫スレ纏め',
        date: '2017.11.24 ～ 2018.6.27',
        episode: '3',
        outside: true,
      }, {
        title: 'ずんだもちは癒し。(飲食短編祭参加作品)',
        url: 'http://mukankei151.blog47.fc2.com/blog-entry-12883.html',
        blog: '阿修羅編',
        date: '2017.11.24',
        episode: '1',
        outside: true,
      }, {
        title: '闘争祭参加作品',
        url: 'http://mukankei151.blog47.fc2.com/blog-entry-13504.html',
        blog: '阿修羅編',
        date: '2019.3.12',
        episode: '1',
        outside: true,
      }, {
        title: 'やる夫で学ぶモチベーション(平成末やる夫三大短編祭 後夜祭参加作品、途中で飽きた。)',
        url: 'http://mukankei151.blog47.fc2.com/blog-entry-13541.html',
        blog: '阿修羅編',
        date: '2019.3.18',
        episode: '1',
        outside: true,
      }, {
        title: 'できない子がラップバトル優勝を目指すようです(平成末やる夫三大短編祭 後夜祭参加作品、時間切れ作品)',
        url: 'http://mukankei151.blog47.fc2.com/blog-entry-13574.html',
        blog: '阿修羅編',
        date: '2019.3.31',
        episode: '1',
        outside: true,
      }, {
        title: 'チート能力の代償は千羽鶴でした(第一話短編祭参加作品)',
        url: 'http://mukankei151.blog47.fc2.com/blog-entry-13986.html',
        blog: '阿修羅編',
        date: '2020.1.3',
        episode: '1',
        outside: true,
      },


    ];

  ngOnInit() {
  }

}
