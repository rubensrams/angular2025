import { Component, Input,  OnInit } from '@angular/core';
import { Advice } from '../../../models/advice';
import { AdvicesService } from '../../../services/advices.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sel-child-list-advices',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule],
  templateUrl: './list-advices.component.html'
})
export class ListAdvicesComponent{

  @Input() advices: Advice[] = [];
  @Input() currentPage: number= 1;
  @Input() itemsPerPage: number= 8;
  @Input() totalRegs: number= 0;

 

}
