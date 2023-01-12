export default function Exercises() {
  function findMax(a, b) {
    return Math.max(a, b);
  }

  console.log(findMax(1, 2));

  function findNumberInArray(arr, num) {
    for (let i = 0; i < arr.length; i++) {
      if (num === arr[i]) {
        return i;
      }
    }
    return -1;
  }

  const a = [1, 2, 4, 5, 6 , 7];
  const b = ["a", "b", "c", "d"];

  console.log(findNumberInArray(a, 6)); // -1
  console.log(findNumberInArray(a, 4)); // 2
  console.log(findNumberInArray(b, "a")); // 0
  console.log(findNumberInArray(b, "e")); // -1

  function randomNumber(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    const c = Math.floor(Math.random() * (max - min + 1) + min);
    return c;
  }

  console.log(randomNumber(2, 5)); // 3

  function findAverage (arr) {
    let sum = 0
    arr.map(n => {
        sum += n  
    })
    return sum / arr.length
  }

  console.log(findAverage(a)) // 3

  function strToLowerCase(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].toUpperCase()
    }
    return arr
  }
  console.log(b)
  console.log(strToLowerCase(b)) // ["A", "B", "C", "D"]

  return (
    <div>
      <h1>Day-41-Exercises</h1>
    </div>
  );
}
