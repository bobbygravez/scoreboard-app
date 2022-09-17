const homeBox = document.querySelector("#home-box")
const guestBox = document.querySelector("#guest-box")
const addOne = document.querySelectorAll(".add-one")
const addTwo = document.querySelectorAll(".add-two")
const addThree = document.querySelectorAll(".add-three")
const newGame = document.querySelector("#new-game")
const displayLead = document.querySelector("#leaderStatus")

function HomeDisplay() {
	let sum = 0
	addOne[0].addEventListener("click", function () {
	sum += 1
	homeBox.innerHTML = sum
	if (homeBox.innerText > guestBox.innerText) {
		displayLead.innerHTML = "Home team leads"
	}
	else if (homeBox.innerText < guestBox.innerText) {
		displayLead.innerHTML = "Guest team leads"	
	} else {
		displayLead.innerHTML = "A tie, Game on!!"
	}
})

	addTwo[0].addEventListener("click", function () {
	sum += 2
	homeBox.innerHTML = sum
	if (homeBox.innerText > guestBox.innerText) {
		displayLead.innerHTML = "Home team leads"
	}
	else if (homeBox.innerText < guestBox.innerText) {
		displayLead.innerHTML = "Guest team leads"	
	} else {
		displayLead.innerHTML = "A tie, Game on!!"
	}
})

	addThree[0].addEventListener("click", function () {
	sum += 3
	homeBox.innerHTML = sum
	if (homeBox.innerText > guestBox.innerText) {
	displayLead.innerHTML = "Home team leads"
	}
	else if (homeBox.innerText < guestBox.innerText) {
	displayLead.innerHTML = "Guest team leads"	
	} else {
	displayLead.innerHTML = "A tie, Game on!!"
	}
})
}
HomeDisplay()

function GuestDisplay() {
	let sum = 0
	addOne[1].addEventListener("click", function () {
	sum += 1
	guestBox.innerHTML = sum
	if (homeBox.innerText > guestBox.innerText) {
	displayLead.innerHTML = "Home team leads"
	}
	else if (homeBox.innerText < guestBox.innerText) {
	displayLead.innerHTML = "Guest team leads"	
	} else {
	displayLead.innerHTML = "A tie, Game on!!"
	}
})

	addTwo[1].addEventListener("click", function () {
	sum += 2
	guestBox.innerHTML = sum
	if (homeBox.innerText > guestBox.innerText) {
	displayLead.innerHTML = "Home team leads"
	}
	else if (homeBox.innerText < guestBox.innerText) {
	displayLead.innerHTML = "Guest team leads"	
	} else {
	displayLead.innerHTML = "A tie, Game on!!"
	}
})

	addThree[1].addEventListener("click", function () {
	sum += 3
	guestBox.innerHTML = sum
	if (homeBox.innerText > guestBox.innerText) {
	displayLead.innerHTML = "Home team leads"
	}
	else if (homeBox.innerText < guestBox.innerText) {
	displayLead.innerHTML = "Guest team leads"	
	} else {
	displayLead.innerHTML = "A tie, Game on!!"
	}
})
}
GuestDisplay()

newGame.addEventListener("click", function () {
	guestBox.innerHTML = 0
	homeBox.innerHTML = 0
	displayLead.innerHTML = "play another game!"
	HomeDisplay()
	GuestDisplay()
})


