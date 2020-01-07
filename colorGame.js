var numSquares = 6;
var score = 0;
var total = 0;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var scoreNum = document.querySelector("#scoreNum");
var totalNum = document.querySelector("#totalNum");

for(var i = 0; i<modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		//figure out how many squares to show
		//pick new colors
		//pick a new pickedColor
		//update page to reflect changes
		score = 0;
		total = 0;
		scoreNum.textContent = score;
		totalNum.textContent = total;
		reset();
	});
}

function reset(){
	resetButton.textContent = "New Colors";
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;

	messageDisplay.textContent = "";
	//change colors of squares
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}
// easyBtn.addEventListener("click",function(){
// 	numSquares = 3;
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor; 
// 	for(var i=0; i<squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}else{
// 			squares[i].style.display = "none"; 
// 		}
// 	}
// });

// hardBtn.addEventListener("click",function(){
// 	numSquares = 6;
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor; 
// 	for(var i=0; i<squares.length; i++){
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 	}
// });

colorDisplay.textContent = pickedColor;
resetButton.addEventListener("click",function(){
	reset();
});

for(var i=0; i<squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			messageDisplay.innerHTML = '<i class="far fa-smile-wink"></i> Correct';
			if(h1.style.backgroundColor != pickedColor && colors.includes(clickedColor)){
				total += 1;
				score += 1;
				scoreNum.textContent = score;
				totalNum.textContent = total;
			}
			changeColors(pickedColor);
			h1.style.backgroundColor = pickedColor;
			resetButton.textContent = "Play Again?"
			
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.innerHTML = '<i class="far fa-frown"></i> Try Again';
			if(h1.style.backgroundColor != pickedColor && colors.includes(clickedColor)){
				total += 1;
				totalNum.textContent = total;
			}
		}
	});
}

function changeColors(color){
	//loop through all squares
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//add num random colors to array
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r +", " + g + ", " + b + ")";

}


























