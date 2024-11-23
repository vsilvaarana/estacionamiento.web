import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedModule } from "../../shared/shared.module";
import { UsuarioModel } from '../../models/usuario-model';
import { UsuarioService } from '../../services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [ReactiveFormsModule, SharedModule],
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  usuarioModel: UsuarioModel = {
    id: 0,
    nombre: '',
    apellido: '',
    dni: '',
    email: '',
    password: '',
    marca: '',
    placa: ''
  };

  profileForm: FormGroup;
  selectedFile: File | null = null;
  previewImageUrl: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute
  ) {
    this.profileForm = this.fb.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      dni: ["", [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      correo: ["", [Validators.required, Validators.email]],
      marca: ["", Validators.required],
      placa: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(4)]],
    });
  }

  ngOnInit(): void {
    const userId = this.activatedRoute.snapshot.params['id'];
    if (userId) {
      this.cargarUsuario(userId);
    } else {
      alert('No se proporcionó un código de usuario válido.');
    }
  }

  cargarUsuario(id: number): void {
    this.usuarioService.obtenerUsuarioPorId(id).subscribe({
      next: (usuario) => {
        this.usuarioModel = usuario;
        this.profileForm.patchValue(usuario);
      },
      error: (err) => {
        console.error('Error al obtener el usuario:', err);
        alert('No se pudo cargar la información del usuario.');
      }
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];

      // Vista previa de la imagen seleccionada
      const reader = new FileReader();
      reader.onload = (e) => {
        this.previewImageUrl = e.target?.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  triggerFileInput(): void {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  }

  uploadImage(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      this.usuarioService.subirImagen(formData).subscribe({
        next: (response) => {
          alert('Imagen subida exitosamente');
          console.log('Respuesta del servidor:', response);
        },
        error: (err) => {
          console.error('Error al subir la imagen:', err);
          alert('Error al subir la imagen.');
        }
      });
    } else {
      alert('Por favor selecciona una imagen antes de subir.');
    }
  }

  onSubmit(): void {
    if (this.profileForm.valid) {


      const usuarioData: UsuarioModel = {
        ...this.usuarioModel,
        ...this.profileForm.value,
        email: this.profileForm.get('correo')?.value
      };

console.log("dato.")
      console.log(usuarioData)

      this.usuarioService.configurar(usuarioData).subscribe({
        next: (response) => {
          alert('Datos guardados exitosamente.');
          console.log('Respuesta del servidor:', response);
        },
        error: (err) => {
          console.error('Error al guardar los datos:', err);
          alert('Error al guardar los datos.');
        }
      });
    } else {
      alert('Por favor completa todos los campos correctamente');
    }
  }
}
