import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.css'
})
export class ConfigurationComponent {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      dni: ["", [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      correo: ["", [Validators.required, Validators.email]],  
      password: ["", [Validators.required, Validators.minLength(4)]],
      marca: ["", Validators.required],
      placa: ["", Validators.required],
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      alert("Datos guardados correctamente");
      // Lógica adicional para guardar datos o redirigir
    } else {
      alert("Por favor completa todos los campos correctamente");
    }
  }

  uploadImage() {
    alert("Función para subir imagen activada");
    // Aquí puedes agregar la lógica para subir la imagen
  }
}
