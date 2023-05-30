"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MascotaRepositoryImpl = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const mascota_entity_1 = require("../Dominio/mascota.entity");
const typeorm_2 = require("typeorm");
const mongodb_1 = require("mongodb");
let MascotaRepositoryImpl = class MascotaRepositoryImpl {
    constructor(MascotaImplements) {
        this.MascotaImplements = MascotaImplements;
    }
    AgregarMascotas(Mascota) {
        return new Promise((resolve, reject) => {
            let NuevoMascota = this.MascotaImplements.create(Mascota);
            this.MascotaImplements.save(NuevoMascota).then(() => {
                resolve();
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
    EliminarMascotas(Mascota) {
        return new Promise((resolve, reject) => {
            this.MascotaImplements.deleteOne(Mascota).then(() => {
                resolve();
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
    VerHistorialMascota(Mascota) {
        return new Promise((resolve, reject) => {
            this.MascotaImplements.findOne({
                where: { _id: new mongodb_1.ObjectID(Mascota) },
            })
                .then((mascota) => {
                if (mascota) {
                    resolve(mascota);
                }
                else {
                    reject("Mascota no encontrada");
                }
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
    EditarHistorialMascota(Mascota) {
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
    listadoMascotas(iddoctor) {
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
    findById(id) {
        return new Promise((resolve, reject) => {
            this.MascotaImplements.findOne({
                where: { _id: new mongodb_1.ObjectID(id) }
            }).then((mascota) => {
                resolve(mascota);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    findByCN(id, nombre) {
        return new Promise((resolve, reject) => {
            this.MascotaImplements.findOne({
                where: { cedula: id, nombreM: nombre }
            }).then((mascota) => {
                resolve(mascota);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    VerTodasMascotas() {
        return new Promise((resolve, reject) => {
            let lista = this.MascotaImplements.find({});
            resolve(lista);
        });
    }
};
MascotaRepositoryImpl = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(mascota_entity_1.MascotaEntity)),
    __metadata("design:paramtypes", [typeorm_2.MongoRepository])
], MascotaRepositoryImpl);
exports.MascotaRepositoryImpl = MascotaRepositoryImpl;
//# sourceMappingURL=mascota.repository.impl.js.map