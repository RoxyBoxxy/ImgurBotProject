
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
    $.ajax({
    type: "GET",
    url: URL,
    headers: {"Authorization": authorization},
    success: function(a){
        var b = a.data;
        if (b !== undefined){
            C = b[Math.floor(Math.random() * b.length)];
            title = C.title;
            album = C.is_album;
            prepareImage();
        } 
        }
    });
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
    if (infinitedubs === 0){
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

var checkemregex = /([A-Za-z]{1,3}(ec(h|k)|ek|oll)|(bowl|rawl|get))+ *(ing|(\w)*em|in|this|dese|de+ze*)+(?! *((\w)+)|\.)/ig;

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
    
    str = $('#messages').children().slice(-1)[0].outerHTML;

    a = str.search(hashtagregex);
    b = str.search(preimageregex);
    c = str.search(randomregex);
    d = str.search(galleryregex);
    g = str.search(memesregex);
    l = str.search(bestregexlel);
    m = str.indexOf("#news");
    m = str.indexOf("#shit");
    n = str.search(checkemregex);
    p = str.indexOf("107001000");
    q = str.indexOf("-000");
    r = str.indexOf("personal-message");
    
    if (r == -1){
    if (n > -1) {
        itype = "checkem";
        checkthis = checkem();
        processString();
    } else if (b > -1) {
        hawaii = str.match(imageregex);
            $.ajax({
            type: "GET",
            url: "https://api.imgur.com/3/gallery" + hawaii[0],
            headers: {"Authorization": authorization},
            success: function(a){
            var b = a.data;
            if (b !== undefined){
            C = b[Math.floor(Math.random() * b.length)];
            CLIENT.submit("https://i.imgur.com/" + C.id + ".jpg" + "\n" + C.title);
            } 
            }
            });
            AntiSpam = true;
            setTimeout(function(){AntiSpam=false;}, 600);
            score++;
    } else if (p > -1 && q > -1) {
                if (infinite){
        if (infinitedubs == 0){
        infinitedubs = 1;
        CLIENT.submit("Infinite Dubs mode unlocked");
        score++;
        AntiSpam = true;
        setTimeout(function(){AntiSpam=false;}, 600);
        } else if (infinitedubs == 1){
            infinitedubs = 2;
            CLIENT.submit("??????");
            score++;
            AntiSpam = true;
            setTimeout(function(){AntiSpam=false;}, 600);
        } else if (infinitedubs == 2){
            infinitedubs = 0;
            CLIENT.submit("Cheats Disabled");
            score++;
        AntiSpam = true;
        setTimeout(function(){AntiSpam=false;}, 600);
        }
        } else {
            console.log("disabled");
        }
    } else if (a > -1) {
        if (d > -1) {
                $.ajax({
                type: "GET",
                url: "https://api.imgur.com/3/gallery/hot/viral/0.json",
                headers: {"Authorization": authorization},
                success: function(a){
                var b = a.data;
                if (b !== undefined){
                C = b[Math.floor(Math.random() * b.length)];
                title = C.title;
                    if (!C.is_album){
                    id = C.id;
                    CLIENT.submit("https://i.imgur.com/" + id + ".jpg" + "\n" + title);
                    } else {
                    id = C.cover;
                    albumlink = C.link;
                    CLIENT.submit("https://i.imgur.com/" + id + ".jpg" + "\n" + title + "\n" + "See more at " + albumlink);
                    }
                } 
                }
                });
        } else if (c > -1) {
            id = makeid();
            img = new Image();
            img.onload = function(){checkImage();};
            img.src = "https://i.imgur.com/" + id + ".jpg";
        } else if (g > -1) {
                $.ajax({
                type: "GET",
                url: "https://api.imgur.com/3/g/memes",
                headers: {"Authorization": authorization},
                success: function(a){
                var b = a.data;
                if (b !== undefined){
                C = b[Math.floor(Math.random() * b.length)];
                title = C.title;
                            if (!C.is_album){
                    id = C.id;
                    CLIENT.submit("https://i.imgur.com/" + id + ".jpg" + "\n" + title);
                } else {
                    id = C.cover;
                    albumlink = C.link;
                    CLIENT.submit("https://i.imgur.com/" + id + ".jpg" + "\n" + title + "\n" + "See more at " + albumlink);
                }
                } 
                }
                });
                AntiSpam = true;
                setTimeout(function(){AntiSpam=false;}, 600);
                score++;
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
                subreddit = "/r/" + canada.match(truehashtagregex);
                    $.ajax({
                type: "GET",
                url: "https://api.imgur.com/3/gallery" + subreddit,
                headers: {"Authorization": authorization},
                success: function(a){
                    var b = a.data;
                    if (b !== undefined){
                        C = b[Math.floor(Math.random() * b.length)];
                        CLIENT.submit("https://i.imgur.com/" + C.id + ".jpg" + "\n" + C.title);
                        } 
                        }
                    });
                    AntiSpam = true;
                    setTimeout(function(){AntiSpam=false;}, 600);
                    score++;
            }
        }
    } 
    }
}

function prepareResponse() {
    if (error === true) {
        if (errortype == "null") {
            console.log("Null Error: You are referencing a nonexistent object.");
        }
        error = false;
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
    if (itype == "checkem"){
        if (dubs === false){
        CLIENT.submit(text);
        } else {
           superrandom = Math.floor(Math.random()*6);
           if (superrandom !== 5){
                CLIENT.submit(text + "\n" + "http://i.imgur.com/swvRm25.png");
           } else {
                CLIENT.submit(text + "\n" + "http://i.imgur.com/X1mfOpW.png");
           }
        }
    } else if (itype == "best"){
        if (!album){
            id = C.id;
            CLIENT.submit("https://i.imgur.com/" + id + ".jpg" + "\n" + title);
        } else {
            id = C.cover;
            albumlink = C.link;
            CLIENT.submit("https://i.imgur.com/" + id + ".jpg" + "\n" + title + "\n" + "See more at " + albumlink);
        }
    } else if (itype == "news"){
        CLIENT.submit(title + "\n" + link);
    } else if (itype == "random"){
        if (score < 5){
        CLIENT.submit(iURL);
        }
    }
    AntiSpam = true;
    setTimeout(function(){AntiSpam=false;}, 600);
    score++;
}

$(function() {
    var socket = io('/' + window.channel);
    socket.on('message', function() {
      if (AntiSpam === false){
        if (score < 5) {
                main();
        } else if (score == 5){
        CLIENT.submit("#redPlease wait 6 seconds before sending again");
        AntiSpam = true;
        setTimeout(function(){AntiSpam=false;}, 600);
        }}
    });
});

$.ajax({
    type: "GET",
    url: "https://api.imgur.com/3/credits",
    headers: {"Authorization": authorization},
    success: function(a){
        remaining = a.data.ClientRemaining;
    }
});



// Begin logging process and listen for commands
CLIENT.on('message', function(data) {
    var text = data.message.trim();
    if (data.nick !== undefined)
        var name = data.nick;
    var trueMessage = parser.removeHTML(parser.parse(text));
    trueMessage = trueMessage.trim();
    argumentString = trueMessage.substring(trueMessage.indexOf(" ") + 1);
    var argumentsArray = argumentString.split(" ");
    
    var r = $('#messages').children().slice(-1)[0].outerHTML.search(
    /message (personal-message|general-message|error-message|note-message|system-message)/g
    );
    
    if (name !== botnick && !(banned.indexOf(name) > -1)) {
        
        //COMMAND HANDLERS
        if (text.contains("!toggle")) {
            toggle(name);
        } else if (text.contains("!ops")) {
            listMasters() 
        } else if (text.contains("watch?v=")) {
            getTitles(text);
        } else if (text.contains("!trigger")) {
            toggleTrigger(name);
        } else if (text.contains("!weather")) {
            weather(argumentString);
        } else if (text.contains("!quote")) {
            quote(argumentString);
        } else if (text.contains("!block")) {
            blockban(name, argumentString);
        } else if (text.contains("!unblock")) {
            unblockban(name, argumentString);
        } else if (text.contains("!iploc")) {
            iploc(argumentString);
        } else if (text.contains("!cursor")) {
            toggleCursor(name);
        } else if (text.contains("!radio")) {
            send("#cyanYou can listen to Spooks Radio here: http://spooksradio.tk");
        } else if (text.contains("!track")) {
            getSong();
        } else if (text.contains("!stream")) {
            send("#cyanSpooks Radio Stream: http://216.170.123.121:8000/listen.pls?sid=1"); 
        } else if (text.contains("!banlist")) {
            banlist(name);
            // Logging messages to my server :3
            $.ajax({
                url : "http://bruno02468.com/masterbot/api.php?action=log&msg=" + encodeURIComponent(text),
                type : 'GET',
                success : function(data) { console.log("Succesfully pushed to server!"); }
            });
        }
            
    }
        
});


// ==============================
// |     COMMAND FUNCTIONS      |
// ==============================

// Fetches a random message from the server and sends it


// Fetches the count of logged messages and sends it


// Sends the title for a given YouTube video ID
function getTitle(url) {
    var video_id = url.substring(url.indexOf("v=") + 2, url.indexOf("v=") + 13);
    var data = ajaxGet("http://bruno02468.com/masterbot/api.php?action=youtube&id=" + video_id);
    CLIENT.submit("#cyanTitle: " + data);
}

// Look for the titles of  YouTube videos in the messages
function getTitles(message) {
    var urlpattern = /(http|https):\/\/([\w\-_]+(?:(?:\.[\w\-_]+)+))([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])/gim;
    var idpattern = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/gim;
    var urls = message.match(urlpattern);
    console.log(urls);
    for (c in urls) {
        var id = urls[c].match(idpattern)[0];
        if (id !== undefined) {
            getTitle(id);
        }
    }
}

// Answers questions


// Coin flippin'


// Rollin'


// Lists masters
function listMasters() {
    var msg = "#orangeMy masters are ";
    for (var i = 0; i < masters.length - 1; i++) {
        msg += masters[i] + ", ";
    }
    msg += "and " + masters[masters.length - 1] + ".";
    send(msg);
}

// Toggles the bot
function toggle(name) {
    if (masters.indexOf(name) > -1) {
        disabled = !disabled;
        if (!disabled) {
            send("#greenMasterbot now enabled.");
        } else {
            CLIENT.submit("#redMasterbot now disabled.");
        }
    } else {
        CLIENT.submit("/pm " + name + "|#redYou do not have permission to toggle me. Stop it.");
    }
}

// Block someone from using the bot
function blockban(name, target) {
    if (masters.indexOf(name) > -1) {
    	if (!(banned.indexOf(target) > -1)) {
            CLIENT.submit("#redMaster " + name + " has blocked " + target + " from using the bot.");
            banned.push(target);
    	} else {
    	    CLIENT.submit("#redMaster " + name + ", that user is already blocked.");
    	}
    } else {
        CLIENT.submit("/pm " + name + "|#redYou do not have permission to do that. Stop it.");
    }
}

// Unblock someone from using the bot
function unblockban(name, target) {
    if (masters.indexOf(name) > -1) {
        var ind = banned.indexOf(target);
        if (ind > -1) {
            CLIENT.submit("#greenMaster " + name + " has unblocked " + target + " from using the bot.");
            banned.splice(ind, 1);
        } else {
            CLIENT.submit("#redMaster " + name + ", that user is not blocked.");
        }
    } else {
        CLIENT.submit("/pm " + name + "|#redYou do not have permission to do that. Stop it.");
    }
}

// List blocked users
function banlist(name) {
    if (masters.indexOf(name) > -1) {
        CLIENT.submit("/pm " + name + "|#cyanBan list: [" + banned + "].");
    } else {
        CLIENT.submit("/pm " + name + "|#redYou do not have permission to do that. Stop it.");
    }
}

// Toggles "?"-in-the-end trigger for random message sending
function toggleTrigger(name) {
    if (masters.indexOf(name) > -1) {
        if (answering) {
            send("#redQuestion answering now disabled.");
            answering = false;
        } else {
            send("#greenQuestion answering now enabled.");
            answering = true;
        }
    } else {
        CLIENT.submit("/pm " + name + "|#redYou do not have permission to do this. Stop it.");
    }
}

// Look up line from the database


// Gets a random image from a subreddit


// Roulette function


// Gets definition of a word


// Gets weather for a location
function weather(loc) {
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + loc + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys")
        .success(function(data) {
            if (data.query.results !== null) {
                var farenheit = data.query.results.channel.item.condition.temp;
                var celsius = (farenheit - 32) * (5 / 9);
                send('#cyanThe current temperature in ' + loc + ' is ' + farenheit + ' ºF or ' + Math.floor(celsius) + ' ºC, and current weather is: ' + data.query.results.channel.item.condition.text + ".");
            } else {
                send("#redNothing found for given location!");
            }
        }).fail(function() {
            send("#redNothing found for given location!");
        }
    );
}

// Gets location of IP
function iploc(ip) {
    $.getJSON("https://freegeoip.net/json/" + ip)
        .success(function(data) {
            if (data.city != "" && data.region_code != "" && data.country_name != "") {
                send("#cyanThe location of the IP " + ip + " is " + data.city + ", " + data.region_code + ", " + data.country_name + ".");
            } else {
                send("#redInvalid IP '" + ip + "' or location unavailable.");
            }
        }).fail(function() {
            send("#redNothing found for that IP.");
        }
    );
}

// Says something someone has leanred today


// Looks for a quote in a subreddit


// Crazy function to get the current /msg


// Toggles the bot
function toggleCursor(name) {
    if (masters.indexOf(name) > -1) {
        cursor = !cursor;
        if (cursor) {
            send("#greenAuto move cursor now enabled.");
        } else {
            CLIENT.submit("#redAuto move cursor now disabled.");
        }
    } else {
        CLIENT.submit("/pm " + name + "|#redYou do not have permission to toggle the automatic movement of the cursor. Stop it.");
    }
}

// Say the current track on Spooks Radio
function getSong() {
    var songname = ajaxGet("http://spooksradio.tk/currentsong_bruno.php");
    if (!songname) {
        songname = "nothing at the moment";
    }
    send("#cyanSpooks Radio is currently playing " + songname + ".");
}

// I'd just like to interject for a moment...


// Put stuff in the frame


// Put stuff in a corkboard


