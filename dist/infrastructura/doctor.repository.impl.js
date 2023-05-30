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
exports.DoctorRepositoryImpl = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const doctor_entity_1 = require("../Dominio/doctor.entity");
const typeorm_2 = require("typeorm");
const mongodb_1 = require("mongodb");
let DoctorRepositoryImpl = class DoctorRepositoryImpl {
    constructor(DoctorImplements) {
        this.DoctorImplements = DoctorImplements;
    }
    CrearDoctor(Doctor) {
        return new Promise((resolve, reject) => {
            let NuevoProducto = this.DoctorImplements.create(Doctor);
            this.DoctorImplements.save(NuevoProducto).then(() => {
                resolve();
            }).catch((error) => {
                reject(error);
            });
        });
    }
    findById(id) {
        return new Promise((resolve, reject) => {
            this.DoctorImplements.findOne({
                where: { _id: new mongodb_1.ObjectID(id) }
            }).then((doctor) => {
                resolve(doctor);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    EditarHistorialMascota(Doctor) {
        let doctor;
        doctor = Doctor._id.toString();
        return new Promise((resolve, reject) => {
            this.findById(doctor).then((doctor) => {
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
        });
    }
    VerTodosDoctore() {
        return new Promise((resolve, reject) => {
            let lista = this.DoctorImplements.find({});
            resolve(lista);
        });
    }
};
DoctorRepositoryImpl = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(doctor_entity_1.DoctorEntity)),
    __metadata("design:paramtypes", [typeorm_2.MongoRepository])
], DoctorRepositoryImpl);
exports.DoctorRepositoryImpl = DoctorRepositoryImpl;
//# sourceMappingURL=doctor.repository.impl.js.map