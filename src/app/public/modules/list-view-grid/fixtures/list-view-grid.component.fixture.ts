import {
  Component,
  ContentChildren,
  OnInit,
  TemplateRef,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';

import {
  BehaviorSubject
} from 'rxjs/BehaviorSubject';

import {
  SkyGridRowDeleteCancelArgs,
  SkyGridRowDeleteConfirmArgs,
  SkyGridSelectedRowsModelChange
} from '@skyux/grids';

import {
  Subject
} from 'rxjs';

import {
  SkyListViewGridComponent
} from '../list-view-grid.component';

import {
  SkyListViewGridMessage
} from '../types/list-view-grid-message';

import {
  SkyListViewGridMessageType
} from '../types/list-view-grid-message-type';

@Component({
  selector: 'sky-test-cmp',
  template: require('./list-view-grid.component.fixture.html')
})
export class ListViewGridTestComponent implements OnInit {
  public hiddenColumns: string[] = ['hiddenCol1', 'hiddenCol2'];
  public asyncHeading = new BehaviorSubject<string>('');
  public asyncDescription = new BehaviorSubject<string>('');
  public gridController = new Subject<SkyListViewGridMessage>();
  public settingsKey: string;

  @ViewChild(SkyListViewGridComponent)
  public grid: SkyListViewGridComponent;

  @ContentChildren(TemplateRef)
  public templates: QueryList<TemplateRef<any>>;

  @ViewChildren(TemplateRef)
  public viewtemplates: QueryList<TemplateRef<any>>;

  public rowHighlightedId: string;

  public enableMultiselect = false;

  public searchFn: (data: any, searchText: string) => boolean;

  public showNgIfCol: boolean = false;

  public ngOnInit() {
    setTimeout(() => {
      this.asyncHeading.next('Column1');
      this.asyncDescription.next('Column1 Description');
    }, 100);
  }

  public multiselectSelectionChange(multiselectSelectionChange: SkyGridSelectedRowsModelChange) {
    console.log(multiselectSelectionChange);
  }

  public cancelRowDelete(cancelArgs: SkyGridRowDeleteCancelArgs): void {
    this.gridController.next({
      type: SkyListViewGridMessageType.AbortDeleteRow,
      data: {
        abortDeleteRow: {
          id: cancelArgs.id
        }
      }
    });
  }

  public deleteItem(id: string): void {
    this.gridController.next({
      type: SkyListViewGridMessageType.PromptDeleteRow,
      data: {
        promptDeleteRow: {
          id: id
        }
      }
    });
  }

  public finishRowDelete(confirmArgs: SkyGridRowDeleteConfirmArgs): void {
    return;
  }
}
