# Intuition

1. We need to make the string reverse and see if the reverse match with previous
2. to match properly we need to lowerCase and put off all the non-words (space, comma, full-stop etc) from the string

<hr/>

## method :

1. Make the string lowerCase with toLowerCase() and replace the non-words with .replace(/\W/g, "")
2. .split("").reverse().join("") the string and store it insider another variable
3. compare the variable with the param passed in function and return true on matched.

**Learnings:** /\W/g means the non-words in replace method.
