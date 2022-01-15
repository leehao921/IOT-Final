//BATTERY
var remain = 0;

function update() {
	let battery = document.getElementById("battery");

	var w = remain;
	var display = Math.round(w);
	var r =  256 - 255*(w-50)/50;
	var y = 255*w/50;

	remain = (remain<100) ? remain + 0.1 : remain;

	battery.style.width=`${w}%`;

	battery.innerHTML = `${display}%`;

	if (w < 50) {
		battery.style.backgroundColor = `rgb(255, ${y}, 0)`;
	} else {
		battery.style.backgroundColor = `rgb(${r}, 255, 0)`;
	}

	setTimeout(update, 10);

}
