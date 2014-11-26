var boxOneClicks = 0;
var boxTwoClicks = 0;
var boxThreeClicks = 0;

function boxOneClick(box) {
	boxOneClicks++;
	box.style["background-color"] = "red";
	if (boxOneClicks > 0 && boxTwoClicks > 0 && boxThreeClicks > 0)
	{
		alert("You Clicked Them All!!");
	}
}

function boxTwoClick(box) {
	boxTwoClicks++;
	box.style["background-color"] = "purple";
	if (boxOneClicks > 0 && boxTwoClicks > 0 && boxThreeClicks > 0)
	{
		alert("You Clicked Them All!!");
	}

}

function boxThreeClick(box) {
	boxThreeClicks++;
	box.style["background-color"] = "green";
	if (boxOneClicks > 0 && boxTwoClicks > 0 && boxThreeClicks > 0)
	{
		alert("You Clicked Them All!!");
	}

}






