import { Component, OnInit } from '@angular/core';
import {FetchDataService} from '../Services/fetch-data.service';

@Component({
  selector: 'app-control-buttons',
  templateUrl: './control-buttons.component.html',
  styleUrls: ['./control-buttons.component.css']
})
export class ControlButtonsComponent implements OnInit {

  constructor(fetchDataSvc : FetchDataService) {
    fetchDataSvc.refreshList$.subscribe(result => this.showElements(result));
   }

showListFlag = false;
showAddEditFlag = false;

  ngOnInit() {
  }

  showList(){
   this.showListFlag = true;
  }

  showAddEditDialog(){
     this.showAddEditFlag = true;
     this.showListFlag = false;
  }

 showElements(result : boolean){
     this.showAddEditFlag = false;
     this.showListFlag = true;
  }
}
