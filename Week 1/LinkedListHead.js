// Insert Node At Head
// Given a pointer to the head of a linked list, insert a new node before the head.
// The next value in the new node should point to head and the data value should be replaced with a given value.

// My solution O(1)
function insertNodeAtHead(head, data) {
  let newNode = new SinglyLinkedListNode();
  newNode.data = data;

  if (!head) {
    return newNode;
  } else {
    newNode.next = head;
    return newNode;
  }
}
