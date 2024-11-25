import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario-model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  dominio: string = "https://localhost:7167/api/Usuario"
  constructor(
    private readonly http:HttpClient
  ) { }

  registrar(usuarioModel: UsuarioModel){
    
    return this.http.post<number>(this.dominio, usuarioModel)
  }

  //Edith
  configurar(usuarioModel: UsuarioModel){
    
    return this.http.put<any>(this.dominio, usuarioModel)
  }

  obtenerUsuarioPorId(id: number) {
    const url = `${this.dominio}?id=${id}`; 
    console.log(url);
    return this.http.get<UsuarioModel>(url);
  }

  //subirImagen(formData: FormData) {
    //return this.http.post('https://localhost:7167/api/Usuario/UploadImage', formData);
  //}

  validarLogin(credenciales: { email: string; password: string }) {
    const url = `${this.dominio}/Login`;
    return this.http.post<{ token: string; success: boolean, name: string }>(url, credenciales);
  }
}
