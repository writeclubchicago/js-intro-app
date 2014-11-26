var winningClicks = 5;
var userClicks = 0;

function boxClick(box) {
	userClicks++;
	if  (userClicks ===winningClicks)
	{	box.style["background-color"] = "white";
		box.innerHTML = "Good Game!";
		alert("You Win!");
	}
	else if (userClicks === 1)
	{box.style["background-color"] = "yellow";
	}
	else if (userClicks === 2)
	{box.style["background-color"] = "green";
	}
	else if (userClicks === 3)
	{box.style["background-color"] = "red";
	}
	else if (userClicks === 4)
	{box.style["background-color"] = "purple";
	}



	

}