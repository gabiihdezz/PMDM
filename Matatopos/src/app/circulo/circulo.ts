import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from '../services/local-storage';

@Component({
  selector: 'app-circulo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './circulo.html',
  styleUrls: ['./circulo.css']
})
export class Circulo implements OnInit {
  modoHalloween: boolean = false;
  modoNavidad: boolean = false;

  constructor(private storage: StorageService) {}

ngOnInit() {
  this.modoHalloween = this.storage.getItem('modoHalloween') === 'true';
  this.modoNavidad = this.storage.getItem('modoNavidad') === 'true';
}

guardarModos() {
  this.storage.setItem('modoHalloween', this.modoHalloween.toString());
  this.storage.setItem('modoNavidad', this.modoNavidad.toString());
}

}
