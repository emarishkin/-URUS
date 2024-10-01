
let name = "Ilya";
alert( `hello ${1}` ); // ?
alert( `hello ${"name"}` ); // ?
alert( `hello ${name}` ); // ?

let age = prompt('Сколько тебе лет?', "");
alert(`Тебе ${age} лет!`);

let test = prompt("Test", "");

let isBoss = confirm("Ты здесь главный?");
alert( isBoss );

let x = 1;
x = -x;
alert( x );

let m = 1, y = 3;
alert( y - m );

alert( 2 ** 2 ); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2⁴ = 16

let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?

let a = 2;
let x = 1 + (a *= 2);

"" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2

let k = +prompt("Первое число?", 1);
let z = +prompt("Второе число?", 2);
alert(a + b);

let l = prompt("Первое число?", 1);
let zy = prompt("Второе число?", 2);
alert(a + b); // 12

