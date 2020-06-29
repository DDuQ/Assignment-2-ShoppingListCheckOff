(function() {
  'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy=this;

  toBuy.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

  toBuy.removeItemToBuy = function (itemIndex){
  ShoppingListCheckOffService.removeItemToBuy(itemIndex);
  };

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought=this;

  bought.itemsBought = ShoppingListCheckOffService.getItemsBought();

}

function ShoppingListCheckOffService() {
  var service = this;

  var itemsToBuy = [
  {name: 'Cookies', quantity: 5},
  {name: 'Bepis cans',quantity: 4},
  {name: 'Pepsi bottles',quantity: 3},
  {name: 'Grapes',quantity: 4},
  {name: 'Changua(s) plates', quantity:2}
  ];

  var itemsBought = [];

  service.getItemsToBuy = function () {
    return itemsToBuy;
  };

  service.removeItemToBuy = function (itemIndex) {
    itemsBought.push(itemsToBuy[itemIndex]);
    itemsToBuy.splice(itemIndex,1);
  };

  service.getItemsBought = function () {
    return itemsBought;
  };
}

}());
