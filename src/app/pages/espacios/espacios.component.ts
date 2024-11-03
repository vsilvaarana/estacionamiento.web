import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-espacios',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './espacios.component.html',
  styleUrl: './espacios.component.css'
})
export class EspaciosComponent {
  constructor(
    private fb: FormBuilder,

    private router: Router

  ) {}


  __separar(){
    
      this.router.navigate(["/nueva_reserva"]); // Redirige al login
    }
    
  }

