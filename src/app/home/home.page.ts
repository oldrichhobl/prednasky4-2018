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

    
}
