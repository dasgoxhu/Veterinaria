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
exports.ServiceVeterinariaService = void 0;
const common_1 = require("@nestjs/common");
let ServiceVeterinariaService = class ServiceVeterinariaService {
    constructor(mascotaRepository, doctorRepository) {
        this.mascotaRepository = mascotaRepository;
        this.doctorRepository = doctorRepository;
    }
    async verDoctores() {
        let doctores;
        doctores = await this.doctorRepository.VerTodosDoctore();
        return doctores;
    }
    async verMascotas() {
        let mascotas;
        mascotas = await this.mascotaRepository.VerTodasMascotas();
        return mascotas;
    }
    async AgregarMascota(mascota) {
        let posiblemascota;
        posiblemascota = await this.mascotaRepository.findByCN(mascota.cedula, mascota.nombreM);
        let doctor;
        doctor = await this.doctorRepository.findById(mascota.doctor);
        return new Promise(async (resolve, reject) => {
            if (!doctor) {
                reject('El doctor no existe');
            }
            if (posiblemascota) {
                reject('la mascota ya esta en la base de datos');
                return null;
            }
            let registro = "";
            switch (mascota.especie) {
                case 'perros':
                    if (mascota.peso < 4) {
                        reject('No se puede tener perros menores a 4kg');
                        break;
                    }
                    else if (mascota.peso > 30) {
                        registro = ' sobrepeso ';
                    }
                    else if (mascota.peso < 15) {
                        registro = ' desnutrición ';
                    }
                    mascota.historial += registro;
                    await this.mascotaRepository.AgregarMascotas(mascota);
                    break;
                case 'gatos':
                    if (mascota.peso < 3) {
                        reject('No se puede tener gatos menores a 3kg');
                        break;
                    }
                    else if (mascota.peso > 12) {
                        registro = ' sobrepeso ';
                    }
                    else if (mascota.peso < 6) {
                        registro = ' desnutrición ';
                    }
                    mascota.historial += registro;
                    await this.mascotaRepository.AgregarMascotas(mascota);
                    break;
                case 'aves':
                    if (mascota.peso < 2) {
                        reject('No se puede tener aves menores a 2kg');
                        break;
                    }
                    else if (mascota.peso > 10) {
                        registro = ' sobrepeso ';
                    }
                    else if (mascota.peso < 4) {
                        registro = ' desnutrición ';
                    }
                    mascota.historial += registro;
                    await this.mascotaRepository.AgregarMascotas(mascota);
                    break;
                default:
                    reject("No es una especie de mascota válida");
                    break;
            }
            resolve();
        });
    }
    AgregarDoctor(doctor) {
        return new Promise((resolve, reject) => {
            this.doctorRepository.CrearDoctor(doctor);
            resolve();
        });
    }
    VerHistorial(mascotaid) {
        let mascota = this.mascotaRepository.VerHistorialMascota(mascotaid);
        return mascota;
    }
    async EditarHistoria(mascota) {
        let mascotah;
        mascotah = await this.mascotaRepository.findById(mascota.id);
        return new Promise((resolve, reject) => {
            mascotah.historial = mascota.historial;
            this.mascotaRepository.EditarHistorialMascota(mascotah);
            resolve();
        });
    }
    async VerHistoriales(doctor) {
        let mascota = await this.mascotaRepository.listadoMascotas(doctor);
        return mascota;
    }
    async EliminarMascota(mascotaid) {
        let mascotah;
        mascotah = await this.mascotaRepository.findById(mascotaid);
        return new Promise((resolve, reject) => {
            this.mascotaRepository.EliminarMascotas(mascotah);
            resolve();
        });
    }
};
ServiceVeterinariaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('MascotaRepository')),
    __param(1, (0, common_1.Inject)('DoctorRepository')),
    __metadata("design:paramtypes", [Object, Object])
], ServiceVeterinariaService);
exports.ServiceVeterinariaService = ServiceVeterinariaService;
//# sourceMappingURL=serviceveterinaria.service.impl.js.map