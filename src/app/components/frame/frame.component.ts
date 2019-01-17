
import { WINDOW_PROVIDERS, WINDOW } from './window.service';
import { HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Component, ViewChild, ElementRef, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  providers: [ WINDOW_PROVIDERS ]
})


export class FrameComponent implements OnInit {
  @ViewChild('iframe') iframe: ElementRef;

  ngOnInit() {
    this.setIframeReady(this.iframe);
  }

    htmlStr: string = '<span>Location:</span><span> Lithuania, Vilniaus apskritis, Latviai</span>'+
                      '<a class=\"header\" target="_blank" href=\"https://c4media.workable.com/j/8D2AEE09A9\"><h3>'+
                      'Front-end Developer (Remote & full time)</h3><a>'+
                      '<span>Location:</span><span> Lithuania, Vilniaus apskritis, Latviai</span>'+
                      '<a class=\"header\" target="_blank" href=\"https://c4media.workable.com/j/8D2AEE09A9\"><h3>'+
                      'Front-end Developer (Remote & full time)</h3><a>'+
                      '<span>Location:</span><span> Lithuania, Vilniaus apskritis, Latviai</span>'+
                      '<a class=\"header\" target="_blank" href=\"https://c4media.workable.com/j/8D2AEE09A9\"><h3>'+
                      'Front-end Developer (Remote & full time)</h3><a>'+
                      '<span>Location:</span><span> Lithuania, Vilniaus apskritis, Latviai</span>'+
                      '<a class=\"header\" target="_blank" href=\"https://c4media.workable.com/j/8D2AEE09A9\"><h3>'+
                      'Front-end Developer (Remote & full time)</h3><a>'+
                      '<span>Location:</span><span> Lithuania, Vilniaus apskritis, Latviai</span>'+
                      '<a class=\"header\" target="_blank" href=\"https://c4media.workable.com/j/8D2AEE09A9\"><h3>'+
                      'Front-end Developer (Remote & full time)</h3><a>';



  private setIframeReady(iframe: ElementRef): void {

   const win: Window = iframe.nativeElement.contentWindow;

    // Pass the variable from parent to iframe
    const doc: Document = win.document;

    doc.open();
    // doc.write(iframeCode);

    doc.write('<!DOCTYPE html><html><head><style>span{display:block;}.container{font-family: Roboto;font-size: 14px;font-weight: 300;line-height: 1.4;color: #333;}.header{font-family:Roboto;'+
              ' color: #3fa3c9; font-size: 1.5rem;text-decoration: none;} h3{ margin-top: 0rem;}'+
              '</style><meta charset="utf-8"/><meta http-quiv="Content-Type" content="text/html; '+
              'charset=utf-8"/><title>Print Frame</title></head><body><div class="container">'+
               this.htmlStr +'</div></body></html>');

    doc.close();

  }
}


