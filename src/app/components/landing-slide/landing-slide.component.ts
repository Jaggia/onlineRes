import {AfterViewInit, Component, OnInit} from '@angular/core';
import {WOW} from 'wowjs';


@Component({
  selector: 'app-landing-slide',
  templateUrl: './landing-slide.component.html',
  styleUrls: ['./landing-slide.component.scss']
})
export class LandingSlideComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    new WOW().init();
  }

}
