let moneyUsed = document.getElementById('moneyUsed');
let negativeMoney = document.getElementById('negativeMoney');
let moneyTotals = 0;//entire wallet
//tells moneyTotal to increment up 1 and update in DOM
function moneyTotal(){
    moneyTotals++
    moneyUsed.textContent = moneyTotals
};

negativeMoney.addEventListener('click',moneyTotal);//makes the button click and tells it to work from the function

let generate20 = document.getElementById('generate20');//gets element from DOM(HTML)
let timerId = undefined;//makes sure only one timer runs
let moneyGeneratedPS = 0;//Count of money generated per second
function generateMoneyCPS(){//Tells it to generate the money 
        moneyTotals = moneyTotals + moneyGeneratedPS//adds to the money Total
        moneyUsed.textContent = moneyTotals//updates element in DOM(HTML)
};

function addMoney(){
    if (moneyTotals >= 5 ){
         moneyTotals = moneyTotals - 5
         moneyUsed.textContent = moneyTotals
         moneyGeneratedPS = moneyGeneratedPS + 20 
         if (timerId == undefined){
          timerId = setInterval(generateMoneyCPS,1000)
         }
         if (moneyTotals >= 10){
            moneyTotals = moneyTotals - 10
            moneyUsed.textContent = moneyTotals
            moneyGeneratedPS = moneyGeneratedPS + 25
            if (timerId == undefined){
                timerId = setInterval(generateMoneyCPS,1000)
            }
            if (moneyTotals >= 50){
                moneyTotals = moneyTotals - 50
                moneyUsed.textContent = moneyTotals
                moneyGeneratedPS = moneyGeneratedPS + 500
                if (timerId == undefined){
                    timerId = setInterval(generateMoneyCPS,1000)
                }
        }
}}};
generate20.addEventListener('click',addMoney);


let generate25 = document.getElementById('generate25');
let generate500 = document.getElementById('generate500');

generate25.addEventListener('click',addMoney);
generate500.addEventListener('click',addMoney);

