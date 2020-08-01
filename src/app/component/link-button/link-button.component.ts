import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link-button',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.scss'],
})
export class LinkButtonComponent implements OnInit {
  @Input() title: string;
  @Input() link: string;
  constructor() { }

  ngOnInit() { }

}
