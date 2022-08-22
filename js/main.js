"use strict";
const headerImage = document.querySelector("header img");
const adv = document.querySelectorAll("#main_promo .mp");
const filmsBlock = document.querySelector("#films");
const form = document.querySelector("#add");

headerImage.src = "img/bg2.jpg";
headerImage.alt = "Hitman's Wife's Bodyguard";
adv.forEach(adv => adv.remove());
document.title = headerImage.alt;

const _DB = {
	movies: [
		"Logan", "Spider-Man", "The Seven Samurai",
		"Bonnie and Clyde", "Reservoir Dogs", "Doctor Zhivago",
		"The Deer Hunter", "Rocky", "Crid"
	]
};
let newD;
const favoriteDB =  [];
const check = document.querySelector('input[type="checkbox"]');

form.addEventListener("submit", (e) => {
	e.preventDefault();
	let val = e.target.firstElementChild.value.trim();
	let valCopy = val;
	if (val !== "" && _DB.movies.indexOf(val) == -1) {
		if (check.checked) {
			favoriteDB.push(val);
			_DB.movies.push(val);
			console.log(`this film <${valCopy}> added to favorite`);
		} else {
			_DB.movies.push(val);
		}
	}
	setSort(_DB.movies);
	createFilmsList(_DB.movies, filmsBlock);
	e.target.reset();
});

function setSort (arr) {
	arr.sort();
}
function createFilmsList (films, parent) {
	parent.innerHTML = "";
	setSort(films);
		films.forEach((film, index) => { if (index < 20 ) {
		if (favoriteDB.indexOf(film) !== -1) {
		parent.innerHTML += `
			<p> 
			<font color="blue">  
			${index + 1}. ${film.length >= 21 ? `${film.slice(0, 21)}...` : film}
			</font> 
				<span data-rm>&#128465;</span>
			</p>
		`;
	} else {
		parent.innerHTML += `
			<p> 
			${index + 1}. ${film.length >= 21 ? `${film.slice(0, 21)}...` : film}
				<span data-rm>&#128465;</span>
			</p>
		`;
	}
	} else {
		let randomFilm = function (arr) {
			let newArray;
			for (let i = 20; i>0; i--) {
				let tmp = arr[i];
				let rnd = Math.floor(Math.random() * (i+1));
				arr[i] = arr [rnd];
				arr[rnd] = tmp;
				newArray = arr;
				console.log(newArray);
			}
			parent.innerHTML = "";
			newArray.forEach((film,index) => { if (index < 20) {
				if (favoriteDB.indexOf(film) !== -1) {
					parent.innerHTML += `
						<p> 
						<font color="blue">  
						${index + 1}. ${film.length >= 21 ? `${film.slice(0, 21)}...` : film}
						</font> 
							<span data-rm>&#128465;</span>
						</p>
					`;
				} else {
					parent.innerHTML += `
						<p> 
						${index + 1}. ${film.length >= 21 ? `${film.slice(0, 21)}...` : film}
							<span data-rm>&#128465;</span>
						</p>
					`;
				}
			}
			});
	};
	randomFilm(_DB.movies);
	}
	});

	document.querySelectorAll("[data-rm]").forEach((btn, i) => {
		btn.addEventListener("click", () => {
			btn.parentElement.remove();
			_DB.movies.splice(i, 1);
			createFilmsList(films, parent);
		});
	});
}
createFilmsList(_DB.movies, filmsBlock);


