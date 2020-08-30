/**
 * The command for the list view grid to respond to
 */
export enum SkyListViewGridMessageType {

  /**
   * Triggers the deletion of a row in the list view grid.
   */
  PromptDeleteRow = 0,

  /**
   * Aborts the deletion of a row in the list view grid.
   */
  AbortDeleteRow = 1
}
