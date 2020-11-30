import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  @ViewChild('banner', {static : false}) banner: ElementRef<HTMLVideoElement>;

  ngOnInit(): void {
  }

  playVideo(){
    this.banner.nativeElement.play();
  }

}
