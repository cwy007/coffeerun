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

coffeebj
cwy@bignerdranch.com

myTruck = new App.Truck('k.i.t.t. 200', new App.DataStore());
myTruck.createOrder({coffee: "dsda", emailAddress: "cwy1@bignerdranch.com", size: "tall", flavor: "", strength: "30"})
myTruck.createOrder({coffee: "dsda", emailAddress: "cwy2@bignerdranch.com", size: "tall", flavor: "", strength: "30"})
myTruck.createOrder({coffee: "dsda", emailAddress: "cwy3@bignerdranch.com", size: "tall", flavor: "", strength: "30"})

var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
var CheckList = App.CheckList;
var checkList = new CheckList(CHECKLIST_SELECTOR);
myTruck.printOrders(checkList.addRow.bind(checkList));

myTruck.printOrders()

```

## ajax

```js
// post 请求会报错
// This MongoDB deployment does not support retryable writes. Please add retryWrites=false to your connection string.
url = "http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders";

// url = "http://localhost:3001/api/coffeeorders";
var remoteDS = new App.RemoteDataStore(url);

remoteDS.add('a@b.com', {emailAddress: 'a@b.com', coffee: 'espresso'});

```

(index):1 Access to XMLHttpRequest at 'http://localhost:3001/api/coffeeorders' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
