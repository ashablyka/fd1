var name = 'Andrei';
var age = 65;
if (age < 18) {
  console.log('Вы несовершеннолетний');
} else {
  console.log('Вы совершеннолетний'); }
if (age < 21) {
  console.log('Вам нельзя употреблять алкоголь');
} else {
  console.log('Вам можно употреблять алкоголь'); }
if (age >= 65) {
  console.log('Вы пенсионер');
}



var house = [];
house[0] = ["комната", "кухня", "санузел"];
house[1] = ["гостиная", "спальня", "санузел", "кухня"];
house[2] = ["гостиная", "спальня", "детская", "кухня", "санузел"];
console.log(house);
console.log(house[0].length);
console.log(house[0][2]);
console.log(house[0][3]);