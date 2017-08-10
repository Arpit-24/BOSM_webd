function showAdditional(select) {
	if (select.value==1) {
		document.getElementById('teamResult').style.display='block';
		document.getElementById('firstPlace').style.display='none';
		document.getElementById('secondPlace').style.display='none';
		document.getElementById('thirdPlace').style.display='none';
	}
	else if (select.value==2) {
		document.getElementById('teamResult').style.display='none';
		document.getElementById('firstPlace').style.display='block';
		document.getElementById('secondPlace').style.display='block';
		document.getElementById('thirdPlace').style.display='block';
	}
	else {
		document.getElementById('teamResult').style.display='none';
		document.getElementById('firstPlace').style.display='none';
		document.getElementById('secondPlace').style.display='none';
		document.getElementById('thirdPlace').style.display='none';
	}
}