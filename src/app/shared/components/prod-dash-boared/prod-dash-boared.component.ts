import { Component, OnInit } from '@angular/core';
import { Iprod } from '../../modules/prod';

@Component({
  selector: 'app-prod-dash-boared',
  templateUrl: './prod-dash-boared.component.html',
  styleUrls: ['./prod-dash-boared.component.scss']
})
export class ProdDashBoaredComponent implements OnInit {

  prodArray: Array<Iprod>=[
    {
      pName:"samsung",
      pdescription:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eius!',
      pCatg:'product',
      PId:'123'
    },
    {
      pName:"iPhone 16",
      pdescription:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eius!',
      pCatg:'catlog',
      PId:'124'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  sendObj(prod:Iprod){
    this.prodArray.unshift(prod);
  }

}
