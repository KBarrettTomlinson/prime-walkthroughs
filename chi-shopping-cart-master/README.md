# Chi Shopping Cart
This is a sample angular application that uses two controllers and a factory. The `InputController` takes in product information that is stored in the `ShoppingService` factory. The `CartController` displays the products added.

## MVC Overview

Controllers and views get reset when you navigate from page to page. We need a way to persist data. MVC as a pattern is not specific to Angular but is a general programming practice.

**model** knows things
**view** shows things
**controller** tells the view what the model knows

```
V  [v] <div>         [v]
    |                 |
----+-----------------+-
    |                 |
C  [c]               [c]
    |                 |
----+-----------------+-
    |                 |
M   +-------[f]-------+

```

> `Factory` is a `service`.

## Task List
- [x] Add project files (index.html, client.js, angular.js)
- [x] Create InputController
- [x] Create ShoppingService factory
- [x] Create CartController

### InputController

Let's start by putting everything in one controller.

**client.js**

```JavaScript
var cartApp = angular.module('cartApp', []);

cartApp.controller('InputController', ['$scope', function($scope){
  console.log('InputController called.');

  $scope.productArray = [];

  $scope.product = {
    name: '',
    cost: ''
  }

  $scope.addProduct = function(newProduct) {
    $scope.productArray.push(newProduct);
    console.log($scope.productArray)
  }
}]);
```

**index.html**

```HTML
<div ng-controller="InputController">
  Product Name: <input ng-model="product.name" name="name">
  Cost: <input ng-model="product.cost" name="cost">
  <button ng-click="addProduct(product)">Add to Cart</button>

  <div ng-repeat="p in productArray">
    {{p.name}}: {{p.cost}}
  </div>
</div>
```

After running in the browser, you should notice two problems. First, adding a new item overrides the old one. Second, ng-repeat is throwing an error when trying to display duplicates.

1. [Angular Copy](https://docs.angularjs.org/api/ng/function/angular.copy)
2. [Duplicate Key](https://docs.angularjs.org/error/ngRepeat/dupes)

### ShoppingService Factory

Now that we have our controller working, let's pull some of the functionality into a Factory.

```JavaScript
cartApp.controller('InputController', ['$scope', 'ShoppingService', function($scope, ShoppingService){
  console.log('InputController');
  var shoppingService = ShoppingService;

  $scope.product = {
    name : '',
    cost : ''
  }

  $scope.addProduct = shoppingService.factoryAddProduct;
  $scope.productList = shoppingService.factoryProductList;
}]);

cartApp.factory('ShoppingService', [function(){
  var productList = [];

  var addProduct = function(newProduct) {
    var copy = angular.copy(newProduct);
    productList.push(copy);
  };
  return {
    factoryProductList: productList,
    factoryAddProduct: addProduct
  }
}]);
```

Our `productList` _array_ and `addProduct` _function_ have now been moved into our new `ShoppingService` _factory_. Everything should still work as expected.

### CartController

Lastly, we want to move our `productList` display into it's own controller called `CartController`. The final source is available in the project files.
