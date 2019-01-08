import {
  by,
  element
} from 'protractor';

import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('List view grid', () => {
  it('should match the previous screenshot', (done) => {
    SkyHostBrowser.get('/visual/list-view-grid');
    SkyHostBrowser.setWindowBreakpoint('lg');
    SkyHostBrowser.scrollTo('#screenshot-list-view-grid');
    expect('#screenshot-list-view-grid').toMatchBaselineScreenshot(done, {
      screenshotName: 'list-view-grid-lg'
    });
  });

  it('should match the previous screenshot (screen: xs)', (done) => {
    SkyHostBrowser.get('/visual/list-view-grid');
    SkyHostBrowser.setWindowBreakpoint('xs');
    SkyHostBrowser.scrollTo('#screenshot-list-view-grid');
    expect('#screenshot-list-view-grid').toMatchBaselineScreenshot(done, {
      screenshotName: 'list-view-grid-xs'
    });
  });

  it('should match the previous screenshot with column chooser open', (done) => {
    SkyHostBrowser.get('/visual/list-view-grid');
    SkyHostBrowser.setWindowBreakpoint('lg');
    SkyHostBrowser.scrollTo('#screenshot-list-view-grid');

    element(by.css('[sky-cmp-id="column-chooser"] button')).click();

    expect('#screenshot-list-view-grid').toMatchBaselineScreenshot(done, {
      screenshotName: 'list-view-grid-column-chooser-lg'
    });
  });

  it('should match the previous screenshot with column chooser open (screen: xs)', (done) => {
    SkyHostBrowser.get('/visual/list-view-grid');
    SkyHostBrowser.setWindowBreakpoint('xs');
    SkyHostBrowser.scrollTo('#screenshot-list-view-grid');

    element(by.css('[sky-cmp-id="column-chooser"] button')).click();

    expect('#screenshot-list-view-grid').toMatchBaselineScreenshot(done, {
      screenshotName: 'list-view-grid-column-chooser-xs'
    });
  });

  it('should match the previous screenshot with a highlighted row', (done) => {
    SkyHostBrowser.get('/visual/list-view-grid');
    SkyHostBrowser.setWindowBreakpoint('lg');
    SkyHostBrowser.scrollTo('#screenshot-list-view-grid');

    element(by.css('#highlight-row-button')).click();

    expect('#screenshot-list-view-grid').toMatchBaselineScreenshot(done, {
      screenshotName: 'list-view-grid-highlighted-row-lg'
    });
  });

  it('should match the previous screenshot with a highlighted row (screen: xs)', (done) => {
    SkyHostBrowser.get('/visual/list-view-grid');
    SkyHostBrowser.setWindowBreakpoint('xs');
    SkyHostBrowser.scrollTo('#screenshot-list-view-grid');

    element(by.css('#highlight-row-button')).click();

    expect('#screenshot-list-view-grid').toMatchBaselineScreenshot(done, {
      screenshotName: 'list-view-grid-highlighted-row-xs'
    });
  });
});
