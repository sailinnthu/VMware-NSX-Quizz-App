function check(){

	var question1 = document.getElementsByName("question1");
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.getElementsByName("question7");
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	

	var correct = 0;

	correct += validCheckBox(question1, 2)
	correct += validCheckBox(question7, 2)
	
	if (question2 == 250) {
		correct++;
	}
	if (question3 == "False") {
		correct++;
	}
	if (question4 == 10) {
		correct++;
	}
	if (question5 == 200) {
		correct++;
	}
	if (question6 == 81000) {
		correct++;
	}
	if (question8 == 7) {
		correct++;
	}
	if (question9 == "NSXManager") {
		correct++;
	}
	if (question10 == "SSO") {
		correct++;
	}

	// for (var i=0; i < question6.length; i++) {
	// 	q6checked.push({isSelected: question6[i].checked, value : question6[i].value})
	// }
	// let d = q6checked.filter(function(item) {
	// 	return (item.isSelected) && (item.value === "right")
	// })
	// let dc = q6checked.filter(function(item) {
	// 	return (item.isSelected) && (item.value === "wrong")
	// })
	
	// correct = ((d.length === 2) && (dc.length === 0))? 1 : 0

	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("number_correct").innerHTML = "<h1><center>Your score is " + correct  + " !</center></h1>"; 

}

function validCheckBox(questions, correctLength = 0) {
	var qchecked = []
	for (var i=0; i < questions.length; i++) {
		qchecked.push({isSelected: questions[i].checked, value : questions[i].value})
	}
	let c = qchecked.filter(function(item) {
		return (item.isSelected) && (item.value === "right")
	})
	let uc = qchecked.filter(function(item) {
		return (item.isSelected) && (item.value === "wrong")
	})
	console.log('c length ${c.length} and uc -- ${uc.length}')
	
	return ((c.length === correctLength) && (uc.length === 0))? 1 : 0

}
