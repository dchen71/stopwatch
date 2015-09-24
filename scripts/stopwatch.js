
// define global variables
var cTime = 0;
var x = 0; //successful stop
var y = 0; //total stop
var running = true;

//Selects the canvas
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


// define helper function format that converts time
// in tenths of seconds into formatted Stringing A:BC.D
function format(t){  
    var d = t % 10;
    var c = ((t - d) % 100) /10;
    var b = (t / 100) % 6;
    var a = Math.floor(t/600);
    return(String(a) + ':' + String(b) + String(c) + '.' + String(d));
}
    
// define event handlers for buttons; "Start", "Stop", "Reset"
function start_handler(){   
    running = true;
    timer = setInterval(function(){timer_handler()}, 100);
}

function stop_handler(){
    if(running == true){
        if(cTime %10 == 0){
            x+= 1;
        }
        y += 1;
        running = false;
    }
    clearInterval(timer);
}

function reset_handler(){
    cTime = 0;
    x = 0;
    y = 0;
    clearInterval(timer);
}

// define event handler for timer with 0.1 sec interval
function timer_handler(){
    cTime += 1
}

// define draw handler
function draw_handler(canvas){
    canvas.fillStyle = "white";
    canvas.font = '20px Comic Sans MS';
    canvas.fill_text(format(cTime), 180,100);
    canvas.fill_text('Success: '+ String(x),280,40);
    canvas.fill_text('Total: ' + String(y),280,20);
}
        
// create frame
var timer = setInterval(function(){timer_handler()}, 100);

// register event handlers
draw_handler(ctx);

// start frame
frame.start()
timer.start()
