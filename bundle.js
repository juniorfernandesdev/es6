"use strict";

var arr = [1, 3, 4, 5, 8, 9]; //Aroow function

var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr); //calback - passagem de função pra outra função

var test = function test() {
  return 'teste';
};

console.log(test());
