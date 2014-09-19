// ImgurBot

var error = false,
URLs = "",
score = 0,
sort = ["day", "week", "month", "year" , "all"],
locked = 0,
AntiSpam = false,
infinite = true,
infinitedubs = 0,
clientId = "76e0353dbfd399a";

setInterval(function() {
    if (score > 0) {
        score--;
    }
}, 5000);

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
    
    $.ajax({
        type: "GET",
        url: "https://api.imgur.com/3/credits",
        headers: {"Authorization": authorization},
        complete: function(a,b){
            
        }
    })
}

function stopRegexTime() {
    var copacobana = JSON.parse(basshunter).data;
    if (copacobana !== null){
    special = copacobana[Math.floor(Math.random() * copacobana.length)];
    album = special.is_album;
    if (album === false){
    id = special.id;
    } else {
        id = special.cover;
        albumlink = special.link;
    }
    pretitle = special.title;
    title = pretitle.replace('\"', '"');
        if (title == "untitled") {
        title = "No Title";
    }
    prepareImage();
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

    if (img.height <= 81) {
        text = makeid();
        img = new Image();
        img.onload = function(){checkImage();};
        img.src = "https://i.imgur.com/" + text + ".jpg";
    } else {
        iURL = img.src;
        itype = "random";
        prepareImage();
    }
}

function httpGet(URL) {
    if (remaining > 0) {
        xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", URL, false);
        xmlHttp.setRequestHeader("Authorization", authorization);
        xmlHttp.send(null);
        basshunter = xmlHttp.responseText;
        remaining--;
        var data = basshunter.indexOf('{"data":[],');
        if (data == -1){
        stopRegexTime();
        } else {
            error = true;
            errortype = "basic";
            prepareResponse();
        }
    } else {
        error = true;
        errortype = "supply";
        prepareResponse();

    }
}

var preimageregex = /ima*ge*\s*\/r\/(\w+)/ig;
var imageregex = /\/r\/(\w+)/i;
var galleryregex = /#gal+ery(?!\w)/ig;
var memesregex = /#(me|may){2,}s*(?!\w)/ig;
var hashtagregex = /# ?(\w)+/gi;
var truehashtagregex = /(\w)+/gi;
var bestregexlel = /#best(?!\w)/ig;
var randomregex = /#random(?!\w)/ig;

var idregex = /{"id":"(\w{5}|\w{7})"/g;
var idregex2 = /"(\w{5}|\w{7})"/g;

var urlregex = /https*:\/\/(\w|\.|\/|-)+\.(gif|jpg|jpeg)/gi;

var authorization = 'Client-ID ' + clientId;

// Checkem

function checkem() {
    if (infinitedubs == 0){
    var text = "";
    var possible = "123456789";
    
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    possible = possible + "0";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        
    return text;
    } else if (infinitedubs == 1){
        var text = "";
        var possible = "123456789";
        var dubscombo = ["00","11","22","33","44","55","66","77","88","99"];
        
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        possible = possible + "0";
        
        for (var i = 0; i < 3; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        
        text += dubscombo[Math.floor(Math.random()*dubscombo.length)];
        return text;
    } else {
        var sexscombo = ["111111","222222","333333","444444","555555","666666","777777","888888","999999"];
        text = sexscombo[Math.floor(Math.random()*sexscombo.length)];
        return text;
    }
}

String.prototype.insert = function (index, string) {
  if (index > 0)
    return this.substring(0, index) + string + this.substring(index, this.length);
  else
    return string + this;
};

var checkemregex = /([A-Za-z]{1,3}(ec(h|k)|ek|oll)|(bowl|rawl))+ *(ing|(\w)*em|in|this|dese|de+ze*)+(?! *((\w)+)|\.)/ig;

var dubsregex = /(\d)\1$/g;
var tripsregex = /(\d)\1\1$/g;
var quadsregex = /(\d)\1\1\1$/g;
var quintsregex = /(\d)\1\1\1\1$/g;
var sexregex = /(\d)\1\1\1\1\1$/g;

dubs = false;

function processString() {
    dubs = false;
    if (checkthis.search(sexregex) > -1){
        text = checkthis.insert(0,"#CC00FF");
        dubs = true;
    } else if (checkthis.search(quintsregex) > -1){
        text = checkthis.insert(1,"#FF0000");
        dubs = true;
    } else if (checkthis.search(quadsregex) > -1){
        text = checkthis.insert(2,"#00FF15");
        dubs = true;
    } else if (checkthis.search(tripsregex) > -1){
        text = checkthis.insert(3,"#00E1FF");
        dubs = true;
    } else if (checkthis.search(dubsregex) > -1){
        text = checkthis.insert(4,"#FFE100");
        dubs = true;
    } else {
        text = checkthis;
    }
    prepareImage();
}

// Google News

$('head').append('<script src="https://www.google.com/jsapi"></script>');

function guugle(){google.load('feeds', 1, {
        callback: function() {} //intentionally left blank
    } );
    console.log("Google Feeds API and SpooksBot have succesfully loaded :)");
}

setTimeout(function(){guugle();}, 1500);

var feedlimit = 10;

function runfunction(result){
    mayme = result.feed.entries;
    newsarray = mayme;
    newsresult = newsarray[Math.floor(Math.random() * newsarray.length)];
    title = newsresult.title;
    prelink = newsresult.link;
    link1 = prelink.match(boxregex);
    link2 = stringify(link1).match(finalboxregex);
    link = link2[0];
    prepareImage();
}

function loadit(){ 
    feed.load(runfunction);
}

var newsURL = "http://news.google.com/?output=rss";
var boxregex = /&url=(https*:\/\/(.)+)/gi;
var finalboxregex = /(https*:\/\/(.)+)/gi;

// Main Function

function main() {
    str = $('#messages').children()[$('#messages').children().length - 1].outerHTML;
    str2 = $('#messages').children()[$('#messages').children().length - 2].innerHTML;

    a = str.search(hashtagregex);
    b = str.search(preimageregex);
    c = str.search(randomregex);
    d = str.search(galleryregex);
    g = str.search(memesregex);
    l = str.search(bestregexlel);
    m = str.indexOf("#news");
    n = str.search(checkemregex);
    p = str.indexOf("107001000");
    q = str.indexOf("-000");
    s = str2.indexOf("107001000");
    r = str.indexOf("personal-message");
    
    if (r == -1){
    if (n > -1) {
        itype = "checkem";
        checkthis = checkem();
        processString();
    } else if (b > -1) {
        itype = "subreddit";
        hawaii = str.match(imageregex);
        subreddit = hawaii[0];
        URLs = "https://api.imgur.com/3/gallery" + subreddit;
        httpGet(URLs);
    } else if (p > -1 && q > -1 || q > -1 && s > -1) {
                if (infinite){
        if (infinitedubs == 0){
        infinitedubs = 1;
        CLIENT.submit("Infinite Dubs mode unlocked");
        score++
        AntiSpam = true;
        setTimeout(function(){AntiSpam=false;}, 625);
        } else if (infinitedubs == 1){
            infinitedubs = 2;
            CLIENT.submit("??????");
            score++
            AntiSpam = true;
            setTimeout(function(){AntiSpam=false;}, 625);
        }
        } else {
            console.log("disabled");
        }
    } else if (a > -1) {
        if (d > -1) {
            itype = "gallery";
            URLs = "https://api.imgur.com/3/gallery/hot/viral/0.json";
            httpGet(URLs);
        } else if (c > -1) {
            id = makeid();
            img = new Image();
            img.onload = function(){checkImage();};
            img.src = "https://i.imgur.com/" + id + ".jpg";
        } else if (g > -1) {
            itype = "meme";
            URLs = "https://api.imgur.com/3/g/memes";
            httpGet(URLs);
        } else if (l > -1) {
            itype = "best";
            sortresult = sort[Math.floor(Math.random() * sort.length)];
            URLs = "https://api.imgur.com/3/gallery/top/" + sortresult;
            httpGet(URLs);
        } else if (m > -1) {
            itype = "news";
            feed = new google.feeds.Feed(newsURL);
            feed.setNumEntries(feedlimit);
            loadit();
        } else {
            alaska = str.match(hashtagregex);
            canada = alaska[alaska.length - 1];
            if (str.lastIndexOf("color: ") + 7 < str.lastIndexOf(canada)) {
                itype = "subreddit";
                subreddit = "/r/" + canada.match(truehashtagregex);
                URLs = "https://api.imgur.com/3/gallery" + subreddit;
                httpGet(URLs);
            } else {
                console.log("Autoreject of #COLOR");
            }
        }
    } 
    }
}

function prepareResponse() {
    if (error === true) {
        if (errortype == "basic") {
            console.log("Basic Error: A Basic error occurred. For more info ask the Random dude.");
        }
        if (errortype == "supply") {
            if (score < 5) {
                CLIENT.submit("$Arial|#redSupply Error: All 12,500 daily credits have been used up. Sorry.");
                score++;
                AntiSpam = true;
                setTimeout(function(){AntiSpam=false;}, 650);
            }
        }
        if (errortype == "null") {
            console.log("Null Error: You are referencing a nonexistent object.");
        }
        error = false;
    } else {
        if (undo == "0") {
            if (up === true) {
                CLIENT.submit("The image has been upvoted");
                score++;
                AntiSpam = true;
                setTimeout(function(){AntiSpam=false;}, 650);
            }
            if (up === false) {
                CLIENT.submit("The image has been downvoted");
                score++;
                AntiSpam = true;
                setTimeout(function(){AntiSpam=false;}, 650);
            }
        } else {}
    }
}

function stringify(strArray) {
    var tempstring = "";
    for (var j = 0; j < strArray.length; j++) {
        tempstring = tempstring + strArray[j];
    }
    return tempstring;
}

function prepareImage() {
    if (score < 5){
    if (itype == "subreddit"){
        CLIENT.submit("https://i.imgur.com/" + id + ".jpg" + "\n" + title);
    } else if (itype == "checkem"){
        if (dubs === false){
        CLIENT.submit(text);
        } else {
           superrandom = Math.floor(Math.random()*6);
           if (superrandom !== 5){
                CLIENT.submit(text + "\n" + "https://i.imgur.com/Xpb0MWj.png");
           } else {
                CLIENT.submit(text + "\n" + "https://i.imgur.com/CkdcWVU.gif");
           }
        }
    } else if (itype == "dropbox"){
        CLIENT.submit(iURL);
    } else if (itype == "gallery"){
        if (album === false){
        CLIENT.submit("https://i.imgur.com/" + id + ".jpg" + "\n" + title);
        } else {
            CLIENT.submit("https://i.imgur.com/" + id + ".jpg" + "\n" + title + "\n" + "See more at " + albumlink);
        }
    } else if (itype == "meme"){
        if (album === false){
        CLIENT.submit("https://i.imgur.com/" + id + ".jpg" + "\n" + title);
        } else {
            CLIENT.submit("https://i.imgur.com/" + id + ".jpg" + "\n" + title + "\n" + "See more at " + albumlink);
        }
    } else if (itype == "best"){
        if (album === false){
        CLIENT.submit("https://i.imgur.com/" + id + ".jpg" + "\n" + title);
        } else {
            CLIENT.submit("https://i.imgur.com/" + id + ".jpg" + "\n" + title + "\n" + "See more at " + albumlink);
        }
    } else if (itype == "news"){
        CLIENT.submit(title + "\n" + link);
    } else if (itype == "random"){
        CLIENT.submit(iURL);
    }
    undo = 1;
    AntiSpam = true;
    setTimeout(function(){AntiSpam=false;}, 625);
    } else if (score == 5){
        CLIENT.submit("$Arial|#red*Please wait 6 seconds before sending again*");
        undo = 1;
        AntiSpam = true;
        setTimeout(function(){AntiSpam=false;}, 625);
    }
    score++;
}

$(function() {
    var socket = io('/' + window.channel);
    socket.on('message', function() {
      if (AntiSpam === false){
        if (score < 6) {
                main();
        } else {
            console.log("Bot is being SPAMMED"); 
        }} else {
            console.log("Bot is being SPAMMED");
        }

    });
});

getrequestnumber();
