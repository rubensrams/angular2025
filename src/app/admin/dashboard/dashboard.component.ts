import { Component, OnInit, ViewChild } from '@angular/core';
import { Advice } from '../../models/advice';
import { AdvicesService } from '../../services/advices.service';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';




@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SpinnerComponent],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  advices: Advice[] = [];
  @ViewChild(SpinnerComponent) spinner!: SpinnerComponent;

  constructor( 
    private advicesServices:AdvicesService 
  ){

  }

  ngOnInit(): void {

    if (this.advices == undefined || this.advices == null || this.advices.length == 0) {     
      this.advicesServices.findAll().subscribe(advices => this.advices = advices  as Advice[]);

    }
   }
  
   load():void{
    this.spinner.startLoading();

   }


}
