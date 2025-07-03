// Mistake : Code was correct, but I didn't consider the edge cases resulting multiple failed submissions, runtime could have been improved.

// Simplified Solution (AI)

var isValid = function (s) {
    const stack = [];
    const bracketMap = {
        "(": ")",
        "[": "]",
        "{": "}",
    };

    for (let char of s) {
        if (bracketMap[char]) {
            // Opening bracket
            stack.push(char);
        } else {
            // Closing bracket
            const last = stack.pop();
            if (bracketMap[last] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
};


// My Solution

/*

// JS Stack Implementation

class Stack {
  constructor() {
    this.items = [];
  }

  // Push operation
  push(element) {
    this.items.push(element);
  }

  // Pop operation
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // Peek operation
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // isEmpty operation
  isEmpty() {
    return this.items.length === 0;
  }

  // Size operation
  size() {
    return this.items.length;
  }

  // Print the stack
  print() {
    console.log(this.items);
  }
}

const stack = new Stack();

// Actual Code

const s = "(";

const openAndCloseMapping = {
  "(": ")",
  "[": "]",
  "{": "}",
};


for (let i = 0; i < s.length; i++) {
  if (Object.getOwnPropertyNames(openAndCloseMapping).includes(s[i])) {
    stack.push(s[i]);
  } else if (s[i] !== openAndCloseMapping[stack.pop()]) {
    console.log(false);
  }
}


if(stack.isEmpty()){
    return true
}

console.log(true);

*/