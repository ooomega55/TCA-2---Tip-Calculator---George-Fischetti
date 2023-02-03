// variables
let billAmount = 100; //inital bill
let serviceQuality = "Great"; //dependent for tip
let totalBillWithTip = null; //waiting for amount calculation
let numPeople = 2;  //number of people at table/eating

//If service quality is this, then bill+tip amount is this
if (serviceQuality === "Great") { //bill multiplied by tip percentage and added to initial bill
  totalBillWithTip = billAmount + billAmount*0.2;  
} else if (serviceQuality === "Good"){
  totalBillWithTip = billAmount + billAmount*0.15;
} else if (serviceQuality = "Terrible"){
  totalBillWithTip = billAmount + billAmount*.1;
} else {
  console.log('Make a damn decision')
}

//total bill + tip
console.log("Your total bill with the tip is $" + totalBillWithTip);  

// || userInput === "Good" || userInput === 'Terrible') 

//What each person owes for the bill
let tipPerPerson = (totalBillWithTip) / numPeople;
console.log('Each person pays $' + tipPerPerson)

//total tip
console.log('The total tip is $' + (totalBillWithTip - billAmount));