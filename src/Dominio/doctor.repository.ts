import { DoctorEntity } from "./doctor.entity"

export interface DoctorRepository{
    CrearDoctor(Doctor: DoctorEntity):Promise<void>
    findById(id:string):Promise<DoctorEntity>
    EditarHistorialMascota(Doctor:DoctorEntity):Promise<void>
    VerTodosDoctore():Promise<DoctorEntity[]>
}