function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 
    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
 
    return text;
}

requests = 0;
error = false;

function shifter(){
	check = oldstr.charAt(0);
	if (lengthcheck <= 50){
	if (check !== " "){
	subreddit = subreddit + check
	lengthcheck = lengthcheck + 1;
	shifter();
	} else {
		URL = "https://api.imgur.com/3/gallery/r/" + subreddit;
		httpGet();
	} else{
		error = true;
		errormessage = 'Your "subreddit" has a length of over 50 characters.';
		prepareResponse();
	}
}

var preimageregex = /ima*ge*\s+\/r\/(\w+)/ig;
var imageregex = /ima*ge*\s+\/r\//ig;

var authorization = 'Client-ID ' + clientId;

$(function() {
    var socket = io('/' + window.channel);
    socket.on('message', function(msg) {
        str = $('#messages').children()[$('#messages').children().length - 1].innerHTML.toLowerCase();
str2 = $('#messages').children()[$('#messages').children().length - 2].innerHTML.toLowerCase();
str3 = $('#messages').children()[$('#messages').children().length - 3].innerHTML.toLowerCase();
 
       var  a = str.indexOf("imgurbot");
	var b = str.indexOf("image /r/ ");
	var c = str.indexOf("random");
	var d = str.indexOf("galery");
	var e = str.indexOf("gallery");
	
if (a > -1){
	
	if (b > -1){
	var n = str.search(preimageregex);
	var lengthcheck = 0;
	subreddit = "";
	oldstr = str.replace(imageregex, "");
		if (n > -1){
		shifter();
		} else {
		error = true;
		errormessage = "It seems like that's not a subreddit.";
		prepareResponse();
		}
	}
	if (d > -1 || e > -1){
	URL = "https://api.imgur.com/3/gallery/hot/viral/0.json";
	}
	
}
	
	}


    });
});

function httpGet(URL){
if (requests <= 12499){
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", URL, false );
    xmlHttp.setRequestHeader("Authorization",authorization);
    return xmlHttp.responseText;
requests = requests + 1
} else {
	error = true;
	errormesage = "You guys have used up all 12,500 requests. Come back tomorrow!";
	prepareResponse();
	
}

console.log("ImgurBot Beta has loaded :)");
