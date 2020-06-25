(function (window) {
  'use strict';
  var FROM_SELECTOR = '[data-coffee-order="form"]';
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var myTruck = new Truck('ncc-1701', new DataStore());
  window.myTruck = myTruck;
  var formHandler = new FormHandler(FROM_SELECTOR);

  formHandler.addSubmitHandler();
  console.log(formHandler);
})(window);
