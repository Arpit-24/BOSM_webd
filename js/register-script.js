function displayExtra(select, gender)
{
	if (select.value==1 && gender==true) {
		document.getElementById('teamA').style.display='block';
		document.getElementById('teamB').style.display='block';
		document.getElementById('gender').style.display='block';
	}
	else if (select.value==1 && gender==false) {
		document.getElementById('teamA').style.display='block';
		document.getElementById('teamB').style.display='block';
		document.getElementById('gender').style.display='none';
	}
	else if (select.value==2 && gender==true) {
		document.getElementById('teamA').style.display='none';
		document.getElementById('teamB').style.display='none';
		document.getElementById('gender').style.display='block';
	}
	else {
		document.getElementById('teamA').style.display='none';
		document.getElementById('teamB').style.display='none';
		document.getElementById('gender').style.display='none';
	}
}