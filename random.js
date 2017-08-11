console.log("Random is working");

let array = ["images/right.png", "images/left.png"];
let left = `<img src="images/right.png">`;
let right= `<img src="images/left.png">`;

let container = document.getElementById("container");
container.addEventListener("click", function(){
	console.log("Click is working");
	let random = (Math.floor(Math.random() * 2));
	if(random == 0){

		container.innerHTML = left;
	}else if(random == 1){

		container.innerHTML = right;
	}
});
console.log(array[0], array[1]);
