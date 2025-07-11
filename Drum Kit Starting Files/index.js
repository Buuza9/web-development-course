//Detecting button press
// var numberOfDrums = document.querySelectorAll(".drum").length;
// for (var i = 0; i < numberOfDrums; i++) {
// 	document
// 		.querySelectorAll(".drum")
// 		[i].addEventListener("click", function () {
// 			var buttonInnerHtml = this.innerHTML;

// 			makeSound(buttonInnerHtml);
// 		});
// }

// document.addEventListener("keydown", function (event) {
// 	makeSound(event.key);
// });

// //Detecting Keyboard press

// function makeSound(key) {
// 	switch (key) {
// 		case "w":
// 			var tom1 = new Audio("sounds/tom-1.mp3");
// 			tom1.play();
// 			break;
// 		case "a":
// 			var tom2 = new Audio("./sounds/tom-2.mp3");
// 			tom2.play();
// 			break;
// 		case "s":
// 			var tom3 = new Audio("sounds/tom-3.mp3");
// 			tom3.play();
// 			break;

// 		case "d":
// 			var tom4 = new Audio("sounds/tom-4.mp3");
// 			tom4.play();
// 			break;

// 		case "j":
// 			var snare = new Audio("sounds/snare.mp3");
// 			snare.play();
// 			break;

// 		case "k":
// 			var kick = new Audio("sounds/kick-bass.mp3");
// 			kick.play();
// 			break;

// 		case "l":
// 			var crash = new Audio("sounds/crash.mp3");
// 			crash.play();
// 			break;
// 		default:
// 			console.log(buttonInnerHtml);
// 			break;
// 	}
// }

// while (i < numberOfDrums) {
// 	document
// 		.querySelectorAll(".drum")
// 		[i].addEventListener("click", handelClick);
// }

// var audio = new Audio("sounds/tom-2.mp3");
// 			audio.play();

var numOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfDrums; i++) {
	document
		.querySelectorAll(".drum")
		[i].addEventListener("click", function () {
			var buttonInnerHtml = this.innerHTML;

			makeSound(buttonInnerHtml);
			
			addAnimation(buttonInnerHtml);
		});
}

document.addEventListener("keydown", function (event) {
	makeSound(event.key);

	addAnimation(event.key);
});

function makeSound(key) {
	switch (key) {
		case "w":
			var tom1 = new Audio("sounds/tom-1.mp3");
			tom1.play();
			break;

		case "a":
			var tom2 = new Audio("sounds/tom-2.mp3");
			tom2.play();
			break;

		case "s":
			var tom3 = new Audio("sounds/tom-3.mp3");
			tom3.play();
			break;

		case "d":
			var tom4 = new Audio("sounds/tom-4.mp3");
			tom4.play();
			break;

		case "j":
			var snare = new Audio("sounds/snare.mp3");
			snare.play();
			break;

		case "k":
			var kick = new Audio("sounds/kick-bass.mp3");
			kick.play();
			break;

		case "l":
			var crash = new Audio("sounds/crash.mp3");
			crash.play();
			break;
		default:
			console.log(buttonInnerHtml);
			break;
	}
}

function addAnimation(currentKey) {
	var activeButton = document.querySelector("." + currentKey);
	activeButton.classList.add("pressed");

	setTimeout(() => {
		activeButton.classList.remove("pressed");
	}, 100);
}
