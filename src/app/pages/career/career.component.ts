import { Component, OnInit } from '@angular/core';
import 'assets/js/custom.js'

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {
  title = 'Want to join us?'
  constructor() { }

  ngOnInit() {
  }

}
