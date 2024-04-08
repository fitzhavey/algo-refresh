# Graphs

Graphs come up often in both interviews and in real life, explore various types of graphs and how to work with them.

## Introduction

A graph consists of nodes and vertices; there are directed and undirected graphs. One common implementation of a graph is to have a Node class and a Graph class. Each Node has a map of all the nodes it is connected to, and the Graph has a map of all the nodes.

This can also be achieved with an Adjacency list or matrix. They are particularly useful when there are a lot of edges in comparison to the number of nodes. It uses N^2 memory.

A cycle is a group of nodes that are connected to each other in a loop. Graphs with nodes with this property are called cyclic. Acyclic graphs can be referred to as trees.

In some graphs edges are weighted. An example of this could be the distance between one city and another.

A classic problem is finding if there is a path from one node to another or if they are unconnected.

## Depth First Search

In depth first search we take a node, and we recursively search all of its children. We use a stack to keep track of the nodes to be searched. You search each node as deep as you can before visiting its neighbours. You want to be mindful of cycles as they can cause undesirable loops. Keep track of visiting nodes with a hash map.

One drawback of the depth first approach is that it can take a long time to reach some very obvious short paths while searching all the children of a particular node.

## Breadth First Search

Breadth first search is an algorithm in which we search all the sibling nodes before we search the children nodes. This means we always find the shortest path, since we are exploring the nodes layer by layer.

## Tips & Tricks

### Listen For

- relationships between items

### Syntactical Details

- implementing graphs as an adjacency list
- implementing graphs as an adjacency matrix

### Patterns & Concepts

- breadth first search
- depth first search

### Stumbling Blocks

- cycles leading to infinite loops
- remembering to mark nodes as visited
- directed vs undirected graphs

### Extras

- weighted edges
- which search algorithm to use
- bidirectional breadth first search, where you start from the start and the end, and you search in both directions. This is useful for finding the shortest path between two nodes quickly.

## Quiz

1. A graph has 10 nodes. (Assume there is never an edge between a node and itself.) What is the maximum number of edges it could have?
    - [ ] 50 edges if directed; 100 edges if undirected
    - [ ] 45 edges if directed; 90 edges if undirected
    - [x] 90 edges if directed; 45 edges if undirected
    - [ ] 110 edges if directed; 55 edges if undirected
    - [ ] 100 edges if directed; 50 edges if undirected

2. You are implementing depth-first search recursively on a graph to detect if there's a path between node A and node B. If this algorithm is called on a directed graph with N nodes and N*(N-1) edges, which expression best describes the max depth of the call stack? (Assume there are no nodes with an edge from the node to itself.)
    - [ ] O(1)
    - [ ] O(log N)
    - [ ] O(N^2)
    - [x] O(N)
