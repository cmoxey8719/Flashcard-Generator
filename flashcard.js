
var inquirer = require("inquirer");
var basicCard = require("./BasicCard.js");
var clozeCard = require("./ClozeCards.js");

var basicQuestions = ["Who was the first president of the USA?", "Who is the 16th president of the USA?", "Who is the current presdient?", ];
var basicAnswers = ["George Washington", "Abraham Lincoln", "Donald Trump"];

var chozeQuestions = ["George Washington was the first president of the USA?", "Abraham Lincoln is the 16th president of the USA?", "Donald Trump is the current presdient?", ];


inquirer.prompt([

{
	// ask which kind of flashcard to use
	type: "input",
	message: "What kind of flashcard do you want to use?",
	name: "flashcard"
},
{
	type: "input",
	message: "Question for the flashcard:",
	name: "question"
},
{
	type: "input",
	message: "Answer for the flashcard:",
	name: "answer"
}

]).then(function (data) {

	if(data.flashcard === "basic"){
		// convert info to the proper data location
		var front = data.question;
		var back = data.answer;
		// pass it into the constructor
		var basicFlash = new basicCard.BasicCard(front, back);
		//print the info
		console.log(basicFlash.front);
		console.log(basicFlash.back);
	}
	else if(data.flashcard === "cloze"){
		//need to replace who/what with the answer to get in right format
		//pass info into the right parameters
		var text = data.question;
		var cloze = data.answer;
		//pass it through the constructor
		var ClozeFlash = new clozeCard.ClozeCard(text, cloze);
		ClozeFlash. check();
	}
	else{
		console.log("Sorry that is not a proper response");
	}
});

    

























/*

var type = process.argv[2];

if(type === "basic"){
	var front = process.argv[3];
	var back = process.argv[4];

	var Question = new basicCard.BasicCard(front, back);
	console.log(Question.front);
	console.log(Question.back);

}
else if(type === "cloze"){
	var text = process.argv[3];
	var cloze = process.argv[4];
	var Question = new clozeCard.ClozeCard(text, cloze);
	var check = Question.check(text, cloze);
	if(check === "not in text"){
		console.log(Question);
	}
	else{
		console.log(Question.cloze);
		console.log(Question.func(text, cloze));
		console.log(Question.partial);
		console.log(Question.fullText);
	}
	
	
}
*/
