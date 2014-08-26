/* Now you see it, now you still see it. This is the ImgurBot v2.0. Handcrafted specially for the Spooky Chat, it uses the sooper seekret Imgur API (don't worry, they know) to deliver the most fresh and high quality responses. */

var error = false;
var URLs = "";
var score = 0;

setInterval(function(){if (score > 0){score--;}}, 10000);

var idregex = /{"id":"(\w{5}|\w{7})"/g;
var idregex2 = /"(\w{5}|\w{7})"/g;
var titleregex = /"title":"(.)+?[^\\"]+"/g;
var titleregex2 = /"(.)+?[^\\"]+"/g;

function getrequestnumber() {
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://api.imgur.com/3/credits", false);
    xmlHttp.setRequestHeader("Authorization", authorization);
    xmlHttp.send(null);
    var text = xmlHttp.responseText;
    var res = text.match(/"ClientRemaining":\d{5}/);
    var katyperry = res[0];
    remained = katyperry.match(/\d{5}/);
    remaining = remained[0];
}

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function checkImage() {

        if (img.height <= 81) {
            text = makeid();
            img = new Image();
            img.src = "https://i.imgur.com/" + text + ".jpg";
            timer();
        } else {
            iURL = img.src;
            itype = "random";
            prepareImage();
        }
    }

function timer() {
    setTimeout(function() {
        checkImage();
    }, 250);
}

var preimageregex = /ima*ge*\s+\/r\/(\w+)/ig;
var imageregex = /\/r\/(\w+)/i;
var galleryregex = /gal+ery/ig;
var memesregex = /(me|may){2,}s*/ig;
var saveregex = /(save|post)+ *(to|at|on|in) *imgur/ig;

var urlregex = /https*:\/\/(\w|\.|\/|-)+\.(gif|jpg|png)/;

var authorization = 'Client-ID ' + clientId;

function main() {
    str = $('#messages').children()[$('#messages').children().length - 1].innerHTML.toLowerCase();
    largearray = $('#messages').children();

    a = str.search("imgur");
    b = str.search(preimageregex);
    c = str.search("random");
    d = str.search(galleryregex);
    g = str.search(memesregex);
    h = str.search(saveregex);
    k = str.search("commands");

    if (a > -1) {
        if (d > -1) {
            itype = "gallery";
            URLs = "https://api.imgur.com/3/gallery/hot/viral/0.json";
            httpGet(URLs);
        }
        if (c > -1) {
            id = makeid();
            img = new Image();
            img.src = "https://i.imgur.com/" + id + ".jpg";
            timer();
        }
        if (g > -1) {
            itype = "meme";
            URLs = "https://api.imgur.com/3/g/memes";
            httpGet(URLs);
        }
        if (k > -1){
        CLIENT.submit("Commands Include:[Imgur + (gallery, random, meme)],img /r/<subreddit>, upvote, and save to imgur");
        score++;
    }
    }
    if (h > -1) {
            if (h < i) {
var arrayLength = largearray.length;
var megastr = "";
for (var i = 0; i < arrayLength; i++) {
    megastr = megastr + largearray[i].innerHTML.toLowerCase();
}
                var rosalyn = megastr.lastIndexOf(urlregex);
                var substringAlpha = megastr.substring(rosalyn);
                var jake = substringAlpha.match(urlregex);
                appendix = jake[0];
                uploadImage();
            }
    }
    if (b > -1) {
        itype = "subreddit";
        hawaii = str.match(imageregex);
        subreddit = hawaii[0];
        URLs = "https://api.imgur.com/3/gallery"+subreddit;
        httpGet(URLs);
    }

function httpGet(URL) {
    if (remaining > 0) {
        xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", URL, false);
        xmlHttp.setRequestHeader("Authorization", authorization);
        xmlHttp.send(null);
        basshunter = xmlHttp.responseText;
        remaining--;
        stopRegexTime();
    } else {
        error = true;
        errortype = "supply";
        prepareResponse();

    }
}

function prepareResponse() {
    if (error === true) {
        if (errortype == "basic") {
            console.log("Basic Error: A Basic error occurred. For more info ask the Random dude.");
        }
        if (errortype == "supply") {
            if (score < 5){
            CLIENT.submit("Supply Error: All 12,500 daily credits have been used up. Sorry.");
            score++;
            }
        }
        if (errortype == "null"){
            console.log("Null Error: You are referencing a nonexistent object.");
        }
        error = false;
    } else {
            CLIENT.submit("The image has been favorited");
            score++;
        }
    }
}

function stringify (strArray){
    var tempstring = "";
    for (var j=0; j<strArray.length; j++) {
        tempstring = tempstring + strArray[j];
    }
    return tempstring;
}

function stopRegexTime() {
    var res = basshunter.match(idregex);
    var preres2 = stringify(res);
    var res2 = preres2.match(idregex2);
    res2 = stringify(res2);
    var string = res2.split('"');
    copacobana = string.filter(Boolean);
    special = Math.floor(Math.random() * copacobana.length);
    id = copacobana[special];
    var bit = basshunter.match(titleregex);
    var prebit2 = stringify(bit);
    var bit2 = prebit2.match(titleregex2);
    bit2 = stringify(bit2);
    byte = bit2.split('"title"');
    pretitle = byte[special+1];
    title = pretitle.replace('\"','"');
    prepareImage();
    if (title == "null") {
        title = "No Title";
    }
}

function prepareImage() {
    if (itype == "random") {
        CLIENT.submit(iURL);
    }
    if (itype == "subreddit") {
        CLIENT.submit("https://i.imgur.com/"+id+".jpg" + "\n" + title);
        score++;
    }
    if (itype == "gallery") {
        CLIENT.submit("https://i.imgur.com/"+id+".jpg" + "\n" + title);
        score++;
    }
    if (itype == "meme") {
        CLIENT.submit("https://i.imgur.com/"+id+".jpg" + "\n" + title);
        score++;
    }
}

function uploadImage(){
    xmlHttp = new XMLHttpRequest();
        xmlHttp.open("POST", "https://api.imgur.com/3/upload", false);
        xmlHttp.setRequestHeader("Authorization", authorization);
        xmlHttp.send(null);
        basshunter = xmlHttp.responseText;
}

$(function() {
    var socket = io('/' + window.channel);
    socket.on('message', function(msg) {
        if (score < 5){
        setTimeout(function() {
            main();
        }, 750);
}else{
    if (score == 5){
    CLIENT.submit("Please wait 10 seconds before sending again");
    }
}

    });
});

getrequestnumber();

console.log("ImgurBot Beta has loaded :)");
