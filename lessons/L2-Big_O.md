# Big O Notation

Big O is the language engineers use to describe an algorithm's efficiency. Are our optimizations helping or hurting? They allow us to tackle this question without a timer.

Big O is all about which approach is faster or more space efficient when things get really big. "O" means "order of" and applies to space (memory) and time (execution length).

Be very sure to thoroughly define "N" when discussing Big O.

## File Transfer Example: Bird vs Internet

Where N is the file size:

- linear: internet = O(N)
- constant: bird = O(1)

## 7 Tips & Tricks

1. include everything, don't ignore functions
2. use logical and clear variable names
3. consider whether input size ADDS or MULTIPLIES complexity
4. predefine all the variables you need
5. ensure to drop constants from the final answer
6. also use Big O for space complexity, remember the call stack
7. drop non-dominant terms, this is a representation of the "order of" complexity

## Interesting Example Regarding the Definition of N

```python
def print_even_sequence(array):
 for a in array:
  if a % 2 == 0:
   print("Sequence for {0}".format(a))
   for k in range(0, a):
     print(k)
```

Here, O(a * k) where:

- a is the size of the array
- k is the size of the largest value within the array