# Intuition

1. First break the word
2. Then run a function which takes each of the char and match with the input char
3. Count the match and return it.

<hr/>

## method :

Make the word and char lowercase for easy matching -> Make the word array (with split) -> Make a totalCount var and run a reduce method on the array to store the returned value on it -> reduce will match each curChar with char and on match it wil increase the prevResult with init value 0 -> Now total match is stored inside totalCount so return it.
