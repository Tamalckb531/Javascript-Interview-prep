# Intuition

1. Make an array with each character of the string.
2. Traverse the array and see if each element includes in the vowels array. If includes than increase the count of vowels.

<hr/>

## method :

1. .split("") will make the array of string.
2. Traverse the Array with for of loop.
3. Check each elements and compare it with vowel array with .includes(elem) method.

**Learnings:** array.includes(elem) returns true if the elem is exist in the array.
