var { ExtensionCommon } = ChromeUtils.import("resource://gre/modules/ExtensionCommon.jsm");
var { Services } = ChromeUtils.import("resource://gre/modules/Services.jsm");

var myapi = class extends ExtensionCommon.ExtensionAPI {
  getAPI(context) {
    return {
      myapi: {
        async deleteTableRow() {
          let recentWindow = Services.wm.getMostRecentWindow("msgcompose");
          if (recentWindow) {
             var editor = recentWindow.GetCurrentTableEditor();
             editor.beginTransaction();
             editor.deleteTableRow(1);
             editor.endTransaction();
             recentWindow.window.content.focus();
          }
        },
      },
    };
  }
};
