/**
 * sap.ui.define - используется для определения глобального пространства имён в контроллерах и других модулях JavaScript.
 * С помощью этого пространства имён объект может быть доступен во всём приложении.
 * 
 * Импортируется модуль XMLView из библиотеки sap.ui.core.mvc.
 * Создается представление в XML формате с именем "sap.ui.demo.walkthrough.view.App".
 * После создания представления, используется метод then для выполнения функции, которая принимает созданное представление как аргумент.
 * Внутри функции представление размещается в DOM элементе с id "content" с помощью метода placeAt.
 */
sap.ui.define(["sap/ui/core/mvc/XMLView"], function (XMLView) {
  "use strict";

  XMLView.create({
    viewName: "sap.ui.demo.walkthrough.view.App",
  }).then(function (oView) {
    oView.placeAt("content");
  });
});
