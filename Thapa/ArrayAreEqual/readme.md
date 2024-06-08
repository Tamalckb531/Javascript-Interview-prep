# Intuition

1. We need to check the length of the array equal or not first
2. Then match each element of both array

<hr/>

## method :

1. Return false if the length not equal.
2. Get each element of arr1 with every method and check the co-responding index element of arr2 with it. Will get true if all element matched.

**Learnings:** .every((curElem, index)=>{}). It takes each element and it's index to do the given operation in the callback function. Mostly it use for comparison. If all element pass the comparison it returns true or otherwise it returns false.
