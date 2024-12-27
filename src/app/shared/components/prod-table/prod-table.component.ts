import { Component, Input, OnInit } from '@angular/core';
import { Iprod } from '../../modules/prod';

@Component({
  selector: 'app-prod-table',
  templateUrl: './prod-table.component.html',
  styleUrls: ['./prod-table.component.scss']
})
export class ProdTableComponent implements OnInit {
  
  @Input()getProdArray !:Array<Iprod>
  constructor() { }

  ngOnInit(): void {
  }

}
