import {
  NgModule
} from '@angular/core';
import {
  SkyListViewGridModule
} from './public/modules/list-view-grid/list-view-grid.module';

@NgModule({
  imports: [
    SkyListViewGridModule
  ],
  exports: [
    SkyListViewGridModule
  ],
  providers: [],
  entryComponents: []
})
export class AppExtrasModule { }
