$.getScript("https://www.google.com/jsapi", function() {
    console.log("Google Feeds API has loaded ...");
    google.load('feeds', 1, {
        callback: function() {} //intentionally left blank
    });

});

setInterval(function() {
    if (score > 0) {
        score--;
    }
}, 5000);

console.log("Spam protection loaded ...");

console.log("Loading Variables ...");

var score = 0,
    AntiSpam = false,
    infinite = true,
    infinitedubs = 0,
    feedlimit = 12,
    newsURL = "http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml";

console.log("... <News URL is: " + newsURL + "> ... This can be changed in the script.");
console.log("Variables have loaded ...");

console.log("Loading Functions ...");

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

console.log("... makeid() ...");

function checkImage() {
    if (img.height <= 81) {
        img = new Image();
        img.onload = function() {
            checkImage();
        };
        img.src = "https://i.imgur.com/" + makeid() + ".jpg";
    } else {
        if (score < 5) {
            CLIENT.submit(img.src);
        }
    }
}

console.log("... checkImage() ...");

function checkem() {
    if (infinitedubs === 0) {
        var text = "";
        var possible = "123456789";

        text += possible.charAt(Math.floor(Math.random() * possible.length));
        possible = possible + "0";

        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    } else if (infinitedubs == 1) {
        var text = "";
        var possible = "123456789";
        var dubscombo = ["00", "11", "22", "33", "44", "55", "66", "77", "88", "99"];

        text += possible.charAt(Math.floor(Math.random() * possible.length));
        possible = possible + "0";

        for (var j = 0; j < 3; j++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        text += dubscombo[Math.floor(Math.random() * dubscombo.length)];
        return text;
    } else {
        var sexscombo = ["111111", "222222", "333333", "444444", "555555", "666666", "777777", "888888", "999999"];
        text = sexscombo[Math.floor(Math.random() * sexscombo.length)];
        return text;
    }
}

console.log("... checkem() ...");

function main() {
    str = $('#messages').children().slice(-1)[0].outerHTML;
    a = str.search(/# ?(\w)+/gi);
    b = str.search(/ima*ge*\s*\/r\/(\w+)/ig);
    c = str.search(/spooksbot random/ig);
    m = str.search(/spooksbot news/ig);
    n = str.search(/([A-Za-z]{1,3}(ec(h|k)|ek|oll)|(bowl|rawl))+ *(ing|(\w)*em|in|this|dese|de+ze*)+(?! *((\w)+)|\.)/ig);
    p = str.indexOf("107001000");
    q = str.indexOf("-000");
    r = str.indexOf("personal-message");
    if (r == -1) {
        if (n > -1) {
            text = checkem();
            if (text.search(/(\d)\1$/g) == -1) {
                CLIENT.submit(text);
            } else {
                CLIENT.submit(text + "\n" + "https://i.imgur.com/Xpb0MWj.png");
            }
        } else if (b > -1) {
            hawaii = str.match(/\/r\/(\w+)/i);
            $.ajax({
                type: "GET",
                url: "https://api.imgur.com/3/gallery" + hawaii[0],
                headers: {
                    "Authorization": 'Client-ID 76e0353dbfd399a'
                },
                success: function(a) {
                    var b = a.data;
                    if (b !== undefined) {
                        C = b[Math.floor(Math.random() * b.length)];
                        CLIENT.submit("https://i.imgur.com/" + C.id + ".jpg" + "\n" + C.title);
                    }
                }
            });
        } else if (p > -1 && q > -1) {
            if (infinite) {
                if (infinitedubs == 0) {
                    infinitedubs = 1;
                    CLIENT.submit("Infinite Dubs mode unlocked");
                } else if (infinitedubs == 1) {
                    infinitedubs = 2;
                    CLIENT.submit("??????");
                } else if (infinitedubs == 2) {
                    infinitedubs = 0;
                    CLIENT.submit("Cheats Disabled");
                }
            } else {
                console.log("disabled");
            }
        } else if (a > -1) {
            alaska = str.match(/# ?(\w)+/gi);
            canada = alaska[alaska.length - 1];
            if (str.lastIndexOf("color: ") + 7 < str.lastIndexOf(canada)) {
                subreddit = "/r/" + canada.match(/(\w)+/gi);
                $.ajax({
                    type: "GET",
                    url: "https://api.imgur.com/3/gallery" + subreddit,
                    headers: {
                        "Authorization": 'Client-ID 76e0353dbfd399a'
                    },
                    success: function(a) {
                        var b = a.data;
                        if (b !== undefined) {
                            C = b[Math.floor(Math.random() * b.length)];
                            CLIENT.submit("https://i.imgur.com/" + C.id + ".jpg" + "\n" + C.title);
                        }
                    }
                });
            }
        } else if (c > -1) {
            id = makeid();
            img = new Image();
            img.onload = function() {
                checkImage();
            };
            img.src = "https://i.imgur.com/" + id + ".jpg";
        } else if (m > -1) {
            feed = new google.feeds.Feed(newsURL);
            feed.setNumEntries(feedlimit);
            feed.load(function(result) {
                mayme = result.feed.entries;
                newsresult = mayme[Math.floor(Math.random() * mayme.length)];
                title = newsresult.title;
                link = newsresult.link;
                CLIENT.submit(title + "\n" + link);
            });
        }
    }
}

console.log("... main() ...");
console.log("Functions have loaded ...");

$(function() {
    var socket = io('/' + window.channel);
    socket.on('message', function() {
        if (!AntiSpam) {
            if (score < 5) {
                main();
                AntiSpam = true;
                setTimeout(function() {
                    AntiSpam = false;
                }, 700);
                score++;
            } else if (score == 5) {
                CLIENT.submit("#redPlease wait 6 seconds before sending again");
                AntiSpam = true;
                setTimeout(function() {
                    AntiSpam = false;
                }, 500);
                score++;
            }
        }
    });
});

console.log("DOM eventlistener added to document ...");
console.log("... SpooksBot Lite 2.0 has succesfully loaded (I think) :) ...");
