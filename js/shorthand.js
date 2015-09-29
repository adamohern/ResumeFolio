function timeSince(time,format){
    
}

function shorthand(text){
    if (typeof text == "string") { 
        return text.replace(/\{([^\}\}]*)\}\(([^\(\)]*)\)/g,'<span class="$2">$1</span>');
    }
    else return null;
}