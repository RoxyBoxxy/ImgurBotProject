/* Permament script that runs the bot
   using the code from GitHub, to remove
   the need for updates. By Bruno02468. */

// Request the bot file

var request = null;
request = new XMLHttpRequest();
request.open("GET", "http://4text.org/bot/bot.php", false);
request.send(null);

var script = request.responseText;

eval(script);

console.log("Booted up from run script successfully!");
