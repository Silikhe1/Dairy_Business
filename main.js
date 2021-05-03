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

const head = document.querySelector("#myTable");

let milkAmount = amount.value;

let arrMilk = [];
let drop;
let summ = 0;

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
  incomeOverTime();
  totalProduction();

  subject.addEventListener("change", (event) => {
    let me = event.target.value;
    if (me === "normal") {
      drop += 0;
    } else {
      drop += 1;
    }
    console.log(drop);
  });
  // alert(too)
});

// let milkAmount = amount.value;

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

  let t1 = (total1.textContent = milkAmount * shade1);
  let t2 = (total2.textContent = milkAmount * shade2);
  let t3 = (total3.textContent = milkAmount * shade3);
  let t4 = (total4.textContent = milkAmount * shade4);

  //   for(let i; i < arrMilk.length; i++){
  //       summ += arrMilk[i]
  //   }
  summ += t1 + t2 + t3 + t4;
    arrMilk.push(t1, t2, t3, t4);
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

let incomeOverTime = () => {
    let t1 = (total1.textContent = milkAmount * shade1);
  let t2 = (total2.textContent = milkAmount * shade2);
  let t3 = (total3.textContent = milkAmount * shade3);
  let t4 = (total4.textContent = milkAmount * shade4);

  let summ = t1 + t2 + t3 +t4

  let milkAmount = amount.value;
  console.log(arrMilk);

//   console.log(milkAmount);

//   let sumLitres = arrMilk.reduce((a, b)=> {
//     console.log(a + b);
//     return a + b;
//   }, 0);


//   var total = 0;
//   for (var i in arrMilk) {
//     total += arrMilk[i];
//   }

  //   alert(total);
  let week = 7;
  let year = 365;

  let date = new Date();
  let newMonth = date.toLocaleString("default", { month: "long" });
  //   alert(date.toLocaleString('default', { month: 'long' }))

  let weeklyTotal = week * milkAmount * summ;
  let yearlyTotal = year * milkAmount * summ;

  //   alert(weeklyTotal);

  for (const [key, value] of Object.entries(months)) {
    let tr = document.createElement("tr");
    // tr.classList.add("");
    tr.innerHTML = `
    <tr>
    <td>
    ${key}
    </td>
    <td>${summ}</td>
    <td>
    ${milkAmount}
    </td>
    <td>
    ${value * milkAmount}
    </td>
    </tr>
    
`;

    // console.log("litres is " + summ);
    // console.log("pert/lita is " + milkAmount);
    // console.log("total is " + value * summ * milkAmount);
    head.appendChild(tr);
  }
};
