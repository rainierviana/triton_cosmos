import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InfoPageRoutingModule } from './info-routing.module';
import { InfoPage } from './info.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    InfoPageRoutingModule,
    TranslateModule,
  ],
  declarations: [InfoPage],
})
export class InfoPageModule {}
