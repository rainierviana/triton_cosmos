import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalsPageRoutingModule } from './modals-routing.module';

import { ModalsPage } from './modals.page';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalsPageRoutingModule,
    TranslateModule
  ],
  declarations: [ModalsPage]
})
export class ModalsPageModule { }
