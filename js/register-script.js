function displayExtra(select)
{
	if (select.value==2) {
		document.getElementById('player1').style.display='block';
		document.getElementById('player1col').style.display='block';
		document.getElementById('player2').style.display='block';
		document.getElementById('player2col').style.display='block';
	}
	else if (select.value==3) {
		document.getElementById('teamA').style.display='block';
		document.getElementById('teamB').style.display='block';
	}
	else {
		document.getElementById('player1').style.display='none';
		document.getElementById('player1col').style.display='none';
		document.getElementById('player2').style.display='none';
		document.getElementById('player2col').style.display='none';
		document.getElementById('teamA').style.display='none';
		document.getElementById('teamB').style.display='none';
	}
}