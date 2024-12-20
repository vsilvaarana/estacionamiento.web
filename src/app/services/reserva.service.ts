import { Injectable } from '@angular/core';
import { ReservaEmpleadoDetalle } from '../models/reserva-empleado-detalle';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FiltrosReservaModel } from '../models/filtros-reserva-model';
import { ReservaModel } from '../models/reserva-model';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  reservasEmpleado: ReservaEmpleadoDetalle[] =[]
  dominio: string = "https://localhost:7167/api/Reserva"

  constructor(
    private readonly http: HttpClient
  ) { }

  //: Observable<ReservaEmpleadoDetalle[]> 
  obtenerReservasUsuario(reserva: FiltrosReservaModel){
    //return of(this.reservasEmpleado)
    var url = this.dominio + "/ListarPorUsuario?usuarioId=" +  reserva.empleadoId + "&fechainicio=" + reserva.fecha_inicio + "&fechafin=" + reserva.fecha_fin + "&tipo=" + reserva.tipo
    
    console.log(url)
    return this.http.get(url, {responseType: "json"})
  }

  registrar(reservaModel: ReservaModel){
    console.log(this.dominio)
    console.log(reservaModel)
    return this.http.post<number>(this.dominio, reservaModel)
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