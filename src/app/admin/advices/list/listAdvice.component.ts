import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AdvicesService } from '../../../services/advices.service';
import { AuthService } from '../../../services/auth.service';
import { Advice } from '../../../models/advice';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { ListAdvicesComponent } from '../../../shared/advices/list-advices/list-advices.component';
import { Tema } from '../../../models/tema';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ListAdvicesComponent],
  templateUrl: './listAdvice.component.html'
})
export class ListAdviceComponent implements OnInit{
  
  advices: Advice[] = [];
  currentPage: number= 1;
  itemsPerPage: number= 8;
  totalRegs: number= 0;

  constructor(private advicesServices:AdvicesService) {

  }

  ngOnInit(): void {
    if (this.advices == undefined || this.advices == null || this.advices.length == 0) {   

      this.advicesServices.findAll().subscribe(response =>{        
        console.log(response);  
        this.advices = response as Advice[];
        this.totalRegs= this.advices.length;
        console.log(this.totalRegs);  
      } 
      );
    }

   }
 

}
