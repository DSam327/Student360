document.getElementById('removeButton').addEventListener('click', function() {
	var removeTimeSlot = document.getElementById('removeTimeSlot').value;
	var rows = document.querySelectorAll('tbody tr');
  
	if (removeTimeSlot && confirm('Are you sure you want to remove this time slot?')) {
	  rows.forEach(function(row) {
		var cell = row.querySelector('td:nth-child(' + removeTimeSlot + ')');
		cell.textContent = '';
	  });
	}
  
	document.getElementById('removeTimeSlot').selectedIndex = 0;
  });
  