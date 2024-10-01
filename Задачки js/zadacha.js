let i1 = 0;
while (i1 < 3) { // выводит 0, затем 1, затем 2
  alert( i1 );
  i1++;
}

let i = 3;
while (i) { // когда i будет равно 0, условие станет ложным, и цикл остановится
  alert( i );
  i--;
}

let i2 = 0;
do {
  alert( i2 );
  i2++;
} while (i2 < 3);

let i3 = 0;

for (; i3 < 3;) {
  alert( i3++ );
}

let i5
for(i5=2;i5<11;i5++){
    if(i5%2==0){
        alert(i5)
    }
}

let i7=0
do {
    alert( `number ${i7}!` );
    i7++
} while(i7<3)


    let num;
do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);


let n = 10;
nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  alert( i ); // простое число
}