const myArr = ["Teddy's Red Tacos", "Mariscos el Zurdo", "Canton City"]

function thatsRandom(evt){
	// this gives me a random i value
	const randomPlace = Math.floor(Math.random() * myArr.length);
	//prints the random spot to console
	console.log(`You're gonna eat at: ${myArr[randomPlace]}!`);
    document.querySelector('h3').textContent = `You're gonna eat at: ${myArr[randomPlace]}!`
}



let picker = document.querySelector('#randomSpot');

picker.addEventListener('click', thatsRandom);