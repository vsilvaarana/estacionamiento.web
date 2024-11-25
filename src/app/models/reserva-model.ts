export interface ReservaModel {
    estacionamientoId: number;
    piso: string;
    espacio: string;
    tipo: number;
    estado: number;
    usuarioId?: number;
    fecha?: string | null;
    placa: string;
}