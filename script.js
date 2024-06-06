function indexOfIgnoreCase(s1, s2) {
  // write your code here
	  x = s1.toLowerCase()
  y = s2.toLowerCase()
  z = x.search(y)
  return z
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
