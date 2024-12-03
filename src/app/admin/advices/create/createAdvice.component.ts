import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { RouterModule } from '@angular/router';
import { Advice } from '../../../models/advice';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdvicesService } from '../../../services/advices.service';
import { Tema } from '../../../models/tema';

@Component({
  selector: 'sel-create-advice',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, ReactiveFormsModule ],
  templateUrl: './createAdvice.component.html'
})

export class CreateAdviceComponent  implements OnInit{
  forma!: FormGroup;
  advice!:Advice;
  thems: Tema[] = [];
  loadigTemas:boolean=false;

  constructor(private adviceService: AdvicesService,
    private fb: FormBuilder
  ){

  }


  ngOnInit(): void {
    this.getTemas();
    this.crearFormulario();

  }

  crearFormulario() {
    this.forma = this.fb.group({
    titulo: ['', Validators.required],
    descripcion: ['', Validators.required],
    temas: ['0', Validators.required]
    }
  )
};

get tituloNoValido() {
  let res= this.forma.get('titulo')!.invalid  && this.forma.get('titulo')!.touched;
  return res;
}

get descNoValido() {
  return this.forma.get('descripcion')!.invalid && this.forma.get('descripcion')!.touched;
}

get themeValido():boolean {
  return this.forma.get('temas')!.touched && this.forma.value.temas==='0';
}

getTemas(): void {
  this.loadigTemas= true; 
    this.adviceService.getThems().subscribe(response =>{          
      this.thems = response as Tema[];
      console.log(response);
      console.log(this.thems.length);
      this.loadigTemas= false; 
      }
    ); 

    
}


guardar(){  
  alert('hola');
}

}
