import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { HalloweenService } from '../services/halloween-service';
import { NavidadService } from '../services/navidad-service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSlideToggleModule,
    FormsModule
  ],
  templateUrl: './nav-bar.html',
  styleUrls: ['./nav-bar.css']
})
export class NavBar {
  modoHalloween: boolean = false; 
  modoNavidad: boolean = false;  
  isMobile: boolean = false;
  sidenavOpened: boolean = true;

  constructor(
    private halloweenService: HalloweenService,
    private navidadService: NavidadService
  ) {
    this.checkScreenSize();
    // Recuperar estados guardados
    this.modoHalloween = localStorage.getItem('modoHalloween') === 'true';
    this.modoNavidad = localStorage.getItem('modoNavidad') === 'true';
  }

  toggleHalloween(estado: boolean) {
    this.modoHalloween = estado;
    if (estado) this.modoNavidad = false;

    // Guardar en localStorage
    localStorage.setItem('modoHalloween', this.modoHalloween.toString());
    localStorage.setItem('modoNavidad', this.modoNavidad.toString());

    // Notificar a los servicios
    this.halloweenService.toggleModo(estado);
    this.navidadService.toggleModo(this.modoNavidad);
  }

  toggleNavidad(estado: boolean) {
    this.modoNavidad = estado;
    if (estado) this.modoHalloween = false;


    localStorage.setItem('modoNavidad', this.modoNavidad.toString());
    localStorage.setItem('modoHalloween', this.modoHalloween.toString());


    this.navidadService.toggleModo(estado);
    this.halloweenService.toggleModo(this.modoHalloween);
  }

  @HostListener('window:resize')
  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
    this.sidenavOpened = !this.isMobile;
  }

  closeIfMobile(drawer: MatSidenav) {
    if (this.isMobile) drawer.close();
  }
}
