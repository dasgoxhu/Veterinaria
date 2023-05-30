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
exports.VeterinariaController = void 0;
const common_1 = require("@nestjs/common");
const mascota_entity_1 = require("../Dominio/mascota.entity");
const doctor_entity_1 = require("../Dominio/doctor.entity");
const mascotahistorial_vo_1 = require("./mascotahistorial.vo");
let VeterinariaController = class VeterinariaController {
    constructor(serviceVeterinaria) {
        this.serviceVeterinaria = serviceVeterinaria;
    }
    async CrearMascota(mascota, res) {
        let mensaje;
        await this.serviceVeterinaria.AgregarMascota(mascota).then((resultado) => {
            mensaje = resultado;
        }).catch((error) => {
            mensaje = error;
        });
        if (!mensaje) {
            res.status(201).send('SE CREO MASCOTA CON EXITO');
        }
        res.status(201).send(mensaje);
    }
    async CrearDoctor(doctor, res) {
        await this.serviceVeterinaria.AgregarDoctor(doctor);
        res.status(201).send('SE CREO DOCTOR CON EXITO');
    }
    async VerHistorial(mascotaid, res) {
        let historial = await this.serviceVeterinaria.VerHistorial(mascotaid.id);
        res.status(201).send(historial.historial);
    }
    async EditarHistorial(mascota, res) {
        await this.serviceVeterinaria.EditarHistoria(mascota);
        res.status(201).send('SE CAMBIO CON EXITO EL HISTORIAL');
    }
    async VerHistoriales(mascotaid, res) {
        let historial;
        let historiales;
        historial =
            await this.serviceVeterinaria.VerHistoriales(mascotaid.id);
        for (let i = 0; i < historial.length; i++) {
            historiales += "\n" + historial[i].nombreM + ":" + " " + historial[i].historial;
        }
        res.status(201).send(historiales);
    }
    async EliminarMascota(mascotaid, res) {
        let historial = await this.serviceVeterinaria.EliminarMascota(mascotaid.id);
        res.status(201).send("se elimino con exito");
    }
    async VerListaPD(res) {
        let lista1 = await this.serviceVeterinaria.verDoctores();
        let lista2 = await this.serviceVeterinaria.verMascotas();
        let listas;
        listas = "";
        for (let i = 0; i < lista1.length; i++) {
            listas += "\n" + lista1[i].nombreD + ":" + "\n";
            for (let j = 0; j < lista2.length; j++) {
                if (lista1[i]._id == lista2[j].doctor) {
                    listas += lista2[j].nombreM + "\n";
                }
            }
        }
        res.status(201).send(listas);
    }
};
__decorate([
    (0, common_1.Post)('/CrearMascota'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mascota_entity_1.MascotaEntity, Object]),
    __metadata("design:returntype", Promise)
], VeterinariaController.prototype, "CrearMascota", null);
__decorate([
    (0, common_1.Post)('/CrearDoctor'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [doctor_entity_1.DoctorEntity, Object]),
    __metadata("design:returntype", Promise)
], VeterinariaController.prototype, "CrearDoctor", null);
__decorate([
    (0, common_1.Get)('/VerHistorial'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mascotahistorial_vo_1.MascotaHistorial, Object]),
    __metadata("design:returntype", Promise)
], VeterinariaController.prototype, "VerHistorial", null);
__decorate([
    (0, common_1.Put)('/EditarHistorial'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mascotahistorial_vo_1.MascotaHistorial, Object]),
    __metadata("design:returntype", Promise)
], VeterinariaController.prototype, "EditarHistorial", null);
__decorate([
    (0, common_1.Get)('/VerHistoriales'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mascotahistorial_vo_1.MascotaHistorial, Object]),
    __metadata("design:returntype", Promise)
], VeterinariaController.prototype, "VerHistoriales", null);
__decorate([
    (0, common_1.Delete)('/ElimminarMascota'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mascotahistorial_vo_1.MascotaHistorial, Object]),
    __metadata("design:returntype", Promise)
], VeterinariaController.prototype, "EliminarMascota", null);
__decorate([
    (0, common_1.Get)('/VerListaPD'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VeterinariaController.prototype, "VerListaPD", null);
VeterinariaController = __decorate([
    (0, common_1.Controller)('veterinaria'),
    __param(0, (0, common_1.Inject)('ServiceVeterinaria')),
    __metadata("design:paramtypes", [Object])
], VeterinariaController);
exports.VeterinariaController = VeterinariaController;
//# sourceMappingURL=veterinario.controller.js.map