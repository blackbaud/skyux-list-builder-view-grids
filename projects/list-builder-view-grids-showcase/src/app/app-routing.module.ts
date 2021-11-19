import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListViewGridTestComponent } from './visual/list-view-grid/list-view-grid-visual.component';
import { VisualComponent } from './visual/visual.component';

const routes: Routes = [
  {
    path: '',
    component: VisualComponent,
  },
  {
    path: 'visual/list-view-grid',
    component: ListViewGridTestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
