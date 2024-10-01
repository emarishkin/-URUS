alert( null || 2 || undefined );

alert( alert(1) || 2 || alert(3) );

alert( 1 && null && 2 );

alert( null || 2 && 3 || 4 );

let value = NaN;
value &&= 10;
value ||= 20;
value &&= 30;
value ||= 40;
alert(value);

let age=18
if(14<=age<=90){
alert(age)
}

let userName = prompt("Кто там?", '');

if (userName === 'Админ') {

  let pass = prompt('Пароль?', '');

  if (pass === 'Я главный') {
    alert( 'Здравствуйте!' );
  } else if (pass === '' || pass === null) {
    alert( 'Отменено' );
  } else {
    alert( 'Неверный пароль' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}