function mainHall() {
	window.location.href = "The_Main_Hall.html";
}

function magic(word) {
	let l = word.length;
	let outcome = word[0];
	let i = 0;
	for (i=1; i<l; i++)
	{
		outcome = outcome + String.fromCharCode((((word[i-1]).charCodeAt(0) + (word[i]).charCodeAt(0)) % 27) + 97);
	}
	return outcome;
}

function checkIgnacyPassword() {
	passObject = document.getElementById("lastA");
	answer = passObject.value;
	if (magic(answer) == "T{qkgybm{eaojcyw")
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