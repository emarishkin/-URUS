
document.getElementById("main-form").addEventListener("submit",checkForm);


function checkForm(event){
    event.preventDefault();
    let element=document.getElementById("main-form");

    let name = element.name.value;
    let number = element.number.value;
    let city = element.city.value;


    let fail = ""


    if(name= "" ||number== "" ||city== ""){
        fail="Заполните все поля";
    }else if(name.length<=1||name.length>10){
        fail="Введите коректное имя";
    }else if(number.length!=11){
        fail="Введите номер телефона с 8";
    }


    if(fail != ""){
    document.getElementById("error").innerHTML= fail 
    } else {
        alert("Все данные коректно заполнены");
        window.location="https://github.com/emarishkin"
    }
}