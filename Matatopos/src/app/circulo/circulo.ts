import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-circulo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './circulo.html',
  styleUrls: ['./circulo.css']
})
export class Circulo implements OnInit {
  modoHalloween: boolean = false;

  ngOnInit() {
    const stored = localStorage.getItem('modoHalloween');
    this.modoHalloween = stored === 'true';
  }
}
