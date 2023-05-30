import { ServiceVeterinaria } from './serviceveterinaria';
import { MascotaHistorial } from 'src/Api/mascotahistorial.vo';
import { DoctorEntity } from '../doctor.entity';
import { MascotaEntity } from '../mascota.entity';
import { MascotaRepository } from '../mascota.repository';
import { DoctorRepository } from '../doctor.repository';
export declare class ServiceVeterinariaService implements ServiceVeterinaria {
    private readonly mascotaRepository;
    private readonly doctorRepository;
    constructor(mascotaRepository: MascotaRepository, doctorRepository: DoctorRepository);
    verDoctores(): Promise<any[]>;
    verMascotas(): Promise<any[]>;
    AgregarMascota(mascota: MascotaEntity): Promise<void>;
    AgregarDoctor(doctor: DoctorEntity): Promise<void>;
    VerHistorial(mascotaid: string): Promise<MascotaEntity>;
    EditarHistoria(mascota: MascotaHistorial): Promise<void>;
    VerHistoriales(doctor: string): Promise<MascotaEntity[]>;
    EliminarMascota(mascotaid: string): Promise<void>;
}
