function mainHall() {
	window.location.href = "The_Main_Hall.html";
}

function checkIgnacyPassword() {
	passObject = document.getElementById("lastA");
	answer = passObject.value;
	if (answer == "hihiH4Ha")
	{
		document.getElementById("GoodAnswer").style.display = "block";
		document.getElementById("BadAnswer").style.display = "none";
		document.getElementById("LastHallButton").style.display = "block";
	}
	else
	{
		document.getElementById("GoodAnswer").style.display = "none";
		document.getElementById("BadAnswer").style.display = "block";
		document.getElementById("LastHallButton").style.display = "none";
	}
}