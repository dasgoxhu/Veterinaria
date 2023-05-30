import { DoctorEntity } from "src/Dominio/doctor.entity";
import { DoctorRepository } from "src/Dominio/doctor.repository";
import { MongoRepository } from "typeorm";
export declare class DoctorRepositoryImpl implements DoctorRepository {
    private readonly DoctorImplements;
    constructor(DoctorImplements: MongoRepository<DoctorEntity>);
    CrearDoctor(Doctor: DoctorEntity): Promise<void>;
    findById(id: string): Promise<DoctorEntity>;
    EditarHistorialMascota(Doctor: DoctorEntity): Promise<void>;
    VerTodosDoctore(): Promise<DoctorEntity[]>;
}
