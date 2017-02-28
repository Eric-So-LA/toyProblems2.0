//remove duplicates from an array
const contains = (array, num) => {
  let containsNum = false;
  array.forEach(n => {
    if(n === num){
      containsNum = true;
    }
  })
  return containsNum;
}

const removeDuplicates = (array) => {
  const exists = [];
  return array.filter(n => {
    if(!contains(exists, n)) {
      exists.push(n);
      return true;
    }
    return false;
  })
};

console.log(removeDuplicates([2,3,5,1,2,3,2,1,2,1,3,3,2,3,6,4,3,2]));