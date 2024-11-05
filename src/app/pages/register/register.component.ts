import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(
    private fb: FormBuilder,

    private router: Router

  ) {}

  registerForm = this.fb.group({
    nombre: ["", [Validators.required]],
    apellidos: ["", [Validators.required]],
    dni: ["", [Validators.required, Validators.pattern('^[0-9]{8}$')]],
    email: ["", [Validators.required]],  
    password: ["", [Validators.required, Validators.minLength(4)]],
    marca: ["", [Validators.required]],
    placa: ["", [Validators.required]],
  });

  __registrar(){
    if(this.registerForm.valid){
      alert("Se registro correctamente");
      this.router.navigate(["/login"]); // Redirige al login
    }
    else {
      alert("Falta llenar campos");
    }
  }

  __volver() {
    this.router.navigate(["/login"]);
  }
}
