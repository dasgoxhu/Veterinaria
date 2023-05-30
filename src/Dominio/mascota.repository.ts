import { MascotaEntity } from './mascota.entity';

export interface MascotaRepository{
    AgregarMascotas(Mascota:MascotaEntity): Promise<void>
    EliminarMascotas(Mascota:MascotaEntity): Promise<void>
    VerHistorialMascota(Mascota:string):Promise<MascotaEntity>
    EditarHistorialMascota(Mascota:MascotaEntity):Promise<void>
    listadoMascotas(Mascota:string):Promise<MascotaEntity[]>
    findById(id: string): Promise<MascotaEntity>
    findByCN(id: number , nombre: string): Promise<MascotaEntity>
    VerTodasMascotas(): Promise<MascotaEntity[]>
}