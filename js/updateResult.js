function displayEventResults(select) {
	if (select.value==1) {
		document.getElementById('oldteamResult').style.display='block';
		document.getElementById('newteamResult').style.display='block';
		document.getElementById('oldfirstPlace').style.display='none';
		document.getElementById('oldsecondPlace').style.display='none';
		document.getElementById('oldthirdPlace').style.display='none';
		document.getElementById('newfirstPlace').style.display='none';
		document.getElementById('newsecondPlace').style.display='none';
		document.getElementById('newthirdPlace').style.display='none';
	}
	else if (select.value==2) {
		document.getElementById('oldteamResult').style.display='none';
		document.getElementById('newteamResult').style.display='none';
		document.getElementById('oldfirstPlace').style.display='block';
		document.getElementById('oldsecondPlace').style.display='block';
		document.getElementById('oldthirdPlace').style.display='block';
		document.getElementById('newfirstPlace').style.display='block';
		document.getElementById('newsecondPlace').style.display='block';
		document.getElementById('newthirdPlace').style.display='block';
	}
	else {
		document.getElementById('oldteamResult').style.display='none';
		document.getElementById('newteamResult').style.display='none';
		document.getElementById('oldfirstPlace').style.display='none';
		document.getElementById('oldsecondPlace').style.display='none';
		document.getElementById('oldthirdPlace').style.display='none';
		document.getElementById('newfirstPlace').style.display='none';
		document.getElementById('newsecondPlace').style.display='none';
		document.getElementById('newthirdPlace').style.display='none';
	}
}