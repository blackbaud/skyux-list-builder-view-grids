import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';

// TODO: is this right?
import {
  SkyResourcesModule
} from '@blackbaud/skyux/dist/modules/resources/resources.module';

import {
  SkyIconModule
} from '@skyux/indicators';

import {
  SkyListToolbarModule,
  SkyListSecondaryActionsModule
} from '@skyux/list-builder';

import {
  SkyListColumnSelectorActionComponent
} from './list-column-selector-action.component';

import {
  SkyModalModule
} from '@skyux/modals';

@NgModule({
  declarations: [
    SkyListColumnSelectorActionComponent
  ],
  imports: [
    CommonModule,
    SkyResourcesModule,
    SkyModalModule,
    SkyListSecondaryActionsModule,
    SkyListToolbarModule,
    SkyIconModule
  ],
  exports: [
    SkyListColumnSelectorActionComponent
  ]
})
export class SkyListColumnSelectorActionModule {
}
