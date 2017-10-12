import { Component, OnInit } from '@angular/core';
import {WOW} from 'wowjs';

@Component({
  selector: 'app-experience-slide',
  templateUrl: './experience-slide.component.html',
  styleUrls: ['./experience-slide.component.scss']
})
export class ExperienceSlideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    new WOW().init();
  }

}
