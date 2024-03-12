# Arrays

Sometimes we know the size of our arrays in the beginning. Other times, we may need the arrays to grow (or shrink) as our data changes. This lesson will teach you how resizable arrays work. We'll cover arrays built into your language and the ones you need to build yourself.

## Dynamically Resizable Arrays

Resizable arrays are build into javascript as the default but some languages, like Java do not. Instead you either have to use the ArrayList class or build your own.

You could create a new array that's bigger every time a new item is added, and copy all the items across.

_But what is the time complexity of this?_

_Copying the array is O(n), so we'd like to not copy the array very often. Instead we grow rarely but a lot, for instance doubling the array size every time we hit capacity._

_Now, we are only doing the work of copying the array, which is O(n), every n insertions. So the time complexity of inserting n items is O(n), which is linear. This means the amortized (average) time complexity of inserting a single item is O(1), which is constant._

## Tips & Tricks

Make sure you have tactical knowledge:

- how to get an array length
- how to get an element by index
- be comfortable with 2, and 3 dimensional arrays
- sorting the arrays
- getting the max and min values
- partitioning, merging and slicing
- lambda, reduce, map, filter, etc.

Watch out for:

- off by one errors and boundary errors
- indexing (especially with small arrays!)
- time complexity of built in array functions

Extra tips:

- insert elements at the end of the list, to avoid having to push other elements
- in a situation where you have to modify an array, such as rotating, you might find virtually modifying the indexes computationally cheaper
- be comfortable working with subarrays and matrices
- know when to use a hash table instead