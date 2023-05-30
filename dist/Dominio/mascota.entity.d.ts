import { ObjectID } from "typeorm";
export declare class MascotaEntity {
    _id: ObjectID | string;
    nombreM: string;
    doctor: string;
    cedula: number;
    edad: number;
    especie: string;
    raza: string;
    caracteristicas: string;
    peso: number;
    historial: string;
}
