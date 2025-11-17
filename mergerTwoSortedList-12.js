class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    let newnode = new Node(value);
    if (!this.head) {
      this.head = newnode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newnode;
  }
  printList() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + "->";
      current = current.next;
    }
    console.log(result + "null");
  }
}


const list2 = []
const list1 = [1,3,4]

const newList = new LinkedList()

const compare = (item1, item2, stay) => {

  let first = item1.pop()
  let second = item2.pop()

  if (item.pop() || item2.pop()) {
    
  }


  if (first >= second ) {
    newList.append(compare(item1, item2, second))
  }else{
     newList.append(compare(item1, item2, first))
  }

}



