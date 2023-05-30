import { MascotaEntity } from "src/Dominio/mascota.entity";
import { ServiceVeterinaria } from "src/Dominio/service/serviceveterinaria";
import { Response } from "express";
import { DoctorEntity } from "src/Dominio/doctor.entity";
import { MascotaHistorial } from "./mascotahistorial.vo";
export declare class VeterinariaController {
    private readonly serviceVeterinaria;
    constructor(serviceVeterinaria: ServiceVeterinaria);
    CrearMascota(mascota: MascotaEntity, res: Response): Promise<void>;
    CrearDoctor(doctor: DoctorEntity, res: Response): Promise<void>;
    VerHistorial(mascotaid: MascotaHistorial, res: Response): Promise<void>;
    EditarHistorial(mascota: MascotaHistorial, res: Response): Promise<void>;
    VerHistoriales(mascotaid: MascotaHistorial, res: Response): Promise<void>;
    EliminarMascota(mascotaid: MascotaHistorial, res: Response): Promise<void>;
    VerListaPD(res: Response): Promise<void>;
}
