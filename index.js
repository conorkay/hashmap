class LinkedList {
  constructor() {
    this.head = null;
  }
}

class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashMap {
  constructor() {
    this.hashArray = [];
    this.capacity = 16;
    this.arrLength = 0;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    let hashCode = this.hash(key);
    let newNode = new ListNode(key, value);
    if (!this.hashArray[hashCode]) {
      this.hashArray[hashCode] = newNode;
      ++this.arrLength;
    } else {
      let currNode = this.hashArray[hashCode];
      while (currNode.next) {
        if (currNode.key === key) {
          currNode.value = value;
          return;
        }
        currNode = currNode.next;
      }
      if (currNode.key === key) {
        currNode.value = value;
      } else {
        currNode.next = newNode;
        ++this.arrLength;
      }
    }
  }

  get(key) {
    let hashCode = this.hash(key);
    if (this.hashArray[hashCode]) {
      let currNode = this.hashArray[hashCode];
      while (currNode) {
        if (currNode.key === key) {
          return currNode.value;
        }
        currNode = currNode.next;
      }
    }
    return null;
  }

  has(key) {
    let hashCode = this.hash(key);
    if (this.hashArray[hashCode]) {
      let currNode = this.hashArray[hashCode];
      while (currNode) {
        if (currNode.key === key) {
          return true;
        }
        currNode = currNode.next;
      }
    }
    return false;
  }

  remove(key) {
    let hashCode = this.hash(key);
    if (this.hashArray[hashCode]) {
      let currNode = this.hashArray[hashCode];
      let prevNode = this.hashArray[hashCode];
      while (currNode) {
        if (currNode.key === key && currNode === this.hashArray[hashCode]) {
          this.hashArray[hashCode] = currNode.next;
          --this.arrLength;
          return true;
        } else if (currNode.key === key) {
          prevNode.next = currNode.next;
          --this.arrLength;
          return true;
        }
        prevNode = currNode;
        currNode = currNode.next;
      }
    }
    return false;
  }

  length() {
    return this.arrLength;
  }

  clear() {
    this.hashArray = [];
    this.arrLength = 0;
  }

  keys() {}

  values() {}

  entries() {}
}

let hash = new HashMap();
let key = 'Conor';
let value = 5;
let key1 = 'onCor';
let value2 = 10;

hash.set(key, value);
hash.set(key1, value2);
console.log(hash.hashArray);
console.log('get: ' + hash.get('Conor'));
console.log(hash.length());
hash.clear();
console.log(hash.get('Conor'));
console.log(hash.length());
