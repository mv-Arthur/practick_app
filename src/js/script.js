let money, time;

function start(){
    money = +prompt('Ваш бюджет за месяц?');
    time = prompt('введите дату в формате YYY-MM-DD');

    while(isNaN(money) || money=="" || money == null){
        money = +prompt('Ваш бюджет за месяц?');
    }
}
start();



let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};



function chooseExpances() {
    for (let i=0; i < 2; i++){
    
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = prompt('Во сколько обойдется?', '');
     
         if ((typeof(a)) === 'string' && (typeof (a)) !=null && (typeof(b)) !=null && a != '' && b !='' && a.length < 50) {
             console.log("done");
             appData.expenses [a] = b;
         } else {
             i=i-1;
         }
     }
}

chooseExpances();

appData.moneyPerDay = (appData.budget / 30).toFixed();

alert("ежедневыный бюджет: "  + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("минимальный уровень достатка");
} else if (appData.moneyPerDay >100 && appData.moneyPerDay<2000) {
    console.log('средний уровень достатка');
} else if (appData.moneyPerDay >2000) {
    console.log('высокий уровень достатка');
} else {
    console.log('упс, произошла ошибка');
} 

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('какова сумма накоплений?'),
        percent = +prompt('под какой процент');

        appData.monthIncome = save/100/12*percent;
        alert('доход в месяц с вашего депозита: ' + (appData.monthIncome).toFixed());
    }
}

checkSavings();
