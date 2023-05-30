"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const veterinario_controller_1 = require("../../Api/veterinario.controller");
const doctor_entity_1 = require("../../Dominio/doctor.entity");
const mascota_entity_1 = require("../../Dominio/mascota.entity");
const serviceveterinaria_service_impl_1 = require("../../Dominio/service/serviceveterinaria.service.impl");
const doctor_repository_impl_1 = require("../../infrastructura/doctor.repository.impl");
const mascota_repository_impl_1 = require("../../infrastructura/mascota.repository.impl");
let CommandsModule = class CommandsModule {
};
CommandsModule = __decorate([
    (0, common_1.Module)({ imports: [typeorm_1.TypeOrmModule.forFeature([doctor_entity_1.DoctorEntity]), typeorm_1.TypeOrmModule.forFeature([mascota_entity_1.MascotaEntity])], providers: [{
                provide: 'MascotaRepository',
                useClass: mascota_repository_impl_1.MascotaRepositoryImpl
            }, {
                provide: 'DoctorRepository',
                useClass: doctor_repository_impl_1.DoctorRepositoryImpl
            }, {
                provide: 'ServiceVeterinaria',
                useClass: serviceveterinaria_service_impl_1.ServiceVeterinariaService
            }
        ], controllers: [veterinario_controller_1.VeterinariaController] })
], CommandsModule);
exports.CommandsModule = CommandsModule;
//# sourceMappingURL=commands.module.js.map