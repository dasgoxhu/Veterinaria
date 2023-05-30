import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm"
import { MascotaEntity } from "./mascota.entity"

@Entity('DoctorEntity')
export class DoctorEntity
{
    @ObjectIdColumn()
    _id: ObjectID | string
    @Column()
    nombreD : string
    @Column()
    edad: number
    @Column()
    estado: boolean
    @Column()
    Paciente: string[]
}
