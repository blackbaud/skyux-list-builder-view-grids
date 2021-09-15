import {
  by,
  element
} from 'protractor';

import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('List view grid', () => {

  beforeEach(async () => {
    await SkyHostBrowser.get('visual/list-view-grid');
    await SkyHostBrowser.setWindowBreakpoint('lg');
  });

  it('should match the previous screenshot', async (done) => {
    await SkyHostBrowser.scrollTo('#screenshot-list-view-grid');
    expect('#screenshot-list-view-grid').toMatchBaselineScreenshot(done, {
      screenshotName: 'list-view-grid-lg'
    });
  });

  it('should match the previous screenshot (screen: xs)', async (done) => {
    await SkyHostBrowser.setWindowBreakpoint('xs');
    await SkyHostBrowser.scrollTo('#screenshot-list-view-grid');
    expect('#screenshot-list-view-grid').toMatchBaselineScreenshot(done, {
      screenshotName: 'list-view-grid-xs'
    });
  });

  it('should match the previous screenshot with column chooser open', async (done) => {
    await SkyHostBrowser.scrollTo('#screenshot-list-view-grid');

    await element(by.css('[sky-cmp-id="column-chooser"] button')).click();

    expect('#screenshot-list-view-grid').toMatchBaselineScreenshot(done, {
      screenshotName: 'list-view-grid-column-chooser-lg'
    });
  });

  it('should match the previous screenshot with column chooser open (screen: xs)', async (done) => {
    await SkyHostBrowser.setWindowBreakpoint('xs');
    await SkyHostBrowser.scrollTo('#screenshot-list-view-grid');

    await element(by.css('[sky-cmp-id="column-chooser"] button')).click();

    expect('#screenshot-list-view-grid').toMatchBaselineScreenshot(done, {
      screenshotName: 'list-view-grid-column-chooser-xs'
    });
  });

  it('should match the previous screenshot with a highlighted row', async (done) => {
    await SkyHostBrowser.scrollTo('#screenshot-list-view-grid');

    await element(by.css('#highlight-row-button')).click();

    expect('#screenshot-list-view-grid').toMatchBaselineScreenshot(done, {
      screenshotName: 'list-view-grid-highlighted-row-lg'
    });
  });

  it('should match the previous screenshot with a highlighted row (screen: xs)', async (done) => {
    await SkyHostBrowser.setWindowBreakpoint('xs');
    await SkyHostBrowser.scrollTo('#screenshot-list-view-grid');

    await element(by.css('#highlight-row-button')).click();

    expect('#screenshot-list-view-grid').toMatchBaselineScreenshot(done, {
      screenshotName: 'list-view-grid-highlighted-row-xs'
    });
  });

  it('should match the previous screenshot with multiselect enabled', async (done) => {
    await SkyHostBrowser.scrollTo('#screenshot-list-view-grid-with-multiselect');

    expect('#screenshot-list-view-grid-with-multiselect').toMatchBaselineScreenshot(done, {
      screenshotName: 'list-view-grid-with-multiselect'
    });
  });

  it('should match the previous screenshot with multiselect enabled (screen: xs)', async (done) => {
    await SkyHostBrowser.setWindowBreakpoint('xs');
    await SkyHostBrowser.scrollTo('#screenshot-list-view-grid-with-multiselect');

    expect('#screenshot-list-view-grid-with-multiselect').toMatchBaselineScreenshot(done, {
      screenshotName: 'list-view-grid-with-multiselect-xs'
    });
  });
});
