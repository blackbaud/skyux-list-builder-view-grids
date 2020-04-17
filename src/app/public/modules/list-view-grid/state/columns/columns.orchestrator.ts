import { GridStateOrchestrator } from '../grid-state.rxstate';

import {
  AsyncList
} from '@skyux/list-builder-common';

import { SkyGridColumnModel } from '@skyux/grids';

import {
  ListViewGridColumnsLoadAction
} from './load.action';

import * as moment_ from 'moment';
const moment = moment_;

export class ListViewGridColumnsOrchestrator
  extends GridStateOrchestrator<AsyncList<SkyGridColumnModel>> {
  /* istanbul ignore next */
  constructor() {
    super();

    this
      .register(ListViewGridColumnsLoadAction, this.load);
  }

  private load(
    state: AsyncList<SkyGridColumnModel>,
    action: ListViewGridColumnsLoadAction): AsyncList<SkyGridColumnModel> {
    const newColumns = action.columns.map(g => new SkyGridColumnModel(g.template, g));

    if (action.refresh) {
      return new AsyncList<SkyGridColumnModel>([...newColumns], moment());
    }

    return new AsyncList<SkyGridColumnModel>([...state.items, ...newColumns], moment());
  }
}
