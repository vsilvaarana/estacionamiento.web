import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './recuperar.component.html',
  styleUrl: './recuperar.component.css'
})
export class RecuperarComponent {
  constructor(
    private fb: FormBuilder,

    private router: Router

  ) {}

  recuperarForm = this.fb.group({
    email: ["", [Validators.required]],  // Eliminamos Validators.email para permitir texto libre
    confirmar: ["", [Validators.required,]],
  });

  __recuperar() {
    const email = this.recuperarForm.get('email')?.value;
    const confirmar = this.recuperarForm.get('confirmar')?.value;

    
    if (this.recuperarForm.valid && email === confirmar)  {
      alert("Se envio mensaje a su correo");
      this.router.navigate(["/login"]); // Redirige a la página de inicio
    } else {
      alert("Los correos no coinciden");
    }

  }

  __volver() {
    this.router.navigate(["/login"]);
  }
}
