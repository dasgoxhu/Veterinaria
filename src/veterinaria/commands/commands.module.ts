import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VeterinariaController } from 'src/Api/veterinario.controller';
import { DoctorEntity } from 'src/Dominio/doctor.entity';
import { MascotaEntity } from 'src/Dominio/mascota.entity';
import { ServiceVeterinariaService } from 'src/Dominio/service/serviceveterinaria.service.impl';
import { DoctorRepositoryImpl } from 'src/infrastructura/doctor.repository.impl';
import { MascotaRepositoryImpl } from 'src/infrastructura/mascota.repository.impl';

@Module({imports: [TypeOrmModule.forFeature([DoctorEntity]),TypeOrmModule.forFeature([MascotaEntity])],providers:[{
    provide: 'MascotaRepository',
    useClass: MascotaRepositoryImpl
},{
    provide: 'DoctorRepository',
    useClass: DoctorRepositoryImpl
},{
    provide: 'ServiceVeterinaria',
    useClass: ServiceVeterinariaService
}
],controllers:[VeterinariaController]})
export class CommandsModule {}
