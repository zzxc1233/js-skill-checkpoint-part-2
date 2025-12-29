const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้

function totalScore(students) {
  return students.filter((scores) => scores.score > 50)
  .map((scores) => scores.score +((scores.score*10) /100 ))
  .reduce((acc , scores) => acc + scores , 0)
  
}

console.log(`Total score is ${totalScore(students)}`);


