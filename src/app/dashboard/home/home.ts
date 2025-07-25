import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule], 
  templateUrl: './home.html',
  styleUrls: ['./home.css'] 
})
export class HomeComponent {
  constructor(private router: Router) {}

 courses = [
  { id: 1, img: 'assets/images/java.png', title: 'Java Basics', desc: 'Intro to Java', price: 1000 },
  { id: 2, img: 'assets/images/spring.png', title: 'Spring', desc: 'Framework essentials', price: 1100 },
  { id: 3, img: 'assets/images/springboot.png', title: 'Spring Boot', desc: 'Rapid dev', price: 1200 },
  { id: 4, img: 'assets/images/microservices.png', title: 'Microservices', desc: 'Scalable arch', price: 1300 },
  { id: 5, img: 'assets/images/sql.png', title: 'SQL', desc: 'Query fundamentals', price: 900 },
  { id: 6, img: 'assets/images/kafka.png', title: 'Kafka', desc: 'Streaming events', price: 1400 },
  { id: 7, img: 'assets/images/docker.png', title: 'Docker', desc: 'Containerize apps', price: 1600 },
  { id: 8, img: 'assets/images/aws.png', title: 'AWS', desc: 'Cloud fundamentals', price: 1800 },
];

  goToCourse(id: number) {
    this.router.navigate(['/course']);
  }
}
