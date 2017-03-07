//reverse a string

const reverseString = (str) => {
  var counter = str.length - 1;
  var temp;
  while(counter > 0) {
    console.log(str);
    str =  str.substring(0, counter -1) + str.substring(counter, str.length) + str.substring(counter-1, counter);
    counter--;
  }
  return str;
}

console.log(reverseString("appleJUICE"));