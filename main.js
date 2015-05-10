//Loads google news API
$('head').append('<script src="https://www.google.com/jsapi"></script>');

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
                m = str.toLowerCase().indexOf("~news");
                q = str.toLowerCase().indexOf("~shit");
                n = str.search(checkemregex);
                p = str.indexOf("107001000");
                if (data.type != "personal-message") {
                    if (n > -1) {
                        itype = "checkem";
                        checkthis = checkem();
                        processString();
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
                            itype = "best";
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
                        } else if (m > -1 || q > -1) {
                            itype = "news";
                            feed = new google.feeds.Feed(newsURL);
                            feed.setNumEntries(feedlimit);
                            loadit();
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
                itype = "random";
                prepareImage();
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

        dubs = false;

        function processString(string) {
            string = parseInt(string);
            dubs = false;
            var insert;
            if (string % 111111 == 0) {
                text = checkthis.insert(0, "#CC00FF");
                dubs = true;
            } else if (string % 11111 == 0) {
                text = checkthis.insert(1, "#FF0000");
                dubs = true;
            } else if (string % 1111 == 0) {
                text = checkthis.insert(2, "#00FF15");
                dubs = true;
            } else if (string % 111 == 0) {
                text = checkthis.insert(3, "#00E1FF");
                dubs = true;
            } else if (string % 11) {
                text = checkthis.insert(4, "#FFE100");
                dubs = true;
            } else {
                text = checkthis;
            }
            prepareImage();
        }

        // Google News

        function guugle() {
            google.load('feeds', 1, {
                callback: function() {} //intentionally left blank
            });
            console.log("Google Feeds API and SpooksBot have succesfully loaded :)");
        }

        setTimeout(function() {
            guugle();
        }, 1500);

        var feedlimit = 10;

        function runfunction(result) {
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

        function loadit() {
            feed.load(runfunction);
        }

        var newsURL = "http://news.google.com/?output=rss";
        var boxregex = /&url=(https*:\/\/(.)+)/gi;
        var finalboxregex = /(https*:\/\/(.)+)/gi;

        function stringify(strArray) {
            var tempstring = "";
            for (var j = 0; j < strArray.length; j++) {
                tempstring = tempstring + strArray[j];
            }
            return tempstring;
        }

        function prepareImage() {
            if (itype == "checkem") {
                send(text);
            } else if (itype == "best") {
                if (!album) {
                    id = C.id;
                    send("https://i.imgur.com/" + id + ".jpg" + "\n" + title);
                } else {
                    id = C.cover;
                    albumlink = C.link;
                    send("https://i.imgur.com/" + id + ".jpg" + "\n" + title + "\n" + "See more at " + albumlink);
                }
            } else if (itype == "news") {
                send(title + "\n" + link);
            } else if (itype == "random") {
                noSpam.score < 5 && send(iURL);
            }
        }

        sendRequest("GET", "https://api.imgur.com/3/credits", function(a) {
            remaining = a.data.ClientRemaining;
        });
