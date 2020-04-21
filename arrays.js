//chocolateBars
var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

var chips = 'foo';

function addElementToBeginningOfArray(chocolateBars, candyString){
  return [chips, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString){
  chocolateBars.unshift(chips);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, candyString){
  return [...chocolateBars, chips];
}

function destructivelyAddElementToEndOfArray(chocolateBars, candyString){
  chocolateBars.push(chips);
  return chocolateBars;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0, chocolateBars.length - 1);
}
