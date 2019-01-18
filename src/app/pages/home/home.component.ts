import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

	@ViewChild('hello') helloTemplate; 

	main_title = 'C4 Media InfoQ, QCon';
	second_title = 'Accelerating the software side of human progress.';
	third_title = 'We help developer teams adopt new technology and best practices.';

  	title_a = 'Info Q Reader';	   
  	title_b = 'QCon Attendee / Speaker';	    
  	title_c = 'Download PDF';	  
  	title_d = 'View Careers';
	   
   
  	constructor() { }

	ngAfterViewInit() {
	  console.log(this.helloTemplate);
	}

    imagespp: string="https://qconnewyork.com/ny2018/cdn/farfuture/nANumX198tuisqQ1_780fMwtLx3n8f23-AWO2iSmxds/mtime_1493737106/sites/default/files/styles/img-single-track/public/ray-tsang735e.jpg?itok=rtut1oaW"

	ngOnInit() {

	}
	getBase64Image(imagespp) {
	  var canvas = document.createElement("canvas");
	  console.log("imagespp");
	  canvas.width = imagespp.width;
	  canvas.height = imagespp.height;
	  var ctx = canvas.getContext("2d");
	  ctx.drawImage(imagespp, 0, 0);
	  var dataURL = canvas.toDataURL("image/png");
	  return dataURL;
	}

	//var base64 = (document.getElementById("imageid"));
	download(){
	  let doc = new jsPDF();
	  for(var i=0;i<this.imagespp.length;i++){
	   let imageData= this.getBase64Image(document.getElementById('imagespp'));
	   console.log(imageData);
	     doc.addImage(imageData, "JPG", 10, (i+1)*10, 180, 150);
	     doc.addPage();
	  }
	  doc.save('Test.pdf');
	}

}

