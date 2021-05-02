function filterFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter)>-1) // Tip: the indexOf() method returns the indexes at which a given element can be found in the array, or -1 if it is not present. In other words, it checks wether the text in filter is also present in txtvalue - our array.
          
        {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
          //tip: If displays set to "none" then nothing will be shown.
          
        }
      }
    }
  }
  

  