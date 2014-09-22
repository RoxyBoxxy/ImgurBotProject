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
            AntiSpam = true;
            setTimeout(function() {
                AntiSpam = false;
            }, 600);
            score++;
        }
    }
}

console.log("... checkImage() ...");

function main() {
    str = $('#messages').children().slice(-1)[0].outerHTML;
    a = str.search(/@ ?(\w)+/gi);
    c = str.search(/@random/ig);
    m = str.search(/@news/ig);
    r = str.indexOf("personal-message");
    if (r == -1) {
        if (c > -1) {
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
                            AntiSpam = true;
            setTimeout(function() {
                AntiSpam = false;
            }, 600);
            score++;
            });
        } else if (a > -1) {
            alaska = str.match(/@ ?(\w)+/gi);
            canada = alaska[alaska.length - 1];
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
                                        AntiSpam = true;
            setTimeout(function() {
                AntiSpam = false;
            }, 600);
            score++;
                        }
                    }
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
            } else if (score == 5) {
                CLIENT.submit("#redWait 10 seconds before sending again.");
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
