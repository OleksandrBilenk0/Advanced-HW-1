
const BREAD = 15.678;
const CHEESE = 123.965;
const APPLES = 90.2345;
console.log("Хліб:", BREAD, "Сир:", CHEESE, "Яблука:", APPLES);

const MATH_MAX = Math.max(BREAD, CHEESE, APPLES);
console.log("Максимальне число:", MATH_MAX);

const MATH_MIN = Math.min(BREAD, CHEESE, APPLES);
console.log("Мінімальне число:", MATH_MIN);

const TOTAL_PRICE = (BREAD + CHEESE + APPLES);
console.log("Загальна сума:", TOTAL_PRICE);

const WHOLE_NUMBERS = Math.floor(TOTAL_PRICE);
console.log("Без копійок:", WHOLE_NUMBERS);

const AMOUNT_ROUNDED_TO_HUNDREDS = Math.round(parseFloat(TOTAL_PRICE) / 100) * 100;
console.log("Округлено до сотень:", AMOUNT_ROUNDED_TO_HUNDREDS);

if (WHOLE_NUMBERS % 2 == 0){
    console.log("Парне число:", true);
}
else {
    console.log("Не парне число:", false);
}

const CHANGE = 500 - TOTAL_PRICE;
console.log("Решта з 500:", CHANGE);

const MIDDLE_PRICE = (TOTAL_PRICE / 3).toFixed(2);
console.log("Середня ціна:", MIDDLE_PRICE);


const DISCOUNT = Math.random()*100;
console.log("Випадкова знижка:", Math.round(DISCOUNT),"грн.");

const PRICE_WITH_DISCOUNT = (TOTAL_PRICE).toFixed(2) - Math.round(DISCOUNT);
console.log("Сума з урахуванням знижки:", PRICE_WITH_DISCOUNT);

const INCOME = (TOTAL_PRICE).toFixed(2) / 2 - ((TOTAL_PRICE).toFixed(2) - Math.round(DISCOUNT));
console.log("Чистий прибуток:", INCOME);


//  Advanced

document.writeln("Максимальне число: ", MATH_MAX);
document.writeln("<br>")
document.writeln("Мінімальне число: ", MATH_MIN);
document.writeln("<br>")
document.writeln("Загальна сума: ", TOTAL_PRICE);
document.writeln("<br>")
document.writeln("Без копійок: ", WHOLE_NUMBERS);
document.writeln("<br>")
document.writeln("Округлено до сотень:", AMOUNT_ROUNDED_TO_HUNDREDS);
document.writeln("<br>")
document.writeln("Не парне число: ", false);
document.writeln("<br>")
document.writeln("Решта з 500: ", CHANGE);
document.writeln("<br>")
document.writeln("Середня ціна: ", MIDDLE_PRICE);
document.writeln("<br>")
document.writeln("Випадкова знижка: ", Math.round(DISCOUNT) + "%");
document.writeln("<br>")
document.writeln("Сума з урахуванням знижки: ", PRICE_WITH_DISCOUNT);
document.writeln("<br>")
document.writeln("Чистий прибуток: ", INCOME);