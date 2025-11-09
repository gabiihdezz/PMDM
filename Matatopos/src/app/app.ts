import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { NavBar } from './nav-bar/nav-bar';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    NavBar,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Introducción');

  modoHalloween = false;

  toggleHalloween(checked: boolean) {
    this.modoHalloween = checked;

    if (checked) {
      document.body.classList.add('halloween');
    } else {
      document.body.classList.remove('halloween');
    }
  }
}

bootstrapApplication(App)
  .catch(err => console.error(err));
