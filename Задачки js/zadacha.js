let user = { name: 'John' };
let admin = user;
admin.name = 'Pete'; // изменено по ссылке из переменной "admin"
alert(user.name); // 'Pete', изменения видны по ссылке из переменной "user"



let user = {
    name: "John",
    age: 30
  };
  let clone = {}; // новый пустой объект
  // давайте скопируем все свойства user в него
  for (let key in user) {
    clone[key] = user[key];
  }
  // теперь clone это полностью независимый объект с тем же содержимым
  clone.name = "Pete"; // изменим в нём данные
  alert( user.name ); // все ещё John в первоначальном объекте



  let user = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
// копируем все свойства из permissions1 и permissions2 в user
Object.assign(user, permissions1, permissions2);
// теперь user = { name: "John", canView: true, canEdit: true }