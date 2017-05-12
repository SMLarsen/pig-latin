/*jshint esversion: 6 */
function pigIt(str){
  var array = str.split(" ");
  for (var i = 0; i < array.length; i++) {
    array[i] = (array[i].slice(1,array[i].length)) + array[i].charAt(0) + "ay";
  }
  return array.join(" ");
}

console.log(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay');
console.log(pigIt('This is my string'),'hisTay siay ymay tringsay');
