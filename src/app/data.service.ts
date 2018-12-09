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

   public rec : any;
   public recxml : any;


 constructor(public http: HttpClient) {
    console.log('Hello Data Provider');
  }

  getMenus(){
  	console.log('Data Provider - getMenus');
    if (typeof (window as any).DOMParser != "undefined") {
         console.log(" OK DOMParser neni undefined !!!!!");
         }    
    //console.dir(this.http.get('assets/data/listlectures.json'));

    this.http.get('assets/data/listlectures.xml', {responseType: 'text'}).subscribe(
       x => {console.log('Observer got a next value: ');
            // console.dir(x)
            // domparser
            let Parser = new (window as any).DOMParser();
            this.recxml = Parser.parseFromString(x, "text/xml");
            console.dir(this.recxml);
            },
       err => console.error('Observer got an error: ' + err),
       () => console.log('Observer got a complete notification')
    ); 

   // return this.http.get('assets/data/listlectures.json');
  }
  
  convertMenu()
   {
      return new Promise(resolve =>
      {
          var 
             parser = new xml2js.Parser(
             {
                trim: true,
                explicitArray: true
             });

         parser.parseString(data, function (err, result) 
         {
          console.log("parse result = ");
          console.dir(result);
          
          var obj = result.LECTURES.RECS[0];
          console.log("OBJ = ");
          console.dir(obj);
          resolve(obj);
         });
      });
  }

}
