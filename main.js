const amount = document.getElementById("amount");
const shadeA = document.getElementById("shadeA");
const shadeB = document.getElementById("shadeB");
const shadeC = document.getElementById("shadeC");
const shadeD = document.querySelector("#shadeD");
const buttonS = document.querySelector("#btn");
const year = document.querySelector("#subject");
// const litresA = document.querySelector("#litresA");
const litreA = document.getElementById("litreA");
const litreB = document.getElementById("litreB");
const litreC = document.getElementById("litreC");
const litreD = document.querySelector("#litreD");

const amountA = document.querySelector(".amountA");
const amountB = document.querySelector(".amountB");
const amountC = document.querySelector(".amountC");
const amountD = document.querySelector(".amountD");

const total1 = document.querySelector("#total1");
const total2 = document.querySelector("#total2");
const total3 = document.querySelector("#total3");
const total4 = document.querySelector("#total4");

const incomeBtn = document.querySelector(".right-btn");
const pdtBtn = document.querySelector(".left-btn");
let input, filter, table, tr, td, i, txtValue, prod;
table = document.getElementById("myTable");
prod = document.getElementById("myProd");
tr = table.getElementsByTagName("tr");

const filterFunction = () => {
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};

incomeBtn.addEventListener("click", () => {
  incomeBtn.classList.add("left-btn");
  pdtBtn.classList.remove("left-btn");
  pdtBtn.classList.add("right-btn");
  table.style.display = "block";
  prod.style.display = "none";
});

pdtBtn.addEventListener("click", () => {
  pdtBtn.classList.add("left-btn");
  incomeBtn.classList.remove("left-btn");
  pdtBtn.classList.add("right-btn");
  table.style.display = "none";
  prod.style.display = "block";
});

let modalBtn = document.getElementById("modal-btn");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".close-btn");
modalBtn.onclick = function () {
  modal.style.display = "block";
};

window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

buttonS.addEventListener("click", (e) => {
  modal.style.display = "none";
  e.preventDefault();

  totalProduction();
  console.log(too);
  // alert(too)
});

let milkAmount = amount.value;

let arr = []

const totalProduction = () => {
  let shade1 = shadeA.value;
  let shade2 = shadeB.value;
  let shade3 = shadeC.value;
  let shade4 = shadeD.value;
  litreA.textContent = shade1;
  litreB.textContent = shade2;
  litreC.textContent = shade3;
  litreD.textContent = shade4;

  amountA.textContent = milkAmount;
  amountB.textContent = milkAmount;
  amountC.textContent = milkAmount;
  amountD.textContent = milkAmount;

  let t1 = total1.textContent = milkAmount * shade1;
  let t2 = total2.textContent = milkAmount * shade2;
  let t3 = total3.textContent = milkAmount * shade3;
  let t4 = total4.textContent = milkAmount * shade4;

  arr.push(t1, t2, t3, t4)
};

let months = {
  January: 31,
  February: 29,
  March: 31,
  April: 30,
  May: 31,
  June: 30,
  July: 31,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 31,
};

let incomeOverTime = (milkAmount) => {

    let sumLitres = arr.reduce(function (a, b) {
        return a + b;
    }, 0);

  let week = 7;
  let year = 365;

  weeklyTotal = week * milkAmount * milkAmount;
  yearlyTotal = year * milkAmount * milkAmount;

//   let div3 = document.createElement("div");
//   div3.innerHTML = `<p>Your weekly income will be Ksh ${weeklyTotal}</p>`;

//   weeklyIncome.appendChild(div3);

//   let div4 = document.createElement("div");
//   div4.innerHTML = `<p>Your yearly income will be Ksh ${yearlyTotal}</p>`;

//   weeklyIncome.appendChild(div4);

  // Iterates over the months object and prints the total amount of money to be made
  for (const [key, value] of Object.entries(months)) {
    let div2 = document.createElement("div");
    div2.innerHTML = `<p>Your total income for  ${key} is ${
      value * milkAmount * milkAmount
    }</p>`;

    monthlyIncome.appendChild(div2);
  }
};

// let milkAmount = 0;

// Calculates total production in litres per day
// let totalProduction = ()=>{
//     for (let i = 0; i < shedsProduction.length; i++){
//         milkAmount = milkAmount + shedsProduction[i];
//         console.log("Your production in Shed " +  shedsName[i] + " is " + shedsProduction[i] + " litres per day")

//         let div = document.createElement('div');
//         div.innerHTML = `<p>Your production in Shed ${shedsName[i]} is ${shedsProduction[i]}</p>`;

//         shedsOutput.appendChild(div);

//     }
//     console.log("\n");
//     console.log("The total production is " + milkAmount + " litres per day\n");
//     return milkAmount;

// }

const too = subject.addEventListener("change", (event) => {
  let me = event.target.value;
  console.log(me);
  return me;
});

//   alert(too)

let litres = [510, 308, 486, 572];
let sheds = ["A", "B", "C", "D"];
let amountLtr;

// const totalProduction = () => {
//     for (let i = 0; i < sheds.length; i++){
//         amountLtr = amountLtr + litres[i];

//         console.log(amountLtr)
//         // let div = document.createElement('div');
//         // div.innerHTML = `<p>Your production in Shed ${shedsName[i]} is ${shedsProduction[i]}</p>`;

//         // shedsOutput.appendChild(div);

//     }

//     return amountLtr;
// }
