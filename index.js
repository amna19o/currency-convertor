#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, //base curreny
    EUR: 0.92,
    INR: 83.30,
    PKR: 277.54,
    KWD: 0.31,
    SAR: 3.75
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "Select the currency which you want your amount to convert from : ",
        type: "list",
        choices: ["USD", "EUR", "INR", "PKR", "KWD", "SAR"]
    },
    {
        name: "to",
        message: "Select the currency which you want your amount to convert in : ",
        type: "list",
        choices: ["USD", "EUR", "INR", "PKR", "KWD", "SAR"]
    },
    {
        name: "amount",
        message: "Plz enter your amount",
        type: "number"
    }
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount; // base currency --whatever the currency is it will ne first converted into base currency
let convertedAmount = baseAmount * toAmount; // --here it will be converted into the currency, the user is asking for  
console.log(convertedAmount);
