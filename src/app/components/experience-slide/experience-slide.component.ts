import { Component, OnInit } from '@angular/core';
import {WOW} from 'wowjs';

@Component({
  selector: 'app-experience-slide',
  templateUrl: './experience-slide.component.html',
  styleUrls: ['./experience-slide.component.scss']
})
export class ExperienceSlideComponent implements OnInit {

  events = [{
    badgeClass: 'info',
    badgeIconClass: 'glyphicon-check',
    title: 'First heading',
    content: 'Some awesome content.'
  }, {
    badgeClass: 'warning',
    badgeIconClass: 'glyphicon-credit-card',
    title: 'Second heading',
    content: 'More awesome content.'
  }];

  constructor() { }

  ngOnInit() {
    new WOW().init();
  }

}
