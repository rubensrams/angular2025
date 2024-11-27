import { Component, OnInit } from '@angular/core';
import { Advice } from '../../models/advice';
import { AdvicesService } from '../../services/advices.service';
import { CommonModule } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgxSpinnerModule } from 'ngx-spinner';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgxSpinnerModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  advices: Advice[] = [];


  constructor( 
    private advicesServices:AdvicesService ,
    private spinner: NgxSpinnerService
  ){

  }

  ngOnInit(): void {

    if (this.advices == undefined || this.advices == null || this.advices.length == 0) {     
      this.advicesServices.findAll().subscribe(advices => this.advices = advices  as Advice[]);

    }
   }
  

   carga():void{

    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 2000);

   }

}
