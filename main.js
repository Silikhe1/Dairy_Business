const incomeBtn = document.querySelector(".right-btn");
const pdtBtn = document.querySelector(".left-btn");
var input, filter, table, tr, td, i, txtValue;
table = document.getElementById("myTable");
tr = table.getElementsByTagName("tr");

const filterFunction = () => {
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();

      for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter)>-1)
          
        {
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
  })

  pdtBtn.addEventListener("click", ()=>{
    pdtBtn.classList.add("left-btn");
    incomeBtn.classList.remove("left-btn");
    pdtBtn.classList.add("right-btn");
    table.style.display = "none"
})