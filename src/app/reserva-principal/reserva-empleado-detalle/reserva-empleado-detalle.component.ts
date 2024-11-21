import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservaEmpleadoDetalle } from '../../models/reserva-empleado-detalle';
import { ReservaService } from '../../services/reserva.service';
import { FiltrosReservaModel } from '../../models/filtros-reserva-model';

@Component({
  selector: 'app-reserva-empleado-detalle',
  templateUrl: './reserva-empleado-detalle.component.html',
  styleUrl: './reserva-empleado-detalle.component.css'
})
export class ReservaEmpleadoDetalleComponent  implements OnInit {
  reservasEmpleado: ReservaEmpleadoDetalle[] = []
  empleadoId: string = ""
  filtrosReservaModel: FiltrosReservaModel = {
    fecha_inicio: "",
    fecha_fin: "",
    tipo: "",
    empleadoId: ""
  }

  constructor(
    private  activedRoute: ActivatedRoute,
    private readonly reservaService: ReservaService
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
}
