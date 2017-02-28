**5 kyu**

[Original Kata] (www.codewars.com/kata/is-my-friend-cheating)

**Description:**

* A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
* Within that sequence, he chooses two numbers, a and b.
* He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
* Given a number n, could you tell me the numbers he excluded from the sequence?

The function takes the parameter: n (don't worry, n is always strictly greater than 0 and small enough so we shouldn't have overflow) and returns an array of the form:

For example:

`[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]`

Should return: `11`

`[160, 3, 1719, 19, 11, 13, -21]`

Should return: `160`
