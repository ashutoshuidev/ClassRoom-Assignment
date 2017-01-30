import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import  {Observable,Subject} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FetchDataService {

  // http://stackoverflow.com/questions/40325856/what-is-rxjs-subject-in-angular2
  // pass data among components using a service.
  private refreshListFlag = new Subject<boolean>();
  refreshList$ = this.refreshListFlag.asObservable();

  constructor(public httpSvc : Http) { }

  getListOfProducts() : Observable<any> {
    return this.httpSvc.get("http://localhost:4000/api/products")
  .map((response)=>response.json())
  .catch((error) => Observable.throw(error.json()));
  }

 modifyListOfProducts(data) : Observable <any>{
  return this.httpSvc.post("http://localhost:4000/api/products/create",data)
  .map((response)=>response.json())
  .catch((error) => Observable.throw(error.json()));
}

    refreshList(flag : boolean){
       this.refreshListFlag.next(flag);
    }
  
}
