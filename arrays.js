//chocolateBars
var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

//Adding element at the beginning of the array
function addElementToBeginningOfArray() {
  var array = [1];
  array = ['foo', ...array];
  return array;
}

// Destructively Add element to the beginning of array
function destructivelyAddElementToBeginningOfArray() {
  const array = [1];
  array = array.unshift("foo");
  return array;
 }


// Adding element at the end of an array
function addElementToEndOfArray() {
  var array = [1]
  array = [...array, 'foo'];
  return array;
}

// Destructively Add Element to the end of array
function destructivelyAddElementToEndOfArray() {
  var array = [1]
  array.push('foo');
  return array;
}

// Accessing an element in an array
function accessElementInArray() {
  var array = [1, 2, 3];
  return (array[2]);
}

// Destructively remove an element from end of array
function destructivelyRemoveElementFromBeginningOfArray() {
      let array = [1, 2, 3];
      array.shift();
      return array;
}

// Remove an element from the beginning of array
 function removeElementFromBeginningOfArray() {
     const array = [1, 2, 3];
     return array.slice(-2);
 }


// Destructively removing an element in the beginning of the array
function destructivelyRemoveElementFromEndOfArray() {
  const array = [1, 2, 3];
  array.pop();
  return array;
}

// Slice element from the end array without mutating the array
function removeElementFromEndOfArray() {
  let array = [1, 2, 3];
  return array.slice(0, array.length - 1);
}
