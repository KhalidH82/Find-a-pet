import fetchJsonp from 'fetch-jsonp';

const petForm = document.querySelector('#pet-form');

petForm.addEventListener('submit', fetchAnimals)

function fetchAnimals(e) {
	e.preventDefault();

	const animal = document.querySelector('#animal').value;
	const zip = document.querySelector('#zip').value;

	fetchJsonp(`http://api.petfinder.com/pet.find?format=json&key=85022996c5f0497e738500929748affc&animal=${animal}&location=${zip}&callback=callback`, {
		jsonpCallbackFunction: 'callback'
	})
	.then(res => res.json())
	.then(data => console.log(data))
	.catch(err => console.log(err))
}

function callback(data) {
	console.log(data)
}