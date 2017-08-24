

exports.ClozeCard = function(text, cloze) {
	this.fullText = text;
	this.cloze = cloze;
	this.partial = text.replace(this.cloze, '...');
	this.func = function(text, cloze){
		return text.replace(cloze, '...');
	}
	this.check = function(text, cloze){

	// Confirm that the cloze statement appears within the complete text
		if (!this.fullText.includes(this.cloze)) {
			console.log("Sorry, but " + this.cloze + " doesn't appear in '" + this.fullText + "'.");
			return;
		}
		else{
			console.log(this.cloze);
			console.log(this.partial);
			console.log(this.fullText);
		}
}
		

	
}

