import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  SkyWaitModule
} from '@skyux/indicators/modules/wait/wait.module';

import {
  SkyGridModule
} from '@skyux/grids/modules/grid/grid.module';

import {
  SkyListViewGridResourcesModule
} from '../shared/list-view-grid-resources.module';

import {
  SkyListColumnSelectorActionModule
} from '../list-column-selector-action';

import {
  SkyColumnSelectorModule
} from '../column-selector';

import {
  SkyListViewGridComponent
} from './list-view-grid.component';

@NgModule({
  declarations: [
    SkyListViewGridComponent
  ],
  imports: [
    CommonModule,
    SkyWaitModule,
    SkyGridModule,
    SkyListViewGridResourcesModule
  ],
  exports: [
    SkyListViewGridComponent,
    SkyColumnSelectorModule,
    SkyListColumnSelectorActionModule
  ]
})
export class SkyListViewGridModule { }
