import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorEntity } from './Dominio/doctor.entity';
import { MascotaEntity } from './Dominio/mascota.entity';
import { CommandsModule } from './veterinaria/commands/commands.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type : "mongodb",
    host: "127.0.0.1",
    port: 27017,
    database: "Veterinaria",
    entities: [DoctorEntity,MascotaEntity],    
    synchronize: true
  }), CommandsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
