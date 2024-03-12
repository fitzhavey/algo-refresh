# Hash Tables

Hash tables are one of the most useful data structures for interviews and real-life code. We'll go over some strategies for working with hash tables in programming challenges.

Listen for phrases like "lookups" or "count" as these usually point towards a hash table being part of the solution.

When creating a dictionary, it's important to be thoughtful about what the keys of these tables should be.

Bit maps can be more efficient than hash tables for when we are only dealing with boolean values.

## Quiz

Megan is implementing a hash table from scratch. She has chosen to handle collisions through chaining: if two items collide at the same index in the underlying array, they are put into a linked list. If her hash table maps from strings to Person objects, which would be the most appropriate data type for the linked list?

- [ ] a linked list of Person objects
- [x] a linked list of (string, Person) objects
- [ ] a linked list of strings