import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedModule } from "../../shared/shared.module";

@Component({
  selector: 'app-espacios',
  standalone: true,
  imports: [ReactiveFormsModule, SharedModule],
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

