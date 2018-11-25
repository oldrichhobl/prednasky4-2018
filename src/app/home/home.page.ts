import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { DataProvider } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

   constructor(public toastController: ToastController,
   	           public dataProvider: DataProvider) {
   	console.log("CONtructor HOMEpage");
    window.addEventListener('ionToastDidDismiss', function (e) { console.log('Home: didDismiss:', e) })
    window.addEventListener('ionToastWillDismiss', function (e) { console.log('Home: willDismiss:', e) })
   }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: 'Click to Close',
      showCloseButton: true,
      position: 'middle',
      closeButtonText: 'Zavrit'
    });
    toast.present();
  }

  nactiXml(){
    console.log("HOMEpage  nactiXml");
    this.dataProvider.getMenus();
  }

  ukazXml(){
    console.log("HOMEpage  ukazXml");
    console.dir(this.dataProvider.recxml);
    this.selectNode("//REC/nazev")
  }

   selectNode(ss)
  {
    console.log("selectNode : " + ss);
    // var nod = this.myData.XMLdata.selectElements("//RECS/R");
    let nod = this.dataProvider.recxml.evaluate(ss, this.dataProvider.recxml, null, XPathResult.ANY_TYPE,null); 
    console.log("ResultType = " + nod.resultType);
    
    //this.items = [];
    let i = 0;
    let actualSpan = nod.iterateNext ();
    while (actualSpan) {
     /*
      this.items.push({
        note: actualSpan.attributes['w'].value,
        sound:actualSpan.attributes['s'].value,
        title: actualSpan.innerHTML,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      }
      );
      */  
      i++;
      // console.log("den " + i + "  " + actualSpan.attributes['d'].value);
      console.log("nazev " + actualSpan.innerHTML);
      actualSpan = nod.iterateNext ()
    }

  }



}
