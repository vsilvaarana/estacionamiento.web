import { Injectable } from '@angular/core';
import { ReservaEmpleadoDetalle } from '../models/reserva-empleado-detalle';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  reservasEmpleado: ReservaEmpleadoDetalle[] =[
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
  ]

  constructor() { }

  obtenerReservasEmpleado(empleadoid: number): Observable<ReservaEmpleadoDetalle[]> {
    return of(this.reservasEmpleado)
  }
}
