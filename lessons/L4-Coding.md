# Coding

Of course, you need to code in interviews. That doesn't mean you're expected to type things up perfectly and then run your code.

## Expectations

Perfect candidates are awesome, but rare. The interviewer just wants to make sure you are a good coder.

As you're coding try to talk out loud, explain the thought processes behind your choices. Try to avoid bugs, but remember - you don't have to be flawless.

### Signal, Not Perfection

What makes good code?

- readability
- correctness
- maintainability
- and so on!

### Wait Until You're Ready

Some candidates rush into code, when they don't fully understand what they're going to do. This causes a lot of mistakes. "I understand the basic gist of what I'm going to write is not enough." Make sure you know exactly what your steps are.

Try and get an explicit sign off from your interviewer once you've described your planned approach to them. Make sure you are only coding when both you and your interviewer are ready.

### Ensure You Know

- your input & output data types
- index math
- helper functions
- data structures and when they change

## Tips and Tricks

Don't just dive in, as above, make sure you know the little details

### Details

- algorithm details
- data structures
- indices

### Skills

- correctness
- readability
- maintainability
- performance

Use the neat features of your programming language!

- ask if you're not sure
- can "make up" reasonable functions, or assume at first and implement later
- readability is key, we write code for humans as well as for machines to run
- discuss and consider error cases and boundary checks, the interviewer might want you to include them

## Structured Code

Structuring your code makes it more readable and maintainable, it also makes your life easier. Ensure to modularalise your code, from the top down, and use helper functions.

Ignore things that don't show good signal (but check with your interviewer first). Once modularised, fill in the functions in order of which code will be most interesting to your interviewer.

Modularising top down often saves you time, because you don't have to fill in every detail and can often reuse code. Pretending the functions you need are already written when you start, you can focus on what shows signal to your interviewer.

### Ransom Note Example

Given a note (N) and a magazine (M), determine if you can build N from the letters in M.

_Use a hash table to count the letters in M, do the same for N. Then compare the two hash tables._

_To modularize this solution top down:_

1. _write a function "canBuildNote" that takes in a note and a magazine_
2. _write a function "countLetters" that takes in a string and returns a hash table of letter counts_
3. _write a function "compare" that takes in two hash tables and returns true if the first is a subset of the second_
4. _stick it all together!_

Remember: your interviewer is here to determine if you're a great engineer. It's not a binary "does your code work" challenge. Talk to your interviewer, you don't need to guess at their expectations.
