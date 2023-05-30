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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MascotaEntity = void 0;
const typeorm_1 = require("typeorm");
let MascotaEntity = class MascotaEntity {
};
__decorate([
    (0, typeorm_1.ObjectIdColumn)(),
    __metadata("design:type", Object)
], MascotaEntity.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MascotaEntity.prototype, "nombreM", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MascotaEntity.prototype, "doctor", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], MascotaEntity.prototype, "cedula", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], MascotaEntity.prototype, "edad", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MascotaEntity.prototype, "especie", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MascotaEntity.prototype, "raza", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MascotaEntity.prototype, "caracteristicas", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], MascotaEntity.prototype, "peso", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MascotaEntity.prototype, "historial", void 0);
MascotaEntity = __decorate([
    (0, typeorm_1.Entity)('MascotaEntity')
], MascotaEntity);
exports.MascotaEntity = MascotaEntity;
//# sourceMappingURL=mascota.entity.js.map