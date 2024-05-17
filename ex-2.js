//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let passed = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 70) {
      passed++
    }
    array[i] = operation(array[i])
  }
  return passed >=5;
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here
let scoreRoom1Result = atLeastFive(studentScoresRoom1,)
let scoreRoom2Result = atLeastFive(studentScoresRoom2,)
let scoreRoom3Result = atLeastFive(studentScoresRoom3,)


console.log(`นักเรียนห้องที่ 1 ${scoreRoom1Result ? 'ผ่านเกณฑ์ ✅' : 'ไม่ผ่านเกณฑ์ ❌'}`)
console.log(`นักเรียนห้องที่ 2 ${scoreRoom2Result ? 'ผ่านเกณฑ์ ✅' : 'ไม่ผ่านเกณฑ์ ❌'}`)
console.log(`นักเรียนห้องที่ 3 ${scoreRoom3Result ? 'ผ่านเกณฑ์ ✅' : 'ไม่ผ่านเกณฑ์ ❌'}`)
