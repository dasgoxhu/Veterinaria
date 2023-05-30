import { MascotaEntity } from "src/Dominio/mascota.entity";
import { MascotaRepository } from "src/Dominio/mascota.repository";
import { MongoRepository } from "typeorm";
export declare class MascotaRepositoryImpl implements MascotaRepository {
    private readonly MascotaImplements;
    constructor(MascotaImplements: MongoRepository<MascotaEntity>);
    AgregarMascotas(Mascota: MascotaEntity): Promise<void>;
    EliminarMascotas(Mascota: MascotaEntity): Promise<void>;
    VerHistorialMascota(Mascota: string): Promise<MascotaEntity>;
    EditarHistorialMascota(Mascota: MascotaEntity): Promise<void>;
    listadoMascotas(iddoctor: string): Promise<MascotaEntity[]>;
    findById(id: string): Promise<MascotaEntity>;
    findByCN(id: number, nombre: string): Promise<MascotaEntity>;
    VerTodasMascotas(): Promise<MascotaEntity[]>;
}
