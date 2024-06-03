# Intuition

1. Make the string an array
2. take each element from it.

   1. CamelCase :

      1. return the first element as it is.
      2. For the next element, make the first character uppercase and other lowercase, concatenate them and return

   2. snake_case :

      1. return the first element as it is.
      2. For the next element, add a \_ before and return

3. Make the array a string again and return it

<hr/>

## method :

1. .split("") and .trim() will make the array of string.
2. .map will help to get each element with index and do the sub-sequential operation.
3. For CamelCase, we Can use slice(1) to choose the non-first elements character after 0th index for lowercase them.

**Learnings:** slice(1) choose all after index 0.
