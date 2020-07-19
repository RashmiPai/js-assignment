/* You are managing a sales department for your company , you want to reward your employees based on the sales made by them during 
the year. The criteria is as follows :
          1. Sales from 0-5000 : 2%
          2. Sales from 5001-10000 : 5%
          3. Sales from 10001-20000 : 7%
          4. Above 20000 : 10%
Then log the total commission earned by him. */

let sal = 50000;
let sales = Number(prompt("What is the sales made by the employee?",0));
let com; // variable for commission
if(sales<=5000) {
    com = (2/100)*10; // for 2% commission
} else if(sales>=5001 && sales<=10000) {
    com = (5/100)*10; // for 5% commission
} else if(sales>10001 && sales<=20000) {
    com = (7/100)*10; // for 7% commission
} else {
    com = (10/100)*10; // for 10% commission
}
sal += com;
console.log(`Total commision ${com}`);
console.log(`Total salary after commission ${sal}`);