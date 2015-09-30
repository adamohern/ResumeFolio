function yearsSince(date){
    var prevTime = new Date(date);
    var thisTime = new Date();
    var diff = thisTime.getTime() - prevTime.getTime();
    return Math.round(diff / (1000 * 60 * 60 * 24 * 365) * 10) / 10;
}

function shorthand(text){
    DATE = new Date();
    if (typeof text == "string") { 
        text = text.replace(/\{([^\}]*)\}\((yearsSince)\)/g,yearsSince("$1"));
        text = text.replace(/\*\((date)\)/g,DATE.toDateString());
        text = text.replace(/\{([^\}]*)\}\(([^\)]*)\)/g,'<span class="$2">$1</span>');
        return text;
    }
    else return null;
}