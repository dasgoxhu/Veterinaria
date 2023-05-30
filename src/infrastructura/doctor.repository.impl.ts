import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DoctorEntity } from "src/Dominio/doctor.entity";
import { DoctorRepository } from "src/Dominio/doctor.repository";
import { MongoRepository } from "typeorm";
import { ObjectID } from "mongodb";
@Injectable()
export class DoctorRepositoryImpl implements DoctorRepository{
    constructor(
        @InjectRepository(DoctorEntity)
        private readonly DoctorImplements: MongoRepository<DoctorEntity>
    ){} 
    CrearDoctor(Doctor: DoctorEntity): Promise<void> {
        return new Promise((resolve,reject)=>
        {
            let NuevoProducto = this.DoctorImplements.create(Doctor)
            this.DoctorImplements.save(NuevoProducto).then(()=>{
                resolve()
            }).catch((error)=>{
                reject(error)
            })     
        })
    }
    findById(id: string): Promise<DoctorEntity> {
        return new Promise((resolve,reject)=>
        {
            this.DoctorImplements.findOne({
                where:{_id : new ObjectID(id)}
            }).then((doctor)=>{
                resolve(doctor)
            }).catch((error)=>{
                reject(error)
            })   
        })
    }
    EditarHistorialMascota(Doctor: DoctorEntity): Promise<void> {

        let doctor: string

        doctor = Doctor._id.toString()
        return new Promise((resolve,reject)=>{this.findById(doctor).then((doctor) => {
                if (!doctor) {
                    throw new Error(`Doctor no encontrado con id ${Doctor._id}`);
                }

                doctor.Paciente = Doctor.Paciente;

                this.DoctorImplements
                    .save(doctor)
                    .then(() => {
                        resolve();
                    })
                    .catch((error) => {
                        reject(error);
                    });
            })
            .catch((error) => {
                reject(error);
            });
        })
    }
    VerTodosDoctore(): Promise<DoctorEntity[]>{
        return new Promise((resolve,reject)=>{
          let lista =
          this.DoctorImplements.find({})
          resolve(lista)
        })
      }
}