window.addEventListener('scroll', function() {
    var derElement = document.getElementById('der-element');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    derElement.style.transform = 'translateY(' + scrollTop + 'px)';
  });

  
  function addTicket() {
    var seatSelect = document.getElementById("seat");
    var selectedSeat = seatSelect.value;
    
    if (selectedSeat !== "") {
      var table = document.getElementById("ticket-table");
      var row = table.insertRow();
      
      var seatCell = row.insertCell(0);
      seatCell.innerHTML = selectedSeat;
      
      var actionsCell = row.insertCell(1);
      actionsCell.innerHTML = "<button class='button' onclick='deleteTicket(this)'>Eliminar</button>";
      
      seatSelect.value = "";
    }
  }
  
  function deleteTicket(button) {
    var row = button.parentNode.parentNode;
    var table = row.parentNode;
    
    table.deleteRow(row.rowIndex);
  }