import {
  expect,
  SkyHostBrowser
} from '@skyux-sdk/e2e';

describe('List view grid', () => {
  it('should match the previous screenshot', (done) => {
    SkyHostBrowser.get('/visual/list-view-grid');
    SkyHostBrowser.setWindowBreakpoint('lg');
    SkyHostBrowser.scrollTo('#screenshot-list-view-grid');
    expect('#screenshot-list-view-grid').toMatchBaselineScreenshot(done);
  });

  it('should match the previous screenshot (screen: xs)', (done) => {
    SkyHostBrowser.get('/visual/list-view-grid');
    SkyHostBrowser.setWindowBreakpoint('xs');
    SkyHostBrowser.scrollTo('#screenshot-list-view-grid');
    expect('#screenshot-list-view-grid').toMatchBaselineScreenshot(done);
  });
});
