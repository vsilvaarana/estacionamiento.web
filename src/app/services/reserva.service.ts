import { Injectable } from '@angular/core';
import { ReservaEmpleadoDetalle } from '../models/reserva-empleado-detalle';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  reservasEmpleado: ReservaEmpleadoDetalle[] =[]

  constructor(
    private readonly http: HttpClient
  ) { }

  //: Observable<ReservaEmpleadoDetalle[]> 
  obtenerReservasEmpleado(empleadoid: number){
    //return of(this.reservasEmpleado)
    return this.http.get("https://localhost:7167/api/Reserva/ListarPorEmpleado?empleadoId=1", {responseType: "json"})
  }



}

/*
{
      estacionamiento: 'E1',
      espacio: '1',
      placa: 'ABC-123',
      fecha: '2024-11-03',
      estado: 'Vigente'
    },
    {
      estacionamiento: 'E1',
      espacio: '2',
      placa: 'ABC-123',
      fecha: '2024-11-02',
      estado: 'Concluido'
    },
    {
      estacionamiento: 'E1',
      espacio: '5',
      placa: 'ABC-123',
      fecha: '2024-11-01',
      estado: 'Concluido'
    },
    {
      estacionamiento: 'E2',
      espacio: '15',
      placa: 'ABC-123',
      fecha: '2024-10-30',
      estado: 'Concluido'
    }
      */