import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,

    private router: Router

  ) {}


  loginForm = this.fb.group({
    email: ["", [Validators.required]],  // Eliminamos Validators.email para permitir texto libre
    password: ["", [Validators.required, Validators.minLength(4)]],
  });

  __onAcceder() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    // Verificar si las credenciales son exactamente "admin" y "1234"
    if (this.loginForm.valid && email === 'admin' && password === '1234') {
      console.log("Acceso concedido");
      this.router.navigate(["/home"]); // Redirige a la página de inicio
    } else {
      alert("Usuario no válido");
    }

  }
}

