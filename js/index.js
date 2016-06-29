var games = ["Call of Duty 4" , "Fallout 4" , "Minecraft" , "Dark Souls Series" , "overwatch" ]

function pickTopping(){
	var gamesNumber = Math.floor(Math.random()*games.length);
	var gamesNumber2 = Math.floor(Math.random()*games.length);
	document.getElementById('pizza').innerHTML = "<h1>"+games[toppingNumber]+" and "+
	games[gamesNumber2]+"</h1>";
	console.log(games[gamesNumber]);
	console.log(gamesNumber);
}