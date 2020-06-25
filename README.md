# coffeerun

《Web开发权威指南》书中的第2个demo

## browser-sync

```bash
browser-sync --server --files "stylessheets/*.css, scripts/*.js, *.html"

```

## scripts

```js
var myTruck = new App.Truck('007', new App.DataStore());
myTruck.createOrder({emailAddress: 'dr@no.com', coffee: 'decaf'});
myTruck.createOrder({emailAddress: 'me@goldfinger.com', coffee: 'double mocha'});
myTruck.createOrder({emailAddress: 'm@bond.com', coffee: 'earl grey'});
myTruck.db;
myTruck.deliverOrder('m@bond.com');
myTruck.deliverOrder('dr@bond.com');
myTruck.db;
myTruck.printOrders();


```
