# Intuition

1. We need the largest word in string
2. String should be an array to find words
3. String array should be sorted descending so the largest word should stay in the top.

<hr/>

## method 1 :

Handle constrains (trim to remove extra space and length 0 is false) -> Make the string array (with split) - Make array desc ( with sort(()=>{}) ) -> return the 0th value

**Learnings:** Callback of sort method.

## method 1 :

Handle constrains (trim to remove extra space and length 0 is false) -> Make the string array (with split) - use reduce method to find the largest word and return it.

**Learnings:** Finding a conditional result from array using reduce method.

<hr/>
