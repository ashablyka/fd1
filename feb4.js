console.log(String(0.000001));
console.log(String(0.0000001));
console.log(parseInt(0.000001));
console.log(parseInt(0.0000001));
/*function getMax(a,b,c) {
  if (a > b) {
    if (a > c) {
      return a;
    }
    else return c;
    }
  else if (b > c) {
         return b;
       }
       else return c;
}  
    

var x = prompt('Введите x');
var y = prompt('Введите y');
var z = prompt('Введите z');
console.log(getMax(x,y,z));

abc='x';
console.log(window.abc);

var human = {
  height: '185cm',
  weight: '80kg',
  colorSkin: 'white',
  colorhair: 'black',
};

human.age = 28;*/ 

/*var data = { };
data.surname = prompt('Введите фамилию');
data.name = prompt('Введите имя');
data.middlename = prompt('Введите отчество');
data.age = prompt('Введите возраст');
console.log(data);*/

var numbers = [ ];
var even = [ ];
var odd = [ ];
for (i=0; i<10; i++) {
  numbers[i] = i;
  if (i%2===0) {
    even[even.length] = i;
  }
  else odd[odd.length] = i;
}
console.log(even, odd);












