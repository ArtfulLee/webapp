/**
 * sap.ui.define - используется для определения глобального пространства имён в контроллерах и других модулях JavaScript.
 * С помощью этого пространства имён объект может быть доступен во всём приложении.
 * 
 * "sap/ui/core/mvc/XMLView" - view SAPUI5 core ???
 */
sap.ui.define(["sap/ui/core/mvc/XMLView"], function (XMLView) {
  "use strict";

  XMLView.create({
    viewName: "sap.ui.demo.walkthrough.view.App",
  }).then(function (oView) {
    oView.placeAt("content");
  });
});
