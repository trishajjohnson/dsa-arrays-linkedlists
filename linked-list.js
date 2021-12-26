/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  // Get Node at idx

  _get(idx) {
    let current = this.head;
    let count = 0;

    while(current !== null && count !== idx) {
      count++;
      current = current.next;
    }

    return current;
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);

    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length - 1);
  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0);
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let current = this.head;
    let count = 0;

    while(current !== null && count !== idx) {
      count++;
      current = current.next;
    }

    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let node = this._get(idx);
    node.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    
    //  if idx is 0
    
    if(idx === 0) {
      return this.unshift(val);
    } 
    
    if(idx === this.length) {
      return this.push(val);
    }
    
    let newNode = new Node(val);
    let node = this._get(idx);
    let prev = this._get(idx - 1);
    prev.next = newNode;
    newNode.next = node;
    this.length++; 
    
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
  
    //  remove Node from beginning

    if(idx === 0) {
      const currHeadVal = this.head.val;
      this.head = this.head.next;
      this.length--;
      if(this.length < 2) this.tail = this.head;
      return currHeadVal;
    }

    //  remove Node from the end

    let prevNode = this._get(idx - 1);

    if(idx === this.length - 1) {
      const currTailVal = this.tail.val;
      this.tail = prevNode;
      this.tail.next = null;
      this.length--;
      return currTailVal;
    }

    //  remove any other Node

    let removedVal = prevNode.next.val;
    prevNode.next = prevNode.next.next;
    length--;
    return removedVal;

  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.length === 0) {
      return 0;
    }
    
    let current = this.head;
    let count = 0;
    let total = 0;

    while(count <= this.length - 1) {
      total += current.val;
      count++;
      current = current.next;
    }

    return total / this.length;
  }
}

module.exports = LinkedList;
