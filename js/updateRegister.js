function displayEventDetails(select) {
	if (select.value!=0) {
		document.getElementById('oldDate').style.display='block';
		document.getElementById('oldTime').style.display='block';
		document.getElementById('oldVenue').style.display='block';
		document.getElementById('oldTeamA').style.display='block';
		document.getElementById('oldTeamB').style.display='block';
		document.getElementById('newDate').style.display='block';
		document.getElementById('newTime').style.display='block';
		document.getElementById('newVenue').style.display='block';
		document.getElementById('newTeamA').style.display='block';
		document.getElementById('newTeamB').style.display='block';
	}
	else {
		document.getElementById('oldDate').style.display='none';
		document.getElementById('oldTime').style.display='none';
		document.getElementById('oldVenue').style.display='none';
		document.getElementById('oldTeamA').style.display='none';
		document.getElementById('oldTeamB').style.display='none';
		document.getElementById('newDate').style.display='none';
		document.getElementById('newTime').style.display='none';
		document.getElementById('newVenue').style.display='none';
		document.getElementById('newTeamA').style.display='none';
		document.getElementById('newTeamB').style.display='none';
	}
}