import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewItemPage } from './view-item';

@NgModule({
  declarations: [
    ViewItemPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewItemPage),
  ],
})
export class ViewItemPageModule {}
