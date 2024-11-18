import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from '../../models/usuario-model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
    usuarioId: number = 0
    usuarioModel: UsuarioModel = {
        nombre: '',
        apellido: '',
        dni: '',
        email: '',
        password: '',
        marca: '',
        placa: ''
    }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private readonly usuarioService: UsuarioService

  ) {}

  registerForm = this.fb.group({
    nombre: ["", [Validators.required]],
    apellido: ["", [Validators.required]],
    dni: ["", [Validators.required, Validators.pattern('^[0-9]{8}$')]],
    email: ["", [Validators.required]],  
    //password: ["", [Validators.required, Validators.minLength(4)]],
    marca: ["", [Validators.required]],
    placa: ["", [Validators.required]],
  });

    ngOnInit(): void {
      
    }

  __registrar(){
    if(this.registerForm.valid){

      this.usuarioService.registrar(this.usuarioModel).subscribe((rest: any)=>{
        this.usuarioId = rest
        alert("Se registro correctamente " + this.usuarioId);
        this.router.navigate(["/login"]); // Redirige al login
      }
    )

      
    }
    else {
      alert("Falta llenar campos");
    }
  }

  __volver() {
    this.router.navigate(["/login"]);
  }
}
