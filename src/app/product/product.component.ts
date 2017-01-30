import { Component, OnInit,Input } from '@angular/core';
import {FetchDataService} from '../Services/fetch-data.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  jsonProductList : any;
  showEditFlag = false;

  item :any;

  fetchDataSvc : FetchDataService;

  
 // component is already loaded but line 18 will be executed based on the server response.
  constructor(fetchDataSvc : FetchDataService) {
    this.fetchDataSvc  = fetchDataSvc;
    this.getDataFromServer(fetchDataSvc);
    this.fetchDataSvc.refreshList$.subscribe(result => this.refreshListonAdd(result));
    
   }

  ngOnInit() {
  }

  showEditDialog(item){
     this.showEditFlag = true;
     this.item = item;
     console.log(item);
  }

  getDataFromServer(fetchDataSvc : FetchDataService){
    fetchDataSvc.getListOfProducts().subscribe((result) => {console.log(this.jsonProductList = result)},
    error => {
      console.log(error);
    });
  } 

  getOption(evt){
     console.log("test");
     this.refreshListonAdd(true);
  }

  refreshListonAdd(flagValue : boolean){
    if (flagValue == true){
      this.getDataFromServer(this.fetchDataSvc);
    }
    
  }

}
