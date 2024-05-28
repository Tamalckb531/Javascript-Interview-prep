# Intuition

1. We need to get the all individual numbers from the number input. Making it an array would be a wise choice.
2. After making array we can add all element one by one.

<hr/>

## method :

1. Convert it into string with String() -> make it array with Array.from -> give the second argument Number to get the element as number.
2. Use reduce method to iterate each element and add them together.

**Learnings:** Array.from( ElementToMakeArray, DataTypeOfArrayElement ), String(AnythingToConvertInString)
