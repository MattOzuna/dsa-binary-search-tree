class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    }
    let currNode = this.root;
    while (currNode.left !== null && currNode.right !== null) {
      if (currNode.val > val) {
        currNode = currNode.left;
      } else if (currNode.val < val) {
        currNode = currNode.right;
      }
    }
    if (currNode.val > val) {
      currNode.left = newNode;
      currNode = currNode.left;
    } else if (currNode.val < val) {
      currNode.right = newNode;
      currNode = currNode.right;
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    }
    let currNode = this.root;
    function _insertRecursively(node) {
      if (node.val > val) {
        if (!node.left) {
          node.left = newNode;
          return;
        }
        _insertRecursively(node.left);
      } else if (node.val < val) {
        if (!node.right) {
          node.right = newNode;
          return;
        }
        _insertRecursively(node.right);
      }
    }
    _insertRecursively(currNode);
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) return undefined;
    let currNode = this.root;
    while (currNode) {
      if (currNode.val === val) {
        return currNode;
      } else if (currNode.val > val) {
        currNode = currNode.left;
      } else {
        currNode = currNode.right;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (!this.root) return undefined;
    let currNode = this.root;
    function _findRecursively(node) {
      if (node.val === val) {
        return node;
      } else if (node.val > val) {
        if (!node.left) return undefined;
        return _findRecursively(node.left);
      } else {
        if (!node.right) return undefined;
        return _findRecursively(node.right);
      }
    }
    return _findRecursively(currNode);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let visited = [];
    let currNode = this.root;
    function _dfsPreOrder(node) {
      visited.push(node.val);
      if (node.left) _dfsPreOrder(node.left);
      if (node.right) _dfsPreOrder(node.right);
    }
    _dfsPreOrder(currNode);
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let visited = [];
    let currNode = this.root;
    function _dfsInOrder(node) {
      if (node.left) _dfsInOrder(node.left);
      visited.push(node.val);
      if (node.right) _dfsInOrder(node.right);
    }
    _dfsInOrder(currNode);
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let visited = [];
    let currNode = this.root;
    function _dfsInOrder(node) {
      if (node.left) _dfsInOrder(node.left);
      if (node.right) _dfsInOrder(node.right);
      visited.push(node.val);
    }
    _dfsInOrder(currNode);
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let visited = [];
    let queue = [this.root];
    while (queue.length) {
      let currNode = queue.shift();
      visited.push(currNode.val);
      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    }
    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
  
}
module.exports = BinarySearchTree;
