function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 
    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
 
    return text;
}

error = false;

function shifter(){
	check = oldstr.charAt(0);
	if (lengthcheck <= 50){
	if (check !== " "){
	subreddit = subreddit + check
	lengthcheck = lengthcheck + 1;
	shifter();
	} else {
		stopAJAXtime();
	} else{
		error = true;
		errortype = "Numerical";
		errormessage = 'Your "subreddit" has a length of over 50 characters.';
		prepareResponse();
	}
}

var preimageregex = /ima*ge*\s+\/r\/(\w+)/ig;
var imageregex = /ima*ge*\s+\/r\//ig;

authorization = 'Client-ID ' + clientId;

$(function() {
    var socket = io('/' + window.channel);
    socket.on('message', function(msg) {
        str = $('#messages').children()[$('#messages').children().length - 1].innerHTML.toLowerCase();
str2 = $('#messages').children()[$('#messages').children().length - 2].innerHTML.toLowerCase();
str3 = $('#messages').children()[$('#messages').children().length - 3].innerHTML.toLowerCase();
 
        a = str.indexOf("imgurbot");
	b = str.indexOf("image /r/ ");
	c = str.indexOf("random");
	
	if (a > -1){
	
	if (b > -1){
	var n = str.search(preimageregex);
	var lengthcheck = 0;
	var subreddit = "";
	var oldstr = str.replace(imageregex, "");
	if (n > -1){
	shifter();
	} else {
	error = true;
	errortype = "Syntax";
	errormessage = "It seems like that's not a subreddit.";
	}
	}
	}
	
	}


    });
});

function stopAJAXtime(){
$.ajax({
      url: 'https://api.imgur.com/3/image',
      method: 'POST',
      headers: {
        Authorization: authorization,
        Accept: 'application/json'
      },
      data: {
        image: localStorage.dataBase64,
        type: 'base64'
      },
      success: function(result) {
        var id = result.data.id;
        window.location = 'https://imgur.com/gallery/' + id;
      }
    });
}
