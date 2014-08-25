/* Now you see it, now you still see it. This is the ImgurBot v2.0. Handcrafted specially for the Spooky Chat, it uses the sooper seekret Imgur API (don't worry, they know) to deliver the most fresh and high quality responses. */
//Ran out of variable names that were logical so started using weird ones.
var error = false;
var URLs = "";

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
    remaining = katyperry.match(/\d{5}/);
}

function shifter() {
    check = oldstr.charAt(0);
    if (lengthcheck <= 50) {
        if (check !== " ") {
            subreddit = subreddit + check;
            lengthcheck = lengthcheck + 1;
            shifter();
        } else {
            itype = "subreddit";
            URLs = "https://api.imgur.com/3/gallery/r/" + subreddit;
            httpGet(URLs);
        }
    } else {
        error = true;
        errortype = "basic";
        prepareResponse();
    }
}

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function checkImage() {
    if (takingtoolong <= 5) {
        if (img.height <= 81) {
            text = makeid();
            img = new Image();
            img.src = "https://i.imgur.com/" + text + ".jpg";
            takingtoolong++;
            timer();
        } else {
            iURL = img.src;
            itype = "random";
            prepareImage();
        }
    } else {
        error = true;
        errortype = "time";
        prepareResponse();
    }
}

function timer() {
    setTimeout(function() {
        checkImage();
    }, 250);
}

function vote() {

}

var preimageregex = /ima*ge*\s+\/r\/(\w+)/ig;
var imageregex = /ima*ge*\s+\/r\//ig;
var upvoteregex = /up(vote|boat)/ig;
var downvoteregex = /down(vote|boat)/ig;
var galleryregex = /gal+ery/ig;
var memesregex = /(me|may)+s*/ig;

var uploadregex = /\.(gif|jpg|png)/g;
var universalregex = /https*:\/\/(\w|\.|\/|-)+\.(gif|jpg|png)/;

var authorization = 'Client-ID ' + clientId;

function main() {
    str = $('#messages').children()[$('#messages').children().length - 1].innerHTML.toLowerCase();
    str2 = $('#messages').children()[$('#messages').children().length - 2].innerHTML.toLowerCase();
    string3 = $('#messages').children()[$('#messages').children().length - 3];
    string4 = $('#messages').children()[$('#messages').children().length - 4];
    string5 = $('#messages').children()[$('#messages').children().length - 5];

    if (typeof string3 !== "undefined") {
        str3 = string3.innerHTML.toLowerCase();
    } else {
        str3 = "";
    }
    if (typeof string4 !== "undefined") {
        str4 = string4.innerHTML.toLowerCase();
    } else {
        str4 = "";
    }
    if (typeof string5 !== "undefined") {
        str5 = string5.innerHTML.toLowerCase();
    } else {
        str5 = "";
    }

    var a = str.search("imgurbot");
    var b = str.search(imageregex);
    var c = str.search("random");
    var d = str.search(galleryregex);
    var e = str.search(upvoteregex);
    var f = str.search(downvoteregex);
    var g = str.search(memesregex);
    var h = str.search("save");
    var i = str.search("imgur");
    var j = str.search(uploadregex);

    if (a > -1) {
        if (d > -1) {
            itype = "gallery";
            URLs = "https://api.imgur.com/3/gallery/hot/viral/0.json";
            httpGet(URLs);
        }
        if (e > -1) {
            if (URL !== "") {
                up = true;
                vote();
            }
        }
        if (f > -1) {
            if (URL !== "") {
                up = false;
                vote();
            }
        }
        if (c > -1) {
            text = makeid();
            img = new Image();
            img.src = "https://i.imgur.com/" + text + ".jpg";
            takingtoolong = 0;
            timer();
        }
        if (g > -1) {
            itype = "meme";
            URLs = "https://api.imgur.com/3/g/memes";
            httpGet(URLs);
        }
    }
    if (h > -1) {
        if (i > -1) {
            if (h < i) {

            }
        }
    }
    if (b > -1) {
            var n = str.search(preimageregex);
            var lengthcheck = 0;
            subreddit = "";
            oldstr = str.replace(imageregex, "");
            if (n > -1) {
                shifter();
            } else {
                error = true;
                errortype = "basic";
                console.log("Not a subreddit");
                prepareResponse();
            }
    }
}

function httpGet(URL) {
    if (remaining > 0) {
        xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", URL, false);
        xmlHttp.setRequestHeader("Authorization", authorization);
        xmlHttp.send(null);
        basshunter = xmlHttp.responseText;
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
            CLIENT.submit("Error: A Basic error occured. For more info ask the Random dude.");
        }
        if (errortype == "supply") {
            CLIENT.submit("Error: All 12,500 daily credits were used up. Sorry.");
        }
        if (errortype == "time") {
            CLIENT.submit("No images found");
        }
        error = false;
    } else {
        if (up === true) {
            CLIENT.submit("The image has been " + str.match(upvoteregex) + "ed");
        }
        if (up === false) {
            CLIENT.submit("The image has been " + str.match(downvoteregex) + "ed");
        }
    }
}

function stopRegexTime() {
    var res = basshunter.match(idregex);
    var res2 = res.match(idregex2);
    var string = res2.split('"');
    var copacobana = string.filter(Boolean);
    special = Math.floor(Math.random() * copacobana.length);
    id = copacobana[special];
    var bit = basshunter.match(titleregex);
    var bit2 = bit.match(titleregex2);
    var byte = bit2.split('"');
    var northpole = byte.filter(Boolean);
    title = northpole[special];
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
        CLIENT.submit(id + "\n" + title);
    }
    if (itype == "gallery") {
        CLIENT.submit(id + "\n" + title);
    }
    if (itype == "meme") {
        CLIENT.submit(id + "\n" + title);
    }
}

$(function() {
    var socket = io('/' + window.channel);
    socket.on('message', function(msg) {
        setTimeout(function() {
            main();
        }, 750);


    });
});

getrequestnumber();

console.log("ImgurBot Beta has loaded :)");
