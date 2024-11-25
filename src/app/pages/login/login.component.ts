import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

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
    private router: Router,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    let token = localStorage.getItem("authToken");
    if(token){
      this.router.navigate(["/home"]);
    }
  }

  loginForm = this.fb.group({
    email: ["", [Validators.required]],  // Eliminamos Validators.email para permitir texto libre
    password: ["", [Validators.required, Validators.minLength(4)]],
  });

  __onAcceder() {
    const email = this.loginForm.get('email')?.value ?? '';
    const password = this.loginForm.get('password')?.value ?? '';

    if (!email || !password) {
      console.log('El email y la contraseña son obligatorios.');
      return;
    }

    const credenciales = { email, password };
    this.usuarioService.validarLogin(credenciales).subscribe({
      next: (respuesta) => { 
        if (respuesta.success) {
          localStorage.setItem('authToken', respuesta.token);
          localStorage.setItem('userName', respuesta.name);
          this.router.navigate(["/home"]);
        } else {
          console.log('Credenciales inválidas');
        }
      },
      error: (err) => {
        if (err.status === 401) {
          console.error('Credenciales inválidas:', err.error.message);
        } else {
          console.error('Error inesperado:', err.message);
        }
      }
    });

  }
}

