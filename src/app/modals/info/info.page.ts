import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  version: string = '';

  constructor(private modalCtrl: ModalController) { }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
    this.getSystemInfo();
  }

  getSystemInfo() {
    this.version = 'V00-R00-202503201250br';
  }
}