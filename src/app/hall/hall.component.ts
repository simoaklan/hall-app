import { Component, OnInit } from '@angular/core';
import { HallService } from '../core/services/hall.service';
@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css']
})
export class HallComponent implements OnInit {

  constructor( private _hallService: HallService ) { }

  ngOnInit() {
  }

}
