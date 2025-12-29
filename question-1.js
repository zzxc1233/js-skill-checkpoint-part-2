const techupPeople = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 16 },
];

const techcoolPeople = [
  { name: "David", age: 25 },
  { name: "Eve", age: 19 },
];

// เริ่มเขียนโค้ดตรงนี้
//รวมค่า array ให้เป็นก้อนเดียว
// filter หา อายุน้อยกว่า 20
let allPeople = [...techupPeople,...techcoolPeople]

function filterUnder20(allPeople) {
  return allPeople.filter((person) => person.age < 20)
}



console.log(filterUnder20(allPeople));