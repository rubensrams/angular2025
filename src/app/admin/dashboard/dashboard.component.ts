import { Component, OnInit, ViewChild } from '@angular/core';
import { Advice } from '../../models/advice';
import { AdvicesService } from '../../services/advices.service';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RouterModule } from '@angular/router';
import { ListAdvicesComponent } from '../../shared/advices/list-advices/list-advices.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SpinnerComponent, NgxPaginationModule, FormsModule, RouterModule, ListAdvicesComponent],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  filter!: string;
  advices: Advice[] = [];
  @ViewChild(SpinnerComponent) spinner!: SpinnerComponent;
  currentPage: number= 1;
  itemsPerPage: number= 8;
  totalRegs: number= 0;
  constructor( 
    private advicesServices:AdvicesService ,
    private authService: AuthService
  ){

  }

  ngAfterViewInit() {
    console.log("Preguntando en dashboard..."+ this.spinner);
    if (this.spinner) {
      console.log("ok en dashboard "+ this.spinner);
    }
  } 

  ngOnInit(): void {
    if (this.advices == undefined || this.advices == null || this.advices.length == 0) {     
      this.advicesServices.findAll().subscribe(advices => this.advices = advices  as Advice[]);
    }
    this.totalRegs= this.advices.length;
   }
  
   load():void{
    this.spinner.startLoading();

   }
   

}
