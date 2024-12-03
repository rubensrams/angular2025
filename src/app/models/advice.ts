import { Tema } from "./tema";
import { User } from "./user";

export class Advice {
    id: number = 0;
    titulo: string= '';
    descripcion: string= '';
    fecha?: Date;
    tema!: Tema;
    usuario!: User;
    
}