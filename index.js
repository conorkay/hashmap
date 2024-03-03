class LinkedList {
  constructor() {
    this.head = null;
  }
}

class ListNode {
  constructor() {}
}

class HashMap {
  constructor() {
    this.hashArray = [];
    this.capacity = 16;
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
    this.hashArray[hashCode] = value;
  }

  get(key) {
    let keyHash = this.hash(key);
    if (this.hashArray[keyHash]) {
      return this.hashArray[keyHash];
    } else {
      return null;
    }
  }

  has(key) {
    let keyHash = this.hash(key);
    if (this.hashArray[keyHash]) {
      return true;
    } else {
      return false;
    }
  }

  remove(key) {}

  length() {}

  clear() {}

  keys() {}

  values() {}

  entries() {}
}

let hash = new HashMap();
let key = 'Conor';
let value = 5;

hash.set(key, value);
console.log(hash.hashArray);
console.log(hash.get('Conor'));
console.log(hash.hashArray[1]);
