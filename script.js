// Hello, {name} {lastname}.

// Your yearly income is ${amount} and you must pay {percents}% of income taxes. Which is ${taxesTotal} in total.
// You must pay the bills till {year} {month_name} {day}.

// Best regards, "Tax Reminder" Inc.


const firstName = 'Artur';
const lastName = 'Ingelevic';

const amount = 1000;
const percents = 15;
const taxesTotal = 1000*15/100;

const year = "2022";
const month = "Feb";
const day = "28";

const emailText = `Hello, ${firstName} ${lastName}.\nYour yearly income is $${amount} and you must pay ${percents}% of income taxes. Which is $${taxesTotal} in total.\nYou must pay the bills till ${year} ${month} ${day}.\nBest regards, "Tax Reminder" Inc.`;

console.log(emailText);
