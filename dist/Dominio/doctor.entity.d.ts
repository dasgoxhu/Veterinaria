import { ObjectID } from "typeorm";
export declare class DoctorEntity {
    _id: ObjectID | string;
    nombreD: string;
    edad: number;
    estado: boolean;
    Paciente: string[];
}
