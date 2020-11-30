import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss']
})
export class TitulosComponent implements OnInit {

  @Input() tituloDet: any;

  @ViewChild('trailer', { static: true}) trailer: ElementRef<HTMLVideoElement>;

  constructor() { }

  ngOnInit(): void {
  }

  playVideo(){
    this.trailer.nativeElement.play();
  }

  pauseVideo(){
    this.trailer.nativeElement.pause();
    this.trailer.nativeElement.currentTime = 0;
  }

}
