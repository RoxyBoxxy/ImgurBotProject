//Loads google news API
$.getScript("https://www.google.com/jsapi",function(){
                google.load('feeds', 1, {
                callback: function() {} //intentionally left blank
            });
});

//Declare global vars
error = false,
    URLs = "",
    noSpam = {
        score : 0,
        fast : false
    },
    sort = ["day", "week", "month", "year", "all"],
    locked = 0,
    infinite = true,
    infinitedubs = 0,
    authorization = "Client-ID 76e0353dbfd399a";
    
//Generic AJAX request
function sendRequest(type, url, success) {
    $.ajax({
        type: type,
        url: url,
        headers: {
            "Authorization": authorization
        },
        success: function(info){success(info);}
    });
}

//Generic submit format
function send(message) {
    CLIENT.submit(message);
    noSpam.fast = true;
    setTimeout(function() {
        noSpam.fast = false;
    }, 600);
    noSpam.score++;
}

//Message processor
CLIENT.on('message', function(data) {
            if (!noSpam.fast && noSpam.score < 5) {
                str = data.message.trim();
                a = str.search(hashtagregex);
                b = str.search(preimageregex);
                c = str.search(randomregex);
                d = str.search(galleryregex);
                g = str.search(memesregex);
                l = str.search(bestregexlel);
                m = str.search(newsregex);
                n = str.search(checkemregex);
                p = str.indexOf("107001000");
                if (data.type != "personal-message") {
                    if (n > -1) {
                        checkthis = checkem();
                        string = parseInt(checkthis);
                        var insert;
                        if (string % 111111 == 0) {
                            text = checkthis.insert(0, "#CC00FF");
                        } else if (string % 11111 == 0) {
                            text = checkthis.insert(1, "#FF0000");
                        } else if (string % 1111 == 0) {
                            text = checkthis.insert(2, "#00FF15");
                        } else if (string % 111 == 0) {
                            text = checkthis.insert(3, "#00E1FF");
                        } else if (string % 11) {
                            text = checkthis.insert(4, "#FFE100");
                        } else {
                            text = checkthis;
                        }
                        send(text);
                    } else if (b > -1) {
                        sendRequest("GET", "https://api.imgur.com/3/gallery" + str.match(imageregex)[0], function(a) {
                            var b = a.data;
                            if (b) {
                                C = b[Math.floor(Math.random() * b.length)];
                                send("https://i.imgur.com/" + C.id + ".jpg" + "\n" + C.title);
                            }
                        });
                    } else if (p > -1 && q > -1 && infinite) {
                        if (infinitedubs == 0) {
                            infinitedubs = 1;
                            send("Infinite Dubs mode unlocked");
                        } else if (infinitedubs == 1) {
                            infinitedubs = 2;
                            send("??????");
                        } else if (infinitedubs == 2) {
                            infinitedubs = 0;
                            send("Cheats Disabled");
                        }
                    } else if (a > -1) {
                        if (d > -1) {
                            sendRequest("GET", "https://api.imgur.com/3/gallery/hot/viral/0.json", function(a) {
                                var b = a.data;
                                if (b) {
                                    C = b[Math.floor(Math.random() * b.length)];
                                    title = C.title;
                                    if (!C.is_album) {
                                        id = C.id;
                                        send("https://i.imgur.com/" + id + ".jpg" + "\n" + title);
                                    } else {
                                        id = C.cover;
                                        albumlink = C.link;
                                        send("https://i.imgur.com/" + id + ".jpg" + "\n" + title + "\n" + "See more at " + albumlink);
                                    }
                                }
                            });
                        } else if (c > -1) {
                            id = makeid();
                            img = new Image();
                            img.onload = function() {
                                checkImage();
                            };
                            img.src = "https://i.imgur.com/" + id + ".jpg";
                        } else if (g > -1) {
                            sendRequest("GET", "https://api.imgur.com/3/g/memes", function(a) {
                                var b = a.data;
                                if (b !== undefined) {
                                    C = b[Math.floor(Math.random() * b.length)];
                                    title = C.title;
                                    if (!C.is_album) {
                                        id = C.id;
                                        send("https://i.imgur.com/" + id + ".jpg" + "\n" + title);
                                    } else {
                                        id = C.cover;
                                        albumlink = C.link;
                                        send("https://i.imgur.com/" + id + ".jpg" + "\n" + title + "\n" + "See more at " + albumlink);
                                    }
                                }
                            });
                        } else if (l > -1) {
                            sortresult = sort[Math.floor(Math.random() * sort.length)];
                            sendRequest("GET", "https://api.imgur.com/3/gallery/top/" + sortresult, function(a) {
                                var b = a.data;
                                if (b) {
                                    C = b[Math.floor(Math.random() * b.length)];
                                    title = C.title;
                                    album = C.is_album;
                                    prepareImage();
                                }
                            });
                        } else if (m > -1) {
                            feed = new google.feeds.Feed(newsURL);
                            feed.setNumEntries(feedlimit);
                            feed.load(runfunction);
                        } else {
                            alaska = str.match(hashtagregex);
                            canada = alaska[alaska.length - 1];

                                subreddit = "/r/" + canada.match(truehashtagregex);
                                sendRequest("GET", "https://api.imgur.com/3/gallery" + subreddit, function(a) {
                                    var b = a.data;
                                    if (b !== undefined) {
                                        C = b[Math.floor(Math.random() * b.length)];
                                        send("https://i.imgur.com/" + C.id + ".jpg" + "\n" + C.title);
                                    }
                                });
                        }
                    }
                }
            }});

        setInterval(function() {
            noSpam.score > 0 && noSpam.score--;
        }, 5000);

        function makeid() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 1; i <= 5; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }

        function checkImage() {
            if (img.height <= 81) {
                text = makeid();
                img = new Image();
                img.onload = function() {
                    checkImage();
                };
                img.src = "https://i.imgur.com/" + text + ".jpg";
            } else {
                iURL = img.src;
                noSpam.score < 5 && send(iURL);
            }
        }

        preimageregex = /ima*ge*\s*\/r\/(\w+)/ig,
        imageregex = /\/r\/(\w+)/i,
        galleryregex = /(~|!|@|\$)gal+ery(?!\w)/ig,
        memesregex = /(~|!|@|\$)(me|may){2,}s*(?!\w)/ig,
        hashtagregex = /(~|!|@|\$) ?(\w)+/gi,
        truehashtagregex = /(\w)+/gi,
        bestregexlel = /(~|!|@|\$)best(?!\w)/ig,
        randomregex = /(~|!|@|\$)random(?!\w)/ig,
        newsregex = /(~|!|@|\$)(news|shit)/ig,
        idregex = /{"id":"(\w{5}|\w{7})"/g; idregex2 = /"(\w{5}|\w{7})"/g;
        urlregex = /https*:\/\/(\w|\.|\/|-)+\.(gif|jpg|jpeg)/gi;

        // Checkem

        function checkem() {
            if (infinitedubs == 0) {
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

                for (var i = 0; i < 3; i++)
                    text += possible.charAt(Math.floor(Math.random() * possible.length));

                text += dubscombo[Math.floor(Math.random() * dubscombo.length)];
                return text;
            } else {
                var sexscombo = ["111111", "222222", "333333", "444444", "555555", "666666", "777777", "888888", "999999"];
                text = sexscombo[Math.floor(Math.random() * sexscombo.length)];
                return text;
            }
        }

        String.prototype.insert = function(index, string) {
            if (index > 0)
                return this.substring(0, index) + string + this.substring(index, this.length);
            else
                return string + this;
        };

        var checkemregex = /([A-Za-z]{1,3}(ec(h|k)|ek|oll)|(bowl|rawl|get))+ *(ing|(\w)*em|in|this|dese|de+ze*)+(?! *((\w)+)|\.)/ig;

        // Google News

        var feedlimit = 10;

        function runfunction(result) {
            var newsresult = result.feed.entries[Math.floor(Math.random() * result.feed.entries.length)];
            var matches = boxregex.exec(newsresult.link);
            send(newsresult.title + "\n" + matches[1]);
        }

        var newsURL = "http://news.google.com/?output=rss";
        var boxregex = /&url=(https*:\/\/(.)+)/gi;

        function prepareImage() {
                if (!album) {
                    id = C.id;
                    send("https://i.imgur.com/" + id + ".jpg" + "\n" + title);
                } else {
                    id = C.cover;
                    albumlink = C.link;
                    send("https://i.imgur.com/" + id + ".jpg" + "\n" + title + "\n" + "See more at " + albumlink);
                }
        }

        sendRequest("GET", "https://api.imgur.com/3/credits", function(a) {
            remaining = a.data.ClientRemaining;
        });
        
console.log('Thank you for using Boxxy v2.5.15 by KrYnoMoRe. Licensed under GNU Public License V3.0\nVisit https://github.com/krynomore/ImgurBotProject/tree/master');
