function klickaktion() {
  browser.myapi.deleteTableRow();
}
browser.composeAction.onClicked.addListener(klickaktion);
