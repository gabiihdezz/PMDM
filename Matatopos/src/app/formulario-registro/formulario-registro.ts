import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';

@Component({
  selector: 'app-formulario-registro',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario-registro.html',
  styleUrls: ['./formulario-registro.css']
})
export class FormularioRegistro implements OnInit {
  modoHalloween: boolean = false;

  ngOnInit() {
    const stored = localStorage.getItem('modoHalloween');
    this.modoHalloween = stored === 'true';
  }

  formulario: FormGroup;
  mensajeExito: string = '';
  segundosRestantes: number = 0;
  mensajeCuentaAtras: string = '';

  tiposInvitado: string[] = ['Fantasma', 'Vampiro', 'Zombi', 'Bruja', 'Otro', 'Humano'];

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      tipoInvitado: ['', Validators.required],
      disfraz: ['', Validators.required],
      fechaLlegada: ['', Validators.required],
      aceptaReglas: [false, Validators.requiredTrue]
    });

    this.iniciarCuentaAtras();
  }

  get f() {
    return this.formulario.controls;
  }

  onSubmit() {
    if (this.formulario.valid) {
      const nombre = this.formulario.value.nombre;
      this.mensajeExito = `¡Bienvenido/a, ${nombre}! Ya estás dentro de la fiesta.`;
      this.formulario.reset();
    } else {
      this.formulario.markAllAsTouched();
    }
  }

  iniciarCuentaAtras() {
  const ahora = new Date();
  const año = ahora.getFullYear();
  const fechaObjetivo = new Date(año, 9, 31, 23, 59, 59);
  if (ahora > fechaObjetivo) {
    fechaObjetivo.setFullYear(año + 1);
  }

  interval(1000).subscribe(() => {
    const diferencia = fechaObjetivo.getTime() - new Date().getTime();

    if (diferencia <= 0) {
      this.mensajeCuentaAtras = 'Happy Halloween! 🎃👻';
      return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);

    this.mensajeCuentaAtras = `⏳ Faltan ${dias} días, ${horas} horas y ${minutos} minutos para que empiece el Halloween!`;
  });
}
}