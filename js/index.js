var games = ["Call of Duty 4" , "Fallout 4" , "Minecraft" , "Dark Souls Series" , "overwatch" , "World of Warcraft" , "Doom" , "Halo" , "Battlefeild" , "Star Wars Battlefront" , "Madden 16" , "Fifa 16" , "NBA 2k16" , "Asphalt 8 Airborne"]

function pickVideoGame(){
	var gamesNumber = Math.floor(Math.random()*games.length);
	var gamesNumber2 = Math.floor(Math.random()*games.length);
	document.getElementById('game').innerHTML = "<h1>"+games[gamesNumber]+" and "+
	games[gamesNumber2]+"</h1>";
	console.log(games[gamesNumber]);
	console.log(gamesNumber);
}

