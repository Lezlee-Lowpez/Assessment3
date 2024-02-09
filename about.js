


function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Nice! Your form was submitted.');
}



//the function that compliments you
function compliment(evt){
	evt.preventDefault();
	
	alert("Gosh you're pretty.")
}





let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);


//Setting up the event listener for image
let picture = document.querySelector('#cat');

picture.addEventListener('mouseover', compliment);


