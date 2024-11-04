import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedModule } from "../../shared/shared.module";


@Component({
  selector: 'app-nueva-reserva',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './nueva-reserva.component.html',
  styleUrl: './nueva-reserva.component.css'
})

export class NuevaReservaComponent {
  constructor(
    private fb: FormBuilder,

    private router: Router

    

  ) {}

    __onReservar(){
      alert("Reserva realizada")
      this.router.navigate(["home"])
      
         }
  
}
