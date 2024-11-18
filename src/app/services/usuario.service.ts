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
}
