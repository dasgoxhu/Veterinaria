import { MascotaEntity } from '../mascota.entity';
import { DoctorEntity } from '../doctor.entity';
import { MascotaHistorial } from 'src/Api/mascotahistorial.vo';
export interface ServiceVeterinaria {
    AgregarMascota(mascota: MascotaEntity): Promise<void>;
    AgregarDoctor(doctor: DoctorEntity): Promise<void>;
    VerHistorial(mascotaid: string): Promise<MascotaEntity>;
    EditarHistoria(mascota: MascotaHistorial): Promise<void>;
    VerHistoriales(doctor: string): Promise<MascotaEntity[]>;
    EliminarMascota(mascotaid: string): Promise<void>;
    verDoctores(): Promise<any[]>;
    verMascotas(): Promise<any[]>;
}
