function xuly(){
	var w = document.getElementById('w1').value;
	var h = document.getElementById('h1').value;
	var BMI = parseFloat(w) / (parseFloat(h)*parseFloat(h));
	document.getElementById('ketqua').innerHTML = 'Ket qua: '+BMI;
	if(BMI < 18){
		document.write('Gầy');
	}else if(BMI < 25.0){
		document.write('Bình thường');
	}else if(BMI < 30.0){
		document.write('Hơi béo');
	}else{
		document.write('Béo phì');
	}
}