let obj = {
    for: 1,
    let: 2,
    return: 3
  };
  
  alert( obj.for + obj.let + obj.return );  // 6

//Создайте пустой объект user.
//Добавьте свойство name со значением John.
//Добавьте свойство surname со значением Smith.
//Измените значение свойства name на Pete.
//Удалите свойство name из объекта.

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//Интересно очень
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  let sum=0
  for (let key in salaries){
    sum += salaries[key];
  }
  alert(sum);

  
 //оч интересно понятно вернусь  
  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }
  multiplyNumeric(menu)
  alert(menu.width)