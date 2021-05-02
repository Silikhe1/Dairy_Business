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

