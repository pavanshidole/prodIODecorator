import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Iprod } from '../../modules/prod';

@Component({
  selector: 'app-pord-form',
  templateUrl: './pord-form.component.html',
  styleUrls: ['./pord-form.component.scss']
})
export class PordFormComponent implements OnInit {

  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, 
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

  @ViewChild('pName') pName !:ElementRef;
  @ViewChild('pdescription') pdescription !:ElementRef;
  @ViewChild('pCatg') pCatg !:ElementRef;

  @Output() sendProdParent:EventEmitter<Iprod>=new EventEmitter<Iprod>()
  

  constructor() { }

  ngOnInit(): void {
  }

  prodAdd(){

    if(this.validInput()){
      let newProd:Iprod={
        pName:this.pName.nativeElement.value,
        pdescription:this.pdescription.nativeElement.value,
        pCatg:this.pCatg.nativeElement.value,
        PId:this.uuid(),
      }
      
      this.pName.nativeElement.value='';
      this.pdescription.nativeElement.value='';
      this.pCatg.nativeElement.value='';
      this.sendProdParent.emit(newProd);
  

    }
  }

  validInput():boolean{
    return this.pName.nativeElement.value.trim() !=='' &&
           this.pdescription.nativeElement.value.trim() !=='' &&
           this.pCatg.nativeElement.value.trim() !==''
  }

}
