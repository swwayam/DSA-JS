// Time Taken 20mins
// Mistake : Readiablity could have been improved by use of one single condition

  const romanToIntMapping = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };    

  let value = 0;

  for (let i = 0; i < roman.length; i++) {
    const curr = romanToIntMapping[roman[i]];
    const prev = romanToIntMapping[roman[i - 1]];

    // Subtractive case 
    if (i > 0 && curr > prev) {
      value += curr - 2 * prev;
    } else {
      value += curr;
    }
  }

  return value;


/*

My Solution

const romanToIntMapping = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

let value = 0;

// Item that can be placed before for substraction: I,X,C infront of (V,X) , (L,C), (D,M)
for (let i = 0; i < roman.length; i++) {
  if ((roman[i] == "V" || roman[i] == "X") && roman[i - 1] == "I") {
    value += romanToIntMapping[roman[i]] - (romanToIntMapping[roman[i -1]] * 2);
  } else if ((roman[i] == "L" || roman[i] == "C") && roman[i - 1] == "X") {
    value += romanToIntMapping[roman[i]] - (romanToIntMapping[roman[i -1]] * 2);
  } else if ((roman[i] == "D" || roman[i] == "M") && roman[i - 1] == "C") {
    value += romanToIntMapping[roman[i]] - (romanToIntMapping[roman[i -1]] * 2);
    
  } else {
    value += romanToIntMapping[roman[i]];    
  }
}

return value

// 

*/