import { Body, Controller, Delete, Get, Inject, Post, Put, Res } from "@nestjs/common";
import { MascotaEntity } from "src/Dominio/mascota.entity";
import { ServiceVeterinaria } from "src/Dominio/service/serviceveterinaria";
import { Response } from "express";
import { DoctorEntity } from "src/Dominio/doctor.entity";
import { MascotaHistorial } from "./mascotahistorial.vo";

@Controller('veterinaria')

export class VeterinariaController{
    constructor(@Inject('ServiceVeterinaria')
    private readonly serviceVeterinaria: ServiceVeterinaria
    ){}

    @Post('/CrearMascota')
    public async CrearMascota(@Body()mascota: MascotaEntity, @Res() res: Response){
        let mensaje 
        await this.serviceVeterinaria.AgregarMascota(mascota).then((resultado) => {
            mensaje = resultado
          }).catch((error) => {
            mensaje = error
          });
          if(!mensaje){
            res.status(201).send('SE CREO MASCOTA CON EXITO')
          }
        res.status(201).send(mensaje)
    }
    @Post('/CrearDoctor')
    public async CrearDoctor(@Body()doctor: DoctorEntity,@Res() res: Response){
        await this.serviceVeterinaria.AgregarDoctor(doctor)
        res.status(201).send('SE CREO DOCTOR CON EXITO')
    }
    @Get('/VerHistorial')
    public async VerHistorial(@Body()mascotaid: MascotaHistorial,@Res() res: Response){
        let historial = 
        await this.serviceVeterinaria.VerHistorial(mascotaid.id)
        res.status(201).send(historial.historial)
    }
    @Put('/EditarHistorial')
    public async EditarHistorial(@Body()mascota: MascotaHistorial,@Res() res: Response){
        await this.serviceVeterinaria.EditarHistoria(mascota)
        res.status(201).send('SE CAMBIO CON EXITO EL HISTORIAL')
    }
    @Get('/VerHistoriales')
    public async VerHistoriales(@Body()mascotaid: MascotaHistorial,@Res() res: Response){
        let historial: MascotaEntity[]
        let historiales: string
        historial = 
        await this.serviceVeterinaria.VerHistoriales(mascotaid.id)
        for (let i = 0; i < historial.length ; i++) 
            {
                historiales += "\n" +historial[i].nombreM + ":"+ " " +historial[i].historial
            }
        res.status(201).send(historiales)
    }
    @Delete('/ElimminarMascota')
    public async EliminarMascota(@Body()mascotaid: MascotaHistorial,@Res() res: Response){
        let historial = 
        await this.serviceVeterinaria.EliminarMascota(mascotaid.id)
        res.status(201).send("se elimino con exito")
    }
    @Get('/VerListaPD')
    public async VerListaPD(@Res() res: Response){
        let lista1: DoctorEntity[] =
        await this.serviceVeterinaria.verDoctores()
        let lista2: MascotaEntity[] =
        await this.serviceVeterinaria.verMascotas()
        let listas: string
        listas = ""
        for(let i= 0; i < lista1.length; i++){
            listas += "\n"+ lista1[i].nombreD + ":" + "\n" 
            for(let j = 0; j < lista2.length; j++){
                if(lista1[i]._id == lista2[j].doctor){
                    listas += lista2[j].nombreM + "\n" 
                } 
            }   
        }
        res.status(201).send(listas)
    }
}