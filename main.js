//This is the SpooksBot v2.5. Handcrafted specially for the Spooky Chat, it uses various sooper seekret APIs to deliver 
//the most fresh and high quality responses.

/*\ 
|*|
|*| ImgurBot Presetting
|*|
\*/

var error = false;
var URLs = "";
var score = 0;
var sort = ["day", "week", "month", "year" , "all"];
var locked = 0;
var AntiSpam = false;

setInterval(function() {
    if (score > 0) {
        score--;
    }
}, 8000);

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

function uploadImage() {
    if (locked == "0") {
        response = "";
        $.ajax({
            url: 'https://api.imgur.com/3/image',
            headers: {
                'Authorization': authorization
            },
            type: 'POST',
            data: {
                'image': appendix
            },
            success: function(text) {
                response = text;
                returnUrl();
            }
        });
    } else {
        error = true;
        errortype = "locked";
        prepareResponse();
    }
}

function returnUrl() {
    var solar = JSON.stringify(response);
    var sunlight = solar.match(idregex);
    var maple = stringify(sunlight);
    var oak = maple.match(idregex2);
    var palmtree = stringify(oak);
    var preURL = palmtree.replace('"', "");
    URLz = preURL.replace('"', "");
    itype = "response";
    prepareImage();
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

function vote() {
    if (typeof id !== undefined) {
        xmlHttp = new XMLHttpRequest();
        if (up === true) {
            xmlHttp.open("POST", "https://api.imgur.com/3/gallery/image/" + id + "/vote/up", false);
        }
        if (up === false) {
            xmlHttp.open("POST", "https://api.imgur.com/3/gallery/image/" + id + "/vote/down", false);
        }
        xmlHttp.setRequestHeader("Authorization", authorization);
        xmlHttp.send(null);
        if (undo == "0") {
            undo = 1;
        } else {
            undo = 0;
        }
        remaining--;
        prepareResponse();
    } else {
        error = true;
        errortype = "null";
        prepareResponse();
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
var saveregex = /(save|post)+ *(to|at|on|in) *imgur/ig;
var upvoteregex = /up(vote|boat)/ig;
var downvoteregex = /down(vote|boat)/ig;
var hashtagregex = /#(\w)+/gi;
var bestregexlel = /#best(?!\w)/ig;
var randomregex = /#random(?!\w)/ig;

var idregex = /{"id":"(\w{5}|\w{7})"/g;
var idregex2 = /"(\w{5}|\w{7})"/g;

var urlregex = /https*:\/\/(\w|\.|\/|-)+\.(gif|jpg)/g;

var authorization = 'Client-ID ' + clientId;

/*\
|*|
|*| Checking Function
|*|
\*/

function checkem() {
    var text = "";
    var possible = "0123456789";

    for (var i = 0; i < 6; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

String.prototype.insert = function (index, string) {
  if (index > 0)
    return this.substring(0, index) + string + this.substring(index, this.length);
  else
    return string + this;
};

var checkemregex = /[A-Za-z]{1,3}(eck|ek|oll)+(ing|em|in|this|dese)+/ig;
var dubsregex = /(\d)\1+/g;
var increasingregex = /(123|234|345|456|567|678|789|890|098|987|876|765|654|543|432|321|1234|2345|3456|4567|5678|6789|7890|0987|9876|8765|7654|6543|5432|4321|12345|23456|34567|45678|56789|67890|09876|98765|87654|76543|65432|54321|123456|234567|345678|456789|567890|098765|987654|876543|765432|654321)/g;

var dubsregexA = /(\d)(\d)\2(\d)(\d)\4/g;
var dubsregexB = /(\d)\1(\d){2}(\d)\3/g;
var dubsregexC = /(\d)\1(\d)(\d)\3(\d)/g;
var dubsregexD = /(\d)\1(\d)\2(\d)\3/g;

var tripsregexA = /(\d)\1\1(\d)(\d)\3/g;
var tripsregexB = /(\d)\1(\d)(\d)\3\3/g;

dubs = false;

function dubssurvive(){
    dubsarray = checkthis.match(dubsregex);
    if (dubsarray == null){
        dubsarray = [];
    }
    if (dubsarray.length >= 1){
        randomnumber = Math.floor(Math.random()*2);
        if (randomnumber == 0){
            processString();
        } else {
            console.log("this would have been dubs");
            killdubs();
        }
    } else {
        dubs = false;
        finalstring = checkthis;
        prepareImage();
    }
    
}

function killdubs(){
    checkthis = checkem();
    isitdubs = checkthis.search(dubsregex);
    if (isitdubs == -1){
        dubs = false;
        finalstring = checkthis;
        prepareImage();
    } else {
        killdubs();
    }
}

function processString() {
    dubs = true;
    dubsarray = checkthis.match(dubsregex);
    console.log(dubsarray.length);
    if (dubsarray.length > 1){
        gohighlight();
    } else if (dubsarray.length == 1) {
        finalstring = checkthis;
        dubslength = dubsarray[0].length;
        dubspos = checkthis.search(dubsregex);
        switch (dubslength){
            case 2:
                finalstring = finalstring.insert(dubspos,"#FFD700");
                break;
            case 3:
                finalstring = finalstring.insert(dubspos,"#8DF0F7");
                break;
            case 4:
                finalstring = finalstring.insert(dubspos,"#8DF0F7");
                break;
            case 5:
                finalstring = finalstring.insert(dubspos,"#ED5132");
                break;
            case 6:
                finalstring = finalstring.insert(dubspos,"#C32BFF");
                break;
        }
        finalstring = finalstring.insert(dubspos+dubslength+7,"#FFFFFF");
        prepareImage();
    }
}

function gohighlight(){
        finalstring = checkthis;
        if(checkthis.search(tripsregexA) > -1){
            finalstring = finalstring.insert(0,"#FF00BF");
            finalstring = finalstring.insert(10,"#FFFFFF");
            finalstring = finalstring.insert(18,"#FF00BF");
        } else if(checkthis.search(tripsregexB) > -1){
            finalstring = finalstring.insert(0,"#FF00BF");
            finalstring = finalstring.insert(9,"#FFFFFF");
            finalstring = finalstring.insert(17,"#FF00BF");
        } else if(checkthis.search(dubsregexA) > -1){
            finalstring = finalstring.insert(1,"#FF00BF");
            finalstring = finalstring.insert(10,"#FFFFFF");
            finalstring = finalstring.insert(18,"#FF00BF");
        } else if(checkthis.search(dubsregexB) > -1){
            if (checkthis.search(dubsregexD) > -1){
                finalstring = finalstring.insert(0,"#FF00BF");
            } else {
                finalstring = finalstring.insert(0,"#FF00BF");
                finalstring = finalstring.insert(9,"#FFFFFF");
                finalstring = finalstring.insert(18,"#FF00BF");
            }
        } else if(checkthis.search(dubsregexC) > -1){
            finalstring = finalstring.insert(0,"#FF00BF");
            finalstring = finalstring.insert(9,"#FFFFFF");
            finalstring = finalstring.insert(17,"#FF00BF");
            finalstring = finalstring.insert(26,"#FFFFFF");
        }
        prepareImage();
}

/*\
|*|
|*| News (RSS) Sourcing API
|*|
\*/

$('head').append('<script src="https://www.google.com/jsapi"></script>');

function guugle(){google.load('feeds', 1, {
        callback: function() {
            // do stuff, if you want - it doesn't matter, because the page isn't blank!
        }
    } );
    console.log("Google Feeds API has succesfully loaded :)");
}

setTimeout(function(){guugle();}, 3000);

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

/*\
|*|
|*| Dictionary Widget
|*|
\*/

var define1regex = /wh*at does (?!that|this)(\w)+ mean/gi;
var define2regex = /define (\w)+/gi;

function extractcase1() {
    preword3 = str.match(define1regex);
    preword2 = preword3[0];
    preword = preword2.split(" ");
    daword = preword[preword.length-2];
}

function extractcase2(){
    preword3 = str.match(define2regex);
    preword2 = preword3[0];
    preword = preword2.split(" ");
    daword = preword[preword.length-1];
}

function define(word){
        xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", "http://glosbe.com/gapi/translate?from=eng&dest=eng&format=json&phrase="+word+"&pretty=true", false);
        xmlHttp.send(null);
        basshunter = xmlHttp.responseText;
        array = JSON.parse(basshunter).tuc;
        return array[0].meanings[0].text;
}

/*\
|*|
|*| The Main Portion
|*|
\*/

function main() {
    str = $('#messages').children()[$('#messages').children().length - 1].innerHTML.toLowerCase();
    largearray = $('#messages').children();

    a = str.search(hashtagregex);
    b = str.search(preimageregex);
    c = str.search(randomregex);
    d = str.search(galleryregex);
    e = str.search(upvoteregex);
    f = str.search(downvoteregex);
    g = str.search(memesregex);
    h = str.search(saveregex);
    l = str.search(bestregexlel);
    m = str.indexOf("#news");
    n = str.search(checkemregex);

        if (a > -1) {
            if (d > -1){
            itype = "gallery";
            URLs = "https://api.imgur.com/3/gallery/hot/viral/0.json";
            httpGet(URLs);
        } else if (c > -1) {
            id = makeid();
            img = new Image();
            img.src = "https://i.imgur.com/" + id + ".jpg";
            timer();
        } else if (g > -1) {
            itype = "meme";
            URLs = "https://api.imgur.com/3/g/memes";
            httpGet(URLs);
        } else if (l > -1) {
            itype = "best";
            sortresult = sort[Math.floor(Math.random() * sort.length)];
            URLs = "https://api.imgur.com/3/gallery/top/" + sortresult;
            httpGet(URLs);
        } else if (m > -1){
            itype = "news";
            feed = new google.feeds.Feed(newsURL);
            feed.setNumEntries(feedlimit);
            loadit();
        } else {
        alaska = str.match(hashtagregex);
        canada = alaska[alaska.length-1];
        if (str.lastIndexOf("color: ")+7 < str.lastIndexOf(canada)){
        itype = "subreddit";        
        subreddit = "/r/" + canada.substring(1);
        URLs = "https://api.imgur.com/3/gallery" + subreddit;
        httpGet(URLs);
        } else {
            console.log("Autoreject of #COLOR");
        }
            }
        }
   else if (h > -1) {
        var arrayLength = largearray.length;
        var megastr = "";
        for (var i = 0; i < arrayLength; i++) {
            megastr = megastr + largearray[i].innerHTML.toLowerCase();
        }
        var valid = megastr.search(urlregex);
        if (valid !== -1) {
            var jake = megastr.match(urlregex);
            appendix = jake[jake.length - 1];
            uploadImage();
        } else {
            error = true;
            errortype = "null";
            prepareResponse();
        }
    } else if (b > -1) {
        itype = "subreddit";
        hawaii = str.match(imageregex);
        subreddit = hawaii[0];
        URLs = "https://api.imgur.com/3/gallery" + subreddit;
        httpGet(URLs);
    } else if (e > -1) {
        up = true;
        vote();
    } else if (f > -1) {
        up = false;
        vote();
    } else if (n > -1){
        itype = "checkem";
        checkthis = checkem();
        dubssurvive();
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
        if (errortype == "locked") {
            console.log("Lock Error: Must wait 10 seconds before saving to Imgur.");
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
    if (itype == "random"){
        if (score < 6){
        CLIENT.submit(iURL);
        score++;
        }
    } else if (itype == "subreddit"){
        CLIENT.submit("https://i.imgur.com/" + id + ".jpg" + "\n" + title);
        score++;
    } else if (itype == "gallery"){
        if (album === false){
        CLIENT.submit("https://i.imgur.com/" + id + ".jpg" + "\n" + title);
        } else {
            CLIENT.submit("https://i.imgur.com/" + id + ".jpg" + "\n" + title + "\n" + "See more at " + albumlink);
        }
        score++;
    } else if (itype == "meme"){
        if (album === false){
        CLIENT.submit("https://i.imgur.com/" + id + ".jpg" + "\n" + title);
        } else {
            CLIENT.submit("https://i.imgur.com/" + id + ".jpg" + "\n" + title + "\n" + "See more at " + albumlink);
        }
        score++;
    } else if (itype == "best"){
        if (album === false){
        CLIENT.submit("https://i.imgur.com/" + id + ".jpg" + "\n" + title);
        } else {
            CLIENT.submit("https://i.imgur.com/" + id + ".jpg" + "\n" + title + "\n" + "See more at " + albumlink);
        }
        score++;
    } else if (itype == "response"){
        CLIENT.submit("Here is your image URL: https://imgur.com/" + URLz);
        AntiSpam = true;
        score++;
        locked = 1;
        unlockslowly();
    } else if (itype == "news"){
        CLIENT.submit(title + "\n" + link);
        score++;
    } else if (itype == "define"){
        CLIENT.submit(daword + ": " + meaning);
        score++;
    } else if (itype == "checkem"){
        if (dubs === false){
        CLIENT.submit("#FFFFFF" + finalstring);
        } else {
            CLIENT.submit("#FFFFFF" + finalstring + "\n" + "https://i.imgur.com/Xpb0MWj.png");
        }
        score++;
    }
    undo = 1;
    AntiSpam = true;
    setTimeout(function(){AntiSpam=false;}, 650);
    } else if (score == 5){
        CLIENT.submit("$Arial|#red*Please wait 6 seconds before sending again*");
        undo = 1;
        score++;
    AntiSpam = true;
    setTimeout(function(){AntiSpam=false;}, 650);
    }
}

function unlockslowly() {
    setTimeout(function() {
        locked = "0";
    }, 10000);
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

console.log("SpooksBot Beta has loaded :)");
