// Insert Node At Tail
// Create a new node with the given integer. Insert this node at the tail of the linked list
// and return the head node of the linked list formed after inserting this new node.

// My solution using while loop O(n)
function insertNodeAtTail(head, data) {
  let leader = head;

  let newNode = new SinglyLinkedListNode();
  newNode.data = data;

  if (!leader) {
    return newNode;
  }

  while (leader.next) {
    leader = leader.next;
  }
  leader.next = newNode;
  return head;
}
