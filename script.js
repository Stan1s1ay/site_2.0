let tg = window.Telegram.WebApp; //получаем объект webapp телеграма

let item = {
    "burger":0,
    "fries":0,
    "coke":0
};


let total = 0;

let burger = document.getElementById("burger");
let fries = document.getElementById("fries");
let coke = document.getElementById("coke");


tg.expand(); //расширяем на все окно

tg.MainButton.text = "Changed Text"; //изменяем текст кнопки
tg.MainButton.setText("Changed Text1"); //изменяем текст кнопки иначе
tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
tg.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры



function createPlusButton(productName) {
    var plusButton = document.createElement("button");
    plusButton.innerHTML = "+";
    plusButton.classList.add("btn_plus");
    plusButton.id = "btn_" + productName + "_plus";
    return plusButton;
}

// Функция для создания кнопки "-"
function createMinusButton(productName) {
    var minusButton = document.createElement("button");
    minusButton.innerHTML = "-";
    minusButton.classList.add("btn_minus");
    minusButton.id = "btn_" + productName + "_minus";
    return minusButton;
}


function addButtonElements(parentElement, productName, price) {
    var plusButton = createPlusButton(productName);
    var priceSpan = document.createElement("span");
    priceSpan.classList.add("sum");
    priceSpan.innerHTML = price.toString()+" zl";
    var minusButton = createMinusButton(productName);

    parentElement.appendChild(minusButton);
    parentElement.appendChild(priceSpan);
    parentElement.appendChild(plusButton);
};

function addButtonElements(parentElement, productName, price) {
    var plusButton = createPlusButton(productName);
    var priceSpan = document.createElement("span");
    priceSpan.classList.add("sum");
    priceSpan.innerHTML = price.toString()+" zl";
    var minusButton = createMinusButton(productName);

    parentElement.appendChild(minusButton);
    parentElement.appendChild(priceSpan);
    parentElement.appendChild(plusButton);
};


function count(list) {
    var sum = 0;
    sum += list["burger"]*15.01;
    sum += list["fries"]*10.15;
    sum += list["coke"]*9.99;
    return sum;

};


burger.addEventListener("click", function(){
    var parentDiv = burger.parentElement;
    var price = 15.01;
    burger.classList.add("hidden");
    item["burger"] += 1;
    var sum = item["burger"]*price
    addButtonElements(parentDiv, "burger",sum);
    if (!tg.MainButton.isVisible) {

        tg.MainButton.setText("В корзине товаров на "+count(item)+" злотых. Оплатить");
        tg.MainButton.show();
    }
});










let btn = document.getElementById("btn"); //получаем кнопку скрыть/показать
btn.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
	if (tg.MainButton.isVisible){ //если кнопка показаana
		tg.MainButton.hide() //скрываем кнопку
	}
	else{ //иначе
		tg.MainButton.show() //показываем
	}
});


let btnED = document.getElementById("btnED"); //получаем кнопку активировать/деактивировать
btnED.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
    if (tg.MainButton.isActive){ //если кнопка показаna
        tg.MainButton.setParams({"color": "#E0FFFF"}); //меняем цвет
        tg.MainButton.disable(); //скрываем кнопку
    }
    else{ //иначе
        tg.MainButton.setParams({"color": "#143F6B"}); //меняем цвет
        tg.MainButton.enable() ; //показываем
    }
});

Telegram.WebApp.onEvent('mainButtonClicked', function() {
    tg.sendData("some string that we need to send");
    //при клике на основную кнопку отправляем данные в строковом виде
});


let usercard = document.getElementById("usercard"); //получаем блок usercard

let profName = document.createElement('p'); //создаем параграф
profName.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}
${tg.initDataUnsafe.user.username} (${tg.initDataUnsafe.user.language_code})`;
//выдем имя, "фамилию", через тире username и код языка
usercard.appendChild(profName); //добавляем

let userid = document.createElement('p'); //создаем еще параграф
userid.innerText = `${tg.initDataUnsafe.user.id}`; //показываем user_id
usercard.appendChild(userid); //добавляем
