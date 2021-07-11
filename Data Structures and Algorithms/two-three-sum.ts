const twoSum = (arr: number[], target: number) => {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > target) {
      continue;
    }
    let need = target - arr[i];
    if (map[need]) {
      return [map[need], i];
    }
    map[arr[i]] = i;
  }
  return [];
};

const threeSum = (arr: number[], target: number) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > target) {
      continue;
    }
    let temp = [...arr];
    temp.splice(i, 1);
    const two = twoSum(temp, target - arr[i]);
    if (two.length > 1) {
      let r = [i];
      two.forEach((item) => {
        if (item < i) {
          r.unshift(item);
        } else {
          r.push(item + 1);
        }
      });
      return r;
    }
  }
  return [];
};
console.log(threeSum([1, 2, 2, 5, 7, 9], 10));
