import { DatePipe } from "@angular/common";

export interface FiltrosReservaModel {
fecha_inicio: string | null;
fecha_fin: string | null;
tipo: string;
empleadoId: string;
}