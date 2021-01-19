const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

//const dummyTransactions = [
 // {id: 1, text: "flower", amount: -20},
 // {id: 2, text: "Salary", amount: 300},
 //// {id: 3, text: "Book", amount: -10},
 // {id: 4, text: "Camera", amount: 159}
 // ];


//setting localstorage for dummy transactions
const localStorageTransactions = JSON.parse(localStorage.getItem("transaction"))

let transactions = localStorage.getItem("transaction") !== null ? localStorageTransactions : [];


// 1. init app
function init(){
  list.innerHTML = " ";
  transactions.forEach(addTransactionDOM);
}

init();

//2 Add transaction to DOM list
function addTransactionDOM(transaction){
  const sign = transaction.amount < 0 ? "-" : "+";
  const item = document.createElement("li");
  //Add class based on value
  item.classList.add(transaction.amount < 0 ? "minus" : "plus");

  item.innerHTML = `
  ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span>
  <button class="delete-btn">x</button>
  `
 list.appendChild(item);

}

//3 Add new transactions
function addNewTransaction(e) {
  e.preventDefault();

  //If else to check if the text and amount values are empty or not
  if(text.value.trim() === "" || amount.value.trim === " "){

    alert("Please add a text and amount");
  } else {
    const transaction = {
      id: generateId,
      text: text.value,
      amount: +amount.value
    }

    console.log(transaction);
    transactions.push(transaction);
    addTransactionDOM(transaction);

    //updateValues
    updateValues();

    
  }
}
//4 Generate random id
function generateId(){
  return Math.floor(Math.random() * 10000000);
}
form.addEventListener("submit", addNewTransaction);
