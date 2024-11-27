import { EstadoCivil } from "./edoCivil";
import { Rol } from "./rol";
import { Sexo } from "./sexo";

export class User {

    id: number = 0;
    username!: string;
    password!: string;
    nombre!: string;
    paterno!: string;
    materno!: string;
    estatus?: number;
    foto!: string;
    roles:Rol[]=[];
    sexo:Sexo[]=[];
    estadoCivil:EstadoCivil[]=[];


    
}