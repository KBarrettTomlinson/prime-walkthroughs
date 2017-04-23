var cartApp = angular.module('cartApp', []);

cartApp.controller('InputController', ['$scope', 'ShoppingService', function($scope, ShoppingService){
  console.log('InputController');
  var shoppingService = ShoppingService;

  $scope.product = {
    name : '',
    cost : ''
  }

  $scope.addProduct = shoppingService.factoryAddProduct;
}]);

cartApp.controller('CartController', ['$scope', 'ShoppingService', function($scope, ShoppingService){
  console.log('CartController');
  var shoppingService = ShoppingService;
  $scope.cart = shoppingService.factoryCart;
}]);

cartApp.factory('ShoppingService', [function(){
  var productList = [];
  var cart = {
    productList: productList,
    total: 0
  }

  var addProduct = function(newProduct) {
    var copy = angular.copy(newProduct);
    productList.push(copy);
    cart.total += parseInt(newProduct.cost);
    newProduct.name = '';
    newProduct.cost = '';
  };

  return {
    factoryCart: cart,
    factoryAddProduct: addProduct
  }

}]);
