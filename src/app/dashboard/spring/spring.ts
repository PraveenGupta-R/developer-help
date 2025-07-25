import { Component } from '@angular/core';

@Component({
  selector: 'app-spring',
  templateUrl: './spring.html',
  styleUrl: './spring.css'
})
export class SpringComponent {
  // This component can be used to display Spring-related content
  // You can add properties and methods as needed for your application
  title: string = 'Spring Framework';
  description: string = 'Learn the essentials of the Spring Framework for building Java applications.';
  
  constructor() {
    // Initialization logic can go here
  }

  // Example method to demonstrate functionality
  getFrameworkInfo(): string {
    return `${this.title}: ${this.description}`;
  }

}
