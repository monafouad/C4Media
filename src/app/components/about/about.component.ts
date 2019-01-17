import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  title = 'About C4Media';
  subtitle = 'Our core values';
  content = 'Software is changing the world. C4Media -provider of InfoQ.com and QCon conferences - is dedicated to serving the world-wide enterprise software development community with a place to track and facilitate change and innovation. All content published on the website and presented at the conferences is authored by industry practitioners. Our mission is to facilitate the spread of knowledge and innovation in the software developer community (since 2005). InfoQ is a practitioner-driven global community serving the information needs of development managers, technical team leads, software architects, and project managers. Every day we create and share content in 5 different languages by developers for developers. With a readership base of over 1,000,000 unique visitors per month reading content from 100 locally-based editors across the globe, we continue to build localized communities. QCon is a practitioner-driven conference designed for technical team leads, architects, and project managers who influence software innovation in their teams. QCon coferences are organized by InfoQ and they run 8 times/year in San Francisco, New York, London, Beijing, Shanghai, Tokyo, Sao Paulo, and Rio.';
  

   array = [
    {
      title: 'Accountability',
      icon: 'fa-check-double',
      content: 'We take ownership of results. Well do what it takes to get things done and are very serious about our commitments.'
    },
    {
      	title: 'Integrity',
      	icon: 'fa-wrench',
      	content: 'We believe in honesty and trustworthiness. We publish content our readers can trust. We are being trustworthy with our readers, customers, and each other. We act in the best interests of the company.'
    },
    {
       	title: 'Mastery',
       	icon: 'fa-book-reader',
      	content: 'We never stop learning and we strive to continually improve ourselves, our processes, and our company.'
    },
    {
       	title: 'Service',
       	icon: 'fa-user-check',
      	content: 'We experience the joy of serving others. We go above and beyond for our customers, for our readers, and for each other.'
    },
    {
       	title: 'Transparency',
       	icon: 'fa-sun',
      	content: 'Be transparent about process, status, expectations, feelings, successes, and failures'
    },

  ];


  constructor() { }

  ngOnInit() {
  }

}
