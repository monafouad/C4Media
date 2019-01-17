import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reasons',
  templateUrl: './reasons.component.html',
  styleUrls: ['./reasons.component.scss']
})
export class ReasonsComponent implements OnInit {
  title= 'Top 5 reasons why you would like to work at C4Media';
  constructor() { }

 array = [
    {
      title: '1',
      content: 'We are fostering software innovation and software is changing the world. How great would it be to be part of that?'
    },
    {
      	title: '2',
      	content: 'Great culture: people at C4Media are humble, friendly, and very responsible. Our full time team includes people from Brazil, Romania, Canada, France, Greece, China, US, United Kingdom'
    },
    {
       	title: '3',
      	content: 'Be part of a leading fast growing international company.'
    },
    {
       	title: '4',
      	content: 'Work from home / flexible work hours due to the globally distributed nature'
    },
    {
       	title: '5',
      	content: 'Travel: Every year there is an all-hands company meeting in a cool place. Previous meetings: Czech Republic (Prague), China, Spain, Ireland, P'
    }

  ];


  ngOnInit() {
  }

}
