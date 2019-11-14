const LinkedList = require('./linkedList')

function qSort(array, start=0, end=array.length) {
  if(start >= end) {
    return array
  }
  const middle = partition(array, start, end)

  array = qSort(array, start, middle)
  array = qSort(array, middle+1, end)

  return array
}

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];   
  array[j] = tmp;
};

function partition(array, start, end) {
  const pivot = array[end -1]
  let j = start
  for(let i=start; i<end-1; i++) {
    if(array[i] <= pivot) {
      swap(array, i, j)
      j++
    }
  }
  swap(array, end-1, j)
  return j
}

function mSort(array) {
  if(array.length <= 1) {
    return array
  }
  const middle = Math.floor(array.length / 2)
  let left = array.slice(0, middle)
  let right = array.slice(middle, array.length)

  left = mSort(left)
  right = mSort(right)

  return merge(left, right, array)
}

function merge(left, right, array) {
  let leftIndex = 0
  let rightIndex = 0
  let outputIndex = 0

  while(leftIndex < left.length && rightIndex < right.length) {
    if(left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++]
    }
    else {
      array[outputIndex++] = right[rightIndex++]
    }
  }
  for(let i=leftIndex; i<left.length; i++) {
    array[outputIndex++] = left[i]
  }
  for(let i=rightIndex; i<right.length; i++) {
    array[outputIndex++] = right[i]
  }
  return array;
}

//Sorting Linked List
function sortLinkedList(list) {
  if(!list.head) {
    return null
  }
  let node = list.head
  let arr = []
  while(node !== null) {
    arr.push(node.value)
    list.remove(node.value)
    node = node.next
  }
  return mSort(arr)
}

function main() {
  let ll = new LinkedList
  ll.insertFirst(5)
  ll.insertLast(19)
  ll.insertLast(2)
  ll.insertLast(4)
  ll.insertLast(1)
  ll.insertLast(35)
  ll.insertLast(37)
  ll.insertLast(22)

  console.log(sortLinkedList(ll))
}

main()