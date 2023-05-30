import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm"

@Entity('MascotaEntity')
export class MascotaEntity
{
    @ObjectIdColumn()
    _id: ObjectID | string
    @Column()
    nombreM : string
    @Column()
    doctor : string
    @Column()
    cedula: number
    @Column()
    edad: number
    @Column()
    especie: string
    @Column()
    raza: string
    @Column()
    caracteristicas: string
    @Column()
    peso: number
    @Column()
    historial: string
}
