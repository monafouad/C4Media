import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
})
export class TeamComponent implements OnInit {
  title = 'The team';
  content ='Our work ethic centers around the core values of accountability, integrity, mastery, service, and transparency. Our team is located around the globe and we all enjoy working together virtually via Skype on an everyday basis, as well as in-person at our various conferences that and at our annual company meeting.We are all passionate about what we are doing and we would love to work with you.'
  constructor() { }

  ngOnInit() {
  }

}
