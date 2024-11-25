import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstacionamientoService {
dominio: string = "https://localhost:7167/api/Estacionamiento/"

  constructor(
    private readonly http: HttpClient
  ) { }

  buscarEstacionamientoLibre(){
    var url = this.dominio + "BuscarEstacionamientoLibre"    
    console.log(url)
    return this.http.get(url, {responseType: "json"})
  }
}
