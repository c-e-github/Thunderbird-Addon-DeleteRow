var { ExtensionCommon } = ChromeUtils.import("resource://gre/modules/ExtensionCommon.jsm");
var { Services } = ChromeUtils.import("resource://gre/modules/Services.jsm");

var myapi = class extends ExtensionCommon.ExtensionAPI {
  getAPI(context) {
    return {
      myapi: {
        async deleteTableRow() {
          let recentWindow = Services.wm.getMostRecentWindow("messageCompose");

recentWindow.alert("Reached this line!");

          if (recentWindow) {
             var editor = GetCurrentTableEditor();
             editor.beginTransaction();
             editor.deleteTableRow(1);
             editor.endTransaction();
             window.content.focus();
          }
        },
      },
    };
  }
};
