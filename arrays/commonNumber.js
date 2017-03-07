//return the common Number from two sorted arrays
 const containsNumber = (num, currentRay) => {
    for(let i = 0; i < currentRay.length; i++){
      if(num < currentRay[i]) {
        return false;
      } else if(num > currentRay[i]){
        continue;
      } else {
        return true;
      }
    }
  }
const findCommonNumber = (ray, ray2) => {
  var commonNumbers = [];
  for(var i = 0; i < ray.length; i++){
    if(containsNumber(ray[i], ray2)) {
      commonNumbers.push(ray[i]);
    }

  }
  return commonNumbers;
 
}

console.log(findCommonNumber([1,3,4,6,7], [2,5,7,10,13]))