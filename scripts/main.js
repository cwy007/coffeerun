(function (window) {
  'use strict';
  var FROM_SELECTOR = '[data-coffee-order="form"]';
  var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';

  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var Validation = App.Validation;
  var CheckList = App.CheckList;

  var myTruck = new Truck('ncc-1701', new DataStore());
  window.myTruck = myTruck;
  var checklist = new CheckList(CHECKLIST_SELECTOR);
  checklist.addClickHandler(myTruck.deliverOrder.bind(myTruck));

  var formHandler = new FormHandler(FROM_SELECTOR);
  formHandler.addSubmitHandler(function (data) {
    myTruck.createOrder.call(myTruck, data);
    checklist.addRow.call(checklist, data);
  });

  formHandler.addInputHandler(Validation.isCompanyEmail);
})(window);
