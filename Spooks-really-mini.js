// Little code cut from brunos bot

if (text.contains("!motd")) {
            getmotd()
       });
        }
            
    }
        
});

function getCount() { 
    $.ajax({
        url : "http://krynomore.tk/motd.php",
        type : 'GET',
        success : function(data) { send("Today, the motd is" + data + " Set By KrYnoMoRe."); }
    });
