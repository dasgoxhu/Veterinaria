import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MascotaEntity } from "src/Dominio/mascota.entity";
import { MascotaRepository } from "src/Dominio/mascota.repository";
import { MongoRepository } from "typeorm";
import { ObjectID } from "mongodb";

@Injectable()
export class MascotaRepositoryImpl implements MascotaRepository{
    constructor(
        @InjectRepository(MascotaEntity)
        private readonly MascotaImplements: MongoRepository<MascotaEntity>
    ){} 
    AgregarMascotas(Mascota: MascotaEntity): Promise<void> {
        return new Promise((resolve,reject)=>
        {
            let NuevoMascota = this.MascotaImplements.create(Mascota)
            this.MascotaImplements.save(NuevoMascota).then(() => {
                resolve();
              })
              .catch((error) => {
                reject(error);
              });
        })
    }
    EliminarMascotas(Mascota: MascotaEntity): Promise<void> {
        return new Promise((resolve,reject)=>{
            this.MascotaImplements.deleteOne(Mascota).then(() => {
                resolve();
              })
              .catch((error) => {
                reject(error);
              });
        })
    }
    VerHistorialMascota(Mascota: string): Promise<MascotaEntity> {
        return new Promise((resolve, reject) => {
            this.MascotaImplements.findOne({
                where: { _id: new ObjectID(Mascota) },
              })
              .then((mascota) => {
                if (mascota) {
                  resolve(mascota);
                } else {
                  reject("Mascota no encontrada");
                }
              })
              .catch((error) => {
                reject(error);
              });
          });
    }
    EditarHistorialMascota(Mascota: MascotaEntity): Promise<void> {
        return new Promise((resolve, reject) => {
            this.MascotaImplements
              .update(Mascota._id, Mascota)
              .then(() => {
                resolve();
              })
              .catch((error) => {
                reject(error);
              });
          });
    }
    listadoMascotas(iddoctor: string): Promise<MascotaEntity[]> {
        return new Promise((resolve, reject) => {
            this.MascotaImplements
              .find({
                where: { doctor: iddoctor },
              })
              .then((mascotas) => {
                resolve(mascotas);
              })
              .catch((error) => {
                reject(error);
              });
          });
    }
    findById(id: string): Promise<MascotaEntity> {
      return new Promise((resolve,reject)=>
      {
          this.MascotaImplements.findOne({
              where:{_id : new ObjectID(id)}
          }).then((mascota)=>{
              resolve(mascota)
          }).catch((error)=>{
              reject(error)
          })   
      })
  }
  findByCN(id: number , nombre: string): Promise<MascotaEntity> {
    return new Promise((resolve,reject)=>
    {
        this.MascotaImplements.findOne({
            where:{cedula : id, nombreM : nombre}
        }).then((mascota)=>{
            resolve(mascota)
        }).catch((error)=>{
            reject(error)
        })   
    })
  }
  VerTodasMascotas(): Promise<MascotaEntity[]>{
    return new Promise((resolve,reject)=>{
      let lista =
      this.MascotaImplements.find({})
      resolve(lista)
    })
  }
}