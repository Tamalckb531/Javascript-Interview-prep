# Intuition

1. We need to make a hashtag out of a string with capitalize all words
2. String should be an array to do operation of each words
3. We can use uppercase in the first character of each word of array and join the other words with it.
4. We can have a string with # before and join each word of array gone throw 3 via a loop

<hr/>

## method :

Handle constrains (trim to remove extra space and length not in 0-280 is false) -> Make the string array (with split) - Make a hashTag string with # by default -> start a loop for the array -> take each word and make 0th index toUpperCase(), add the other words with it with substring(1), add it in hashTag -> return hashTag.

**Learnings:** Callback of sort method.
