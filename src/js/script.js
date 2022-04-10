// let money, time;

// function start(){
//     money = +prompt('Ваш бюджет за месяц?');
//     time = prompt('введите дату в формате YYY-MM-DD');

//     while(isNaN(money) || money=="" || money == null){
//         money = +prompt('Ваш бюджет за месяц?');
//     }
// }
// start();



// let appData = {
//     budget: money,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     timeData: time,
//     savings: true
// };



// function chooseExpances() {
//     for (let i=0; i < 2; i++){
    
//         let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//             b = prompt('Во сколько обойдется?', '');
     
//          if ((typeof(a)) === 'string' && (typeof (a)) !=null && (typeof(b)) !=null && a != '' && b !='' && a.length < 50) {
//              console.log("done");
//              appData.expenses [a] = b;
//          } else {
//              i=i-1;
//          }
//      }
// }

// chooseExpances();

// function detectDayBudget() {
//     appData.moneyPerDay = (appData.budget / 30).toFixed();
//     alert('заработок за день ' + appData.moneyPerDay);
// }
// detectDayBudget();


// function detectLevel() {
//     if(appData.moneyPerDay < 100) {
//         console.log("минимальный уровень достатка");
//     } else if (appData.moneyPerDay >100 && appData.moneyPerDay<2000) {
//         console.log('средний уровень достатка');
//     } else if (appData.moneyPerDay >2000) {
//         console.log('высокий уровень достатка');
//     } else {
//         console.log('упс, произошла ошибка');
//     } 
// }
// detectLevel();


// function checkSavings() {
//     if (appData.savings == true) {
//         let save = +prompt('какова сумма накоплений?'),
//         percent = +prompt('под какой процент');

//         appData.monthIncome = save/100/12*percent;
//         alert('доход в месяц с вашего депозита: ' + (appData.monthIncome).toFixed());
//     }
// }
// checkSavings();


let optionalExpenses = {
    qest : {},
    qest1 : {}
};

function chooseOptExpenses() {
    for (let i=0; i<2; i++) {
        if (i==0) {
            let ask1 = +prompt('статья необязательных расходов');   
            optionalExpenses.qest = ask1;
        } else if(i==1) {
            let ask2 = +prompt('статья необязательных расходов');   
            optionalExpenses.qest1 = ask2;
        }
    }
}
chooseOptExpenses();

console.log(optionalExpenses);








