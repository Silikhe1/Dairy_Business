const amount = document.getElementById("amount");
const shadeA = document.getElementById("shadeA");
const shadeB = document.getElementById("shadeB");
const shadeC = document.getElementById("shadeC");
const shadeD = document.querySelector("#shadeD");
const buttonS = document.querySelector("#btn");
const year = document.querySelector("#subject");
// const modal-clo = document.querySelector(".modal");
const litresA = document.querySelector("#litresA");


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
        if (txtValue.toUpperCase().indexOf(filter)>-1){
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
          
        }
      }
    }
  }
  
  incomeBtn.addEventListener("click", ()=>{
      incomeBtn.classList.add("left-btn");
      pdtBtn.classList.remove("left-btn");
      pdtBtn.classList.add("right-btn");
      table.style.display = "block"
      prod.style.display = "none"
   
    //   result.textContent = `You like ${event.target.value}`;
alert()
  })

  pdtBtn.addEventListener("click", ()=>{
    pdtBtn.classList.add("left-btn");
    incomeBtn.classList.remove("left-btn");
    pdtBtn.classList.add("right-btn");
    table.style.display = "none"
    prod.style.display = "block"
})


let modalBtn = document.getElementById("modal-btn")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")
modalBtn.onclick = function(){
  modal.style.display = "block"
}
 
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
}



buttonS.addEventListener("click", (e)=>{
    modal.style.display = "none"
    e.preventDefault()
    // totalProduction()
    console.log(too)
    alert(too)

})


// let months = {
//      January: 31,
//      February: 29,
//      March: 31,
//      April: 30,
//      May: 31, 
//      June: 30, 
//      July: 31,
//      August: 31,
//      September: 30,
//      October: 31,
//      November: 30,
//      December: 31
//   }

// let selling_price = amount.value

//   let incomeOverTime = (selling_price) => {      
    
//     let weeklyTotal = 1;
//     let yearlyTotal = 1;

//     weeklyTotal = week * selling_price * totalLitres;
//     yearlyTotal = year * selling_price * totalLitres;
    

//     let div3 = document.createElement('div');
//         div3.innerHTML = `<p>Your weekly income will be Ksh ${weeklyTotal}</p>`;

//         weeklyIncome.appendChild(div3);

    
//     let div4 = document.createElement('div');
//         div4.innerHTML = `<p>Your yearly income will be Ksh ${yearlyTotal}</p>`;

//         weeklyIncome.appendChild(div4);

//     // Iterates over the months object and prints the total amount of money to be made
//     for (const [key, value] of Object.entries(months)) {

//         let div2 = document.createElement('div');
//         div2.innerHTML = `<p>Your total income for  ${key} is ${value * totalLitres * selling_price}</p>`;

//         monthlyIncome.appendChild(div2);
//       }    
// }

// let totalLitres = 0;

// Calculates total production in litres per day
// let totalProduction = ()=>{
//     for (let i = 0; i < shedsProduction.length; i++){
//         totalLitres = totalLitres + shedsProduction[i];
//         console.log("Your production in Shed " +  shedsName[i] + " is " + shedsProduction[i] + " litres per day")

//         let div = document.createElement('div');
//         div.innerHTML = `<p>Your production in Shed ${shedsName[i]} is ${shedsProduction[i]}</p>`;

//         shedsOutput.appendChild(div);

//     }
//     console.log("\n");
//     console.log("The total production is " + totalLitres + " litres per day\n");
//     return totalLitres;
   
// }

const too = subject.addEventListener('change', (event) => {
    let me = event.target.value;
    console.log(me)
    return me;  
  });

//   alert(too)

let 
const totalProduction = () => {
    for (let i = 0; i < shedsProduction.length; i++){
        totalLitres = totalLitres + shedsProduction[i];

        let div = document.createElement('div');
        div.innerHTML = `<p>Your production in Shed ${shedsName[i]} is ${shedsProduction[i]}</p>`;

        shedsOutput.appendChild(div);

    }

    return totalLitres;
}