import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservaEmpleadoDetalle } from '../../models/reserva-empleado-detalle';
import { ReservaService } from '../../services/reserva.service';
import { FiltrosReservaModel } from '../../models/filtros-reserva-model';
//import { FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reserva-empleado-detalle',
  templateUrl: './reserva-empleado-detalle.component.html',
  styleUrl: './reserva-empleado-detalle.component.css'
})
export class ReservaEmpleadoDetalleComponent  implements OnInit {
  datepipe: DatePipe = new DatePipe('en-US')
  fecha_actual = this.datepipe.transform(new Date(),'yyyy-MM-dd')

  reservasEmpleado: ReservaEmpleadoDetalle[] = []
  empleadoId: string = ""
  filtrosReservaModel: FiltrosReservaModel = {
    fecha_inicio: this.fecha_actual,
    fecha_fin: this.fecha_actual,
    tipo: "0",
    empleadoId: ""
  }

  constructor(
    private  activedRoute: ActivatedRoute,
    private readonly reservaService: ReservaService
    //private formGroup: FormGroup
  ){}

  listar(){
    this.activedRoute.params.subscribe(
      params => {this.filtrosReservaModel.empleadoId = "1" } //params["id"]
    )

    this.reservaService.obtenerReservasUsuario(this.filtrosReservaModel).subscribe((rest: any) => {
      this.reservasEmpleado = rest
      console.log(this.reservasEmpleado)
    })
   }

   registrar(){}

   buscar()
   {    
    this.listar()

    //alert('hi' + this.filtrosReservaModel.fecha_inicio + ' ' + this.filtrosReservaModel.tipo);
   }


  ngOnInit(): void {
    //this.cargaInicial()
    this.listar()

    /*
    this.activedRoute.params.subscribe(
      params=>{
        console.log(params["id"])
        this.reservaService.obtenerReservasEmpleado(params["id"]).subscribe(
          result=>{
            this.reservasEmpleado = result

          }
        )
      }
    )
*/
  }

  cargaInicial(): void {
    
    
    //const fechaActual = new Date();
    
    //this.filtrosReservaModel.fecha_inicio = fechaActual.getDate().toString();
    
    //this.filtrosReservaModel.fecha_fin = fechaActual.getDate().toString();
  }
}
