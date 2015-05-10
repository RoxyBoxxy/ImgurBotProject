/* Request the bot file */
var request = null;
request = new XMLHttpRequest();
request.open("GET", "https://cdn.rawgit.com/krynomore/ImgurBotProject/master/main.js", false);
request.send(null);
var script = request.responseText;

/* Run the script and catch any errors that may occur*/
try {
  eval(script);
  console.log("Booted up from run script successfully!");
} catch(e) {
  console.log(e);
}

//Original file by Bruno02468
