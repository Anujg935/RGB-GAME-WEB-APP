var numSquares =6;
var colors =generateRandomColors(numSquares);
var squares= document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtm = document.querySelector("hardBtn");


easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares =3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i =0; i<squares.length;i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display ="none";
		}
	}
})
hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares=6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i =0; i<squares.length;i++){
		squares[i].style.background = colors[i];
		squares[i].style.display ="block";
		
	}
})

resetButton.addEventListener("click",function(){
	// generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a nw=ew random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
    this.textContent="NEW COLORS"
	messageDisplay.textContent="";
	// change colors of squares
	for (var i = 0; i<squares.length;i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background="steelblue";	

})

colorDisplay.textContent = pickedColor;

for(var i =0; i<squares.length;i++){
	//add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listener to squares
	squares[i].addEventListener("click",function(){
		//grab color of clicked square
		var clickedColor = this.style.background;
        //compare color to picked color
        console.log(clickedColor,pickedColor);
		if (clickedColor === pickedColor) {
			messageDisplay.textContent="Correct";
			changeColors(clickedColor);
			h1.style.background = pickedColor;
			resetButton.textContent  ="Play Again"
		}else{
			this.style.background="#232323";
			messageDisplay.textContent="Try Again";
		}
    });
}

function changeColors(color){
	//loop through all squares 
	for (var i = 0; i<squares.length;i++) {
		//change ech color to match given color
		squares[i].style.background = color;
	}	
}

function pickColor(){
	var random =Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an aray
	var arr =[];
	//repeate num times
	for(var i =0;i<num; i++){
      //get random color and push into arr
      arr.push(randomColor());
	}
	//return that aray
	return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	var r =Math.floor(Math.random() * 256);
	//pick a "Green" from 0-255
	var g =Math.floor(Math.random() * 256);
	//pick a "Blue" from 0-255var r =Math.floor(Math.random() * 256);
	var b =Math.floor(Math.random() * 256);
	return "rgb("+r+", "+g+", "+b+")";
}
