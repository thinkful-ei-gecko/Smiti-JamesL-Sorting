class _Node {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head)
    return this.head
  }
  insertLast(item) {
    if(this.head === null) {
      this.insertFirst(item)
    }
    else {
      let tempNode = this.head
      while(tempNode.next !== null) {
        tempNode = tempNode.next
      }
      tempNode.next = new _Node(item, null)
      return tempNode
    }
  }
  remove(item) {
    if(!this.head) {
      return null
    }
    if(this.head.value === item) {
      this.head = this.head.next
      return
    }
    let currNode = this.head
    let prevNode = this.head
    while(currNode !== null && currNode.value !== item) {
      prevNode = currNode
      currNode = currNode.next
    }
    if(currNode === null){
      console.log('Item not found')
      return
    }
    prevNode.next = currNode.next
  }
  find(item) {
    let tempNode = this.head
    if(!this.head) {
      return null
    }
    while(tempNode.value !== item) {
      if(tempNode.next === null) {
        return null
      }
      else {
        tempNode = tempNode.next
      }
    }
    return tempNode
  }
  insertBefore(item, newVal) { // 5 10     15 20
    if(this.head === null) {
      throw new Error ('empty list')
    }
    let tempNode = this.head
    let prevNode = this.head
    while(tempNode.value !== item) {
      prevNode = tempNode
      tempNode = tempNode.next
    }
    let newItem = new _Node(newVal, tempNode)
    prevNode.next = newItem
  }
  insertAfter(item, newVal) {
    if(this.head === null) {
      throw new Error ('empty list')
    }
    let tempNode = this.head
    
    while(tempNode.value !== item) {
      tempNode = tempNode.next
    }
    tempNode.next = new _Node(newVal, tempNode.next)
  }
  insertAt(pos, newVal) { // 5  10  15  20
    if(this.head === null) {
      throw new Error ('empty list')
    }
    let tracker = 0
    let currNode = this.head
    let prevNode = this.head
    while(tracker !== pos - 1) {
      prevNode = currNode
      currNode = currNode.next
      tracker++
    }
    prevNode.next = new _Node(newVal, currNode)
  }
}

module.exports = LinkedList;