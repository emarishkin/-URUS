5 > 4 
"ананас" > "яблоко" 
"2" > "12"
undefined == null
undefined === null 
null == "\n0\n" 
null === +"\n0\n" 

let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');
if (year == 2015) alert( 'Вы правы!' );

let value = prompt('Какое "официальное" название JavaScript?', '');
if (value == 'ECMAScript') {
  alert('Верно!');
} else {
  alert('Не знаете? ECMAScript!');
}

let value1 = prompt('Введите число', "");

if (value1 > 0) {
  alert( 1 );
} else if (value1 < 0) {
  alert( -1 );
} else {
  alert( 0 );
}

let result
let a=1
let b=2
 result = (a + b < 4) ? 'Мало' : 'Много';
 alert(result);

 let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}

let message1 = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';