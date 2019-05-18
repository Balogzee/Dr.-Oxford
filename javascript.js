
var answer = document.getElementById('answer');
var correct = 0;
function Choice(){
	var choices = ['opt1', 'opt2', 'opt3', 'opt4'
	]

	if ( answer == choices[1]) {
		document.write("Wow, thats the correct answer")
		correct++;
	}
	else{
		alert("answer is not correct");
	}


}