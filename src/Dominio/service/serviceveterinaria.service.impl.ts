import { Inject, Injectable } from '@nestjs/common';
import { ServiceVeterinaria } from './serviceveterinaria';
import { MascotaHistorial } from 'src/Api/mascotahistorial.vo';
import { DoctorEntity } from '../doctor.entity';
import { MascotaEntity } from '../mascota.entity';
import { MascotaRepository } from '../mascota.repository';
import { DoctorRepository } from '../doctor.repository';

@Injectable()
export class ServiceVeterinariaService implements ServiceVeterinaria {

    constructor(@Inject('MascotaRepository')
        private readonly mascotaRepository: MascotaRepository,
        @Inject('DoctorRepository')
        private readonly doctorRepository: DoctorRepository
    ){}
    async verDoctores(): Promise<any[]> {
     let doctores: DoctorEntity[] 
     doctores = await this.doctorRepository.VerTodosDoctore()
     return doctores
    }
    async verMascotas(): Promise<any[]> {
      let mascotas: MascotaEntity[]
      mascotas = await this.mascotaRepository.VerTodasMascotas()
      return mascotas
     }
    async AgregarMascota(mascota: MascotaEntity): Promise<void> {
        let posiblemascota: MascotaEntity
        posiblemascota = await this.mascotaRepository.findByCN(mascota.cedula,mascota.nombreM)
        let doctor: DoctorEntity
        doctor = await this.doctorRepository.findById(mascota.doctor)
        return new Promise(async (resolve,reject) => {
            if (!doctor) {
                reject('El doctor no existe');
              }
            if(posiblemascota){
              reject('la mascota ya esta en la base de datos');
              return null
            }
            
              let registro: string = "" 
            
              switch (mascota.especie) {
                case 'perros':
                  if (mascota.peso < 4) {
                    reject('No se puede tener perros menores a 4kg');
                    break;
                  } else if (mascota.peso > 30) {
                    registro = ' sobrepeso ';
                  } else if (mascota.peso < 15) {
                    registro = ' desnutrición ';
                  }
                  mascota.historial += registro
                  await this.mascotaRepository.AgregarMascotas(mascota);
                  break;
                case 'gatos':
                  if (mascota.peso < 3) {
                    reject('No se puede tener gatos menores a 3kg');
                    break;
                  } else if (mascota.peso > 12) {
                    registro = ' sobrepeso ';
                  } else if (mascota.peso < 6) {
                    registro = ' desnutrición ';
                  }
                  mascota.historial += registro
                  await this.mascotaRepository.AgregarMascotas(mascota);
                  break;
                case 'aves':
                  if (mascota.peso < 2) {
                    reject('No se puede tener aves menores a 2kg');
                    break;
                  } else if (mascota.peso > 10) {
                    registro = ' sobrepeso ';
                  } else if (mascota.peso < 4) {
                    registro = ' desnutrición ';
                  }
                  mascota.historial += registro
                  await this.mascotaRepository.AgregarMascotas(mascota);
                  break;
                default:
                    reject("No es una especie de mascota válida")
                    break;
              }
              resolve()
    })
    }
    AgregarDoctor(doctor: DoctorEntity): Promise<void> {
        return new Promise((resolve,reject) =>{
            this.doctorRepository.CrearDoctor(doctor)
            resolve()
        })
    }
    VerHistorial(mascotaid: string): Promise<MascotaEntity> {
        let mascota = this.mascotaRepository.VerHistorialMascota(mascotaid)
        return mascota
    }
    async EditarHistoria(mascota: MascotaHistorial): Promise<void> {
        let mascotah: MascotaEntity
        mascotah = await this.mascotaRepository.findById(mascota.id)
        return new Promise((resolve,reject) =>{
            mascotah.historial = mascota.historial
            this.mascotaRepository.EditarHistorialMascota(mascotah)
            resolve()
        })  
    }
    async VerHistoriales(doctor: string): Promise<MascotaEntity[]> {
        let mascota = await this.mascotaRepository.listadoMascotas(doctor)
        return mascota    
    }
    async EliminarMascota(mascotaid: string): Promise<void>{
        let mascotah: MascotaEntity
        mascotah = await this.mascotaRepository.findById(mascotaid)
        return new Promise((resolve,reject)=>{
            this.mascotaRepository.EliminarMascotas(mascotah)
            resolve()
        })
    }
}
