# Map Filter Reduce

## Map :

1. Do operation with each element on an array and return a newArray with modified value.

_Polyfills:_

1. First add an myMap function in the array prototype so that any array instance can access it by default.
2. In the function :
   1. Take a temp array.
   2. Run a for loop for this (the array it has been calling for) until this.length.
   3. each time iteration, call the callback(given by user) and give it this[i], index and this.
   4. Store the returned value it he temp with push method.
   5. return the temp.

## Filter :

1. Take an array and apply a condition on each element, return an array with the match condition value.

_Polyfills:_

1. First add an myFilter function in the array prototype so that any array instance can access it by default.
1. In the function :
   1. Take a temp array.
   2. Run a for loop for this (the array it has been calling for) until this.length.
   3. each time iteration, call the callback(given by user) and give it this[i], index and this.
   4. Check If callback returning true then store the value in temp with push method.
   5. return the temp.

## Reduce :

1. Take each value of an array and reduce them into one value by doing a particular operation on them.

_Polyfills:_

1. First add an myFilter (which will take a callback and a initialValue as input) function in the array prototype so that any array instance can access it by default.
1. In the function :
   1. Take an accumulator and init it with initialValue.
   2. Run a for loop for this (the array it has been calling for) until this.length.
   3. each time iteration, check the accumulator exist or not :
      1. If exist : call the callback which will store the operated value in accumulator
      2. If doesn't exist: it will be init with this[i]
   4. return the accumulator.

## Important topic to know :

1. Map and foreach almost do the same work but map don't change the main array and return a new array with modified values where foreach change the array assigned to it.
