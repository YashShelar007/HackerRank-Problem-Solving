// Print Linked List
// For each node, print its data value on a new line (console.log in Javascript).

// my while loop solution O(n)
function printLinkedList(head) {
  while (head) {
    console.log(head.data);
    head = head.next;
  }
}
