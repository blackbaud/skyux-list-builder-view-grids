import {
  NgModule
} from '@angular/core';

import {
  SkyGridModule
} from '@skyux/grids';

import {
  SkyListModule,
  SkyListToolbarModule
} from '@skyux/list-builder';

import {
  ListStateDispatcher,
  ListState
} from '@skyux/list-builder/modules/list/state';

import {
  SkyListViewGridModule
} from './public';

@NgModule({
  imports: [
    SkyGridModule,
    SkyListModule,
    SkyListViewGridModule
  ],
  exports: [
    SkyGridModule,
    SkyListModule,
    SkyListViewGridModule,
    SkyListToolbarModule
  ],
  providers: [
    ListState,
    ListStateDispatcher
  ]
})
export class AppExtrasModule { }
