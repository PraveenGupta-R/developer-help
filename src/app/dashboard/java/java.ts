import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-java',
  templateUrl: './java.html',
  styleUrl: './java.css',
  standalone: true,
  imports: [CommonModule] 
})
export class JavaComponent {

   topic: string = '';

   constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.topic = params.get('topic') || 'basics';
      // Optionally: Load content based on topic
      // this.loadTopicData(this.topic);
    });
  }
}
