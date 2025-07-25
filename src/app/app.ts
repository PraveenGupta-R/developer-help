
import { RouterOutlet } from '@angular/router';
import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    activeMenu: string | null = null;
  //tected readonly title = signal('devloper-help');

  toggleDropdown(menu: string): void {
    this.activeMenu = this.activeMenu === menu ? null : menu;
  }

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.nav-item')) {
      this.activeMenu = null;
    }
  }
}


