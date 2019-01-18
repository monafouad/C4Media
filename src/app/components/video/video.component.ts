import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html'
})
export class VideoComponent  {
  vimeo = '<iframe src="https://player.vimeo.com/video/183832373?rel=0&amp;controls=0?embedparameter=value" width="100%" height="360" frameborder="0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';

  content: string = '<strong>View us on vimeo</strong>';
    @ViewChild('myDiv') myDiv: ElementRef;

iframennerHTML
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setAttribute(this.myDiv.nativeElement, 'innerHTML', this.content);
  }

}
