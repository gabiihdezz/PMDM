import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CdkDrag, CdkDropList, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { StorageService } from '../services/local-storage';

@Component({
  selector: 'app-tablero',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CdkDropList, CdkDrag],
  templateUrl: './tablero.html',
  styleUrls: ['./tablero.css']
})
export class Tablero implements OnInit {
  formulario: FormGroup;
  todo: string[] = [];
  doing: string[] = [];
  done: string[] = [];

  modoHalloween: boolean = false;
  modoNavidad: boolean = false;

  // ✅ Constructor combinado
  constructor(private fb: FormBuilder, private storage: StorageService) {
    this.formulario = this.fb.group({
      tarea: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.modoHalloween = this.storage.getItem('modoHalloween') === 'true';
    this.modoNavidad = this.storage.getItem('modoNavidad') === 'true';

    this.cargarTareas();
  }

  guardarModos() {
    this.storage.setItem('modoHalloween', this.modoHalloween.toString());
    this.storage.setItem('modoNavidad', this.modoNavidad.toString());
  }

  onSubmit() {
    if (this.formulario.valid) {
      const tarea = this.formulario.value.tarea.trim();
      if (tarea) {
        this.todo.push(tarea);
        this.guardarTareas();
      }
      this.formulario.reset();
    } else {
      this.formulario.markAllAsTouched();
    }
  }

  eliminarTarea(lista: 'todo' | 'doing' | 'done', index: number) {
    this[lista].splice(index, 1);
    this.guardarTareas();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    this.guardarTareas();
  }

  guardarTareas() {
    const data = {
      todo: this.todo,
      doing: this.doing,
      done: this.done
    };
    localStorage.setItem('kanbanData', JSON.stringify(data));
  }

  cargarTareas() {
    const saved = localStorage.getItem('kanbanData');
    if (saved) {
      const data = JSON.parse(saved);
      this.todo = data.todo || [];
      this.doing = data.doing || [];
      this.done = data.done || [];
    }
  }
}
