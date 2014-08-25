/* Now you see it, now you still see it. This is the ImgurBot v2.0. Handcrafted specially for the Spooky Chat, it uses the sooper seekret Imgur API (don't worry, they know) to deliver the most fresh and high quality responses. Hooray. I worked my goddamn butt off on this one. */

error = false;
URL = "";

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
		errortype = "basic";
		prepareResponse();
	}
}

function vote(){
	
}

var preimageregex = /ima*ge*\s+\/r\/(\w+)/ig;
var imageregex = /ima*ge*\s+\/r\//ig;
var upvoteregex = /up(vote|boat)/ig;
var downvoteregex = /down(vote|boat)/ig;
var galleryregex = /gal+ery/ig;

var authorization = 'Client-ID ' + clientId;

function main() {
        str = $('#messages').children()[$('#messages').children().length - 1].innerHTML.toLowerCase();
str2 = $('#messages').children()[$('#messages').children().length - 2].innerHTML.toLowerCase();
str3 = $('#messages').children()[$('#messages').children().length - 3].innerHTML.toLowerCase();
str4 = $('#messages').children()[$('#messages').children().length - 4].innerHTML.toLowerCase();
str5 = $('#messages').children()[$('#messages').children().length - 5].innerHTML.toLowerCase();
 
       var  a = str.search("imgurbot");
	var b = str.search("image /r/ ");
	var c = str.search("random");
	var d = str.search(galleryregex);
	var e = str.search(upvoteregex);
	var f = str.search(downvoteregex);
	
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
		errortype = "basic";
		console.log("Not a subreddit")
		prepareResponse();
		}
	}
	if (d > -1){
	URL = "https://api.imgur.com/3/gallery/hot/viral/0.json";
	httpGet();
	}
	if (e > -1){
	if (URL !== ""){
		up = true;
		vote();
	}
	}
	if (f > -1){
	if (URL !== ""){
		up = false;
		vote();
	}
	}
	if (c > -1){
	var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 
    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        URL = "http://i.imgur.com/" + text + ".jpg"
        prepareImage();
        itype = "random"
	}
	
}
}

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

function prepareResponse(){
	if (error = true){
		if (errortype = "basic"){
			
		}
	} else {
		
	}
}

$(function() {
    var socket = io('/' + window.channel);
    socket.on('message', function(msg) {
	setTimeout(function(){doStuff()}, 750);


    });
});

console.log("ImgurBot Beta has loaded :)");
