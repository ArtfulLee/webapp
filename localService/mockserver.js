sap.ui.define(
  ["sap/ui/core/util/MockServer", "sap/base/util/UriParameters"],
  function (MockServer, UriParameters) {
    "use strict";

    return {
      init: function () {
        // create
        let oMockServer = new MockServer({
          rootUri:
            "http://localhost:8081/https://services.odata.org/V2/Northwind/Northwind.svc/",
        });

        let oUriParameters = UriParameters.fromQuery(window.location.search);

        // configure mock server with a delay
        MockServer.config({
          autoRespond: true,
          autoRespondAfter: oUriParameters.get("serverDelay") || 500,
        });

        // simulate
        let sPath = "../localService/";
        oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");

        // start
        oMockServer.start();
      },
    };
  }
);
