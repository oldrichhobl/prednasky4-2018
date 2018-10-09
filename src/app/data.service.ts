// import { Http, Response } from "@angular/http";
import { Injectable } from '@angular/core';
import { map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable({
  providedIn: 'root'
})

export class DataProvider {

 constructor(public http: HttpClient) {
    console.log('Hello Data Provider');
  }

  getMenus(){
  	console.log('Data Provider - getMenus');
   // console.dir(this.http.get('assets/data/listlectures.json'));
   // return this.http.get('assets/data/listlectures.json').pipe(map((response:Response)=>response.json()));
   // return this.http.get('assets/data/listlectures.json');
   this.http.get('assets/data/listlectures.json').pipe(
    //this.http.get('http://www.dramatik.cz').pipe(
      map((data) => {
      console.log(data);
  }))
    
  /* this.http.get('http://ionic.io')
  .then(data => {

    console.log(data.status);
    console.log(data.data); // data received by server
    console.log(data.headers);

  })
  .catch(error => {

    console.log(error.status);
    console.log(error.error); // error message as string
    console.log(error.headers);

  });
  */
  }

}
