import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgxSpinnerModule } from 'ngx-spinner';


@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [NgxSpinnerModule],
  templateUrl: './spinner.component.html'
})
export class SpinnerComponent {

constructor(
   private spinner: NgxSpinnerService
){
  console.log("Iniciando spinner");
}


startLoading():void{
  this.spinner.show();
}

stopLoading():void{
  this.spinner.hide();
}

}
