const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// 1.สร้างตัวแปร สำหรับการนับ
// 2.สร้างลูปในการนับ
// 3.ลูปเริ่มนับจากตัวแรก ไปจนถึงตัวสุดท้าย
// 4.เช็คค่าในรอบนั้นๆ ว่ามากกว่า 70 ไหม
// 5.ถ้ามากกว่า 70 ก็ให้ตัวนับ +1
// 6. วนไปเรื่อยๆ จนหมด Array
// 7.เช็คว่า ตัวนับ ห้องนั้นๆ ผ่านเกณฑ์ไหม (ต้องมากกว่า 5 คน)

let countRoom1 = 0;
let countRoom2 = 0;
let countRoom3 = 0;
let order = 0;
// function thank (name) {
//   return "Thank you,"+ name
// }

// function message (callbackOperation,name) {
//   return callbackOperation(name)
// }

function checkScore(passScore, order) {
  if (passScore >= 5) {
    console.log(`นักเรียนห้องที่ ${order} ผ่านเกณฑ์ ✅`);
  } else if (passScore < 5) {
    console.log(`นักเรียนห้องที่ ${order} ไม่ผ่านเกณฑ์ ❌`);
  }
}

function countStudent(number, room, callback) {
  for (let i = 0; i < room.length; i++) {
    if (room[i] > 70) {
      number = number + 1;
    }
  }
  order = order + 1;
  callback(number, order);
}

countStudent(countRoom1, studentScoresRoom1, checkScore);
countStudent(countRoom2, studentScoresRoom2, checkScore);
countStudent(countRoom3, studentScoresRoom3, checkScore);
