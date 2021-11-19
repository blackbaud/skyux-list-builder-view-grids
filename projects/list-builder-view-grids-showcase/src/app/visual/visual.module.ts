import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualComponent } from './visual.component';
import { SkyAlertModule } from '@skyux/indicators';
import { SkyAppLinkModule } from '@skyux/router';
import { SkyDropdownModule } from '@skyux/popovers';
import { SkyListModule, SkyListToolbarModule } from '@skyux/list-builder';
import { SkyListViewGridModule } from 'projects/list-builder-view-grids/src/public-api';
import { ListViewGridTestComponent } from './list-view-grid/list-view-grid-visual.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [VisualComponent, ListViewGridTestComponent],
  imports: [
    CommonModule,
    RouterModule,
    SkyAlertModule,
    SkyAppLinkModule,
    SkyDropdownModule,
    SkyListModule,
    SkyListViewGridModule,
    SkyListToolbarModule,
  ],
})
export class VisualModule {}
