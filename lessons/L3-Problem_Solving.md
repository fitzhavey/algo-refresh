# Problem Solving

You may have heard the expression: "it's the journey, not the destination." This is very true of interviews too. Problem-solving questions can be challenging. But, they are about your process, not knowing the "right" answers.

## 7 Steps

The process is vital:

1. **listen for clues...** optimal answers will depend on these
2. **draw an example**, make them large and generic at first - make your brain work
3. **use brute force**, don't freeze looking for an optimal solution, we can iterate
4. **optimize**, often we will talk through the first steps and apply optimisations before the first line of code
5. **walk through your solution**, try to thoroughly describe it before writing
6. **code**, it probably won't be run since this is to test communication and understanding
7. **verification**, use more examples and focus on edge cases - eliminate bugs!
8. if possible, finish with a self code review

## Optimising with BUD

- Bottlenecks
- Unnecessary work
- Duplicated work

### _Fun Facts_

- _finding an element in a sorted array is quicker with binary search_
- _caching & map tables can save time_

## Optimising with Space & Time

There are trade-offs. We can sacrifice time for space, and vice versa. Discuss these trade-offs with your interviewer. Often it can be ok to use more space if it means a saving a bit of extra time.

- Hash tables
- Pre-computation
- Tries

It might mean you do some upfront work where you sort the data or create a map table. This is often a good trade-off.

### Best Conceivable Runtime

"Best conceivable runtime" is about the _problem_, not a specific algorithm. And it has nothing to do with best case / worst case runtime.

_Given the nature of the problem, what is the best runtime you could possibly imagine getting? What runtime could you clearly not beat?_

#### Example 1

Given an array, find all pairs the sum to the median value.

_You must look at each element at least once. Therefore you can't beat O(N)._

B.C.R. is not necessarily achievable, it's just not beatable!

Therefore: if O(some step) <= B.C.R, then it's a "freebie". It won't hurt your runtime!

#### Example 2

You have a list of people, and some of them know each other. "knows" is one-way, I might know you, but you may not know me.

The only way of knowing if A knows B is by calling knows(A, B) [provided].

Celebrity = a person who knows no one, but everyone knows them.

Find the celebrity, if any.

_What is the B.C.R.? There is no way to beat linear runtime, O(N). To find a celebrity we must have checked every person, which will take linear time._

### Problem Solving - Optimising with DIY

An example of a DIY approach is as follows:

Given two strings, S and B, where S is smaller than B, find all permutations of S within B.

#### Inefficient Solution

1. generate all permutations of S
2. find all instances of each permutation within B

#### Efficient Solution

Come up with a large and generic example, for instance S = "abbc" and B = "cbabadcbbabbcbabaabccbabc"

1. iterate through each combination of 4 sequential characters (the length of S) in B
2. check all the characters of S are present in the combination in equal numbers to S

This approach is great for finding intuitive solutions. Running an example from the ground up can help you to see the problem in a different light.
