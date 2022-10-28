const counterList = document.querySelector("#counter-list");
const counterListButton = document.querySelector("#counter-list-generate");
const counters = document.querySelector("#counters")
let names = [];

counterListButton.addEventListener("click", () => {
	counters.innerHTML = "";
	names = [];
	const arr = counterList.value.split(/\r?\n/);
	for (const ele of arr) {
		names.push(ele);
	}
	for (const ele of names) {
		const bgColor = generateRandomColor();
		//const textColor = invertHex(bgColor);
		const div = document.createElement("div");
		div.style.backgroundColor = bgColor;
		div.classList.add("counter-box");
		const name = document.createElement("h3");
		name.textContent = ele;
		const counter = document.createElement("h3");
		counter.textContent = 0;
		div.appendChild(name);
		div.appendChild(counter);
		div.addEventListener("click", (e) => {
			if (e.shiftKey) {
				counter.textContent = (parseInt(counter.textContent) - 1).toString();
			} else {
				counter.textContent = (parseInt(counter.textContent) + 1).toString();
			}
		})
		counters.appendChild(div);
	}
})

function generateRandomColor() {
	return "#" + Math.floor(Math.random()*16777215).toString(16);
}
