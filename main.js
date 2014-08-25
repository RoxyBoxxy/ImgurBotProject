function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 
    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
 
    return text;
}

error = false;

function getrequestnumber(){
	 xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", URL, false );
    xmlHttp.setRequestHeader("Authorization",authorization);
    xmlHttp.send( null );
}

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
var upvoteregex = /up(vote|boat)/ig;
var galleryregex = /gal+ery/ig;

var authorization = 'Client-ID ' + clientId;

$(function() {
    var socket = io('/' + window.channel);
    socket.on('message', function(msg) {
        str = $('#messages').children()[$('#messages').children().length - 1].innerHTML.toLowerCase();
str2 = $('#messages').children()[$('#messages').children().length - 2].innerHTML.toLowerCase();
str3 = $('#messages').children()[$('#messages').children().length - 3].innerHTML.toLowerCase();
str3 = $('#messages').children()[$('#messages').children().length - 3].innerHTML.toLowerCase();
 
       var  a = str.search("imgurbot");
	var b = str.search("image /r/ ");
	var c = str.search("random");
	var d = str.search(galleryregex);
	var e = str.search(upvoteregex);
	
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
	if (d > -1){
	URL = "https://api.imgur.com/3/gallery/hot/viral/0.json";
	httpGet();
	}
	if (e > -1){
	
	}
	
}
	
	}


    });
});

function httpGet(URL){
if (requests <= 12498){
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", URL, false );
    xmlHttp.setRequestHeader("Authorization",authorization);
    xmlHttp.send( null );
    getrequestnumber();
    return xmlHttp.responseText;
} else {
	error = true;
	errormesage = "You guys have used up all 12,500 requests. Come back tomorrow!";
	prepareResponse();
	
}

console.log("ImgurBot Beta has loaded :)");
