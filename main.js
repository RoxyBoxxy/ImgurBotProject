function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 
    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
 
    return text;
}

var imageregex = /ima*ge*\s+\/r\//ig

authorization = 'Client-ID ' + clientId;

$(function() {
    var socket = io('/' + window.channel);
    socket.on('message', function(msg) {
        str = $('#messages').children()[$('#messages').children().length - 1].innerHTML.toLowerCase();
str2 = $('#messages').children()[$('#messages').children().length - 2].innerHTML.toLowerCase();
str3 = $('#messages').children()[$('#messages').children().length - 3].innerHTML.toLowerCase();
 
        a = str.indexOf("imgurbot");
	b = str.indexOf("image");
	c = str.indexOf("random");
	
	if (a > -1){
	
	if (b > -1){
	
	}
	
	}


    });
});
