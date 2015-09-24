//Implements a stopwatch mini game which allows the user to start/stop the stopwatch and gain a point whenever it is stopped ona full second


// define global variables
var cTime = 0;
var x = 0; //successful stop
var y = 0; //total stop
var running = true;

//Selects the canvas
var box = document.getElementById("myCanvas");
var ctx = box.getContext("2d");


// define helper function format that converts time
// in tenths of seconds into formatted Stringing A:BC.D
function format(t){  
    var d = t % 10;
    var c = Math.round(((t - d) % 100) /10);
    var b = Math.round((((t / 100) % 6) * 10) * 10)/10;
    var a = Math.floor(t/600);
    return(String(a) + ':' + String(b));
}
    
// define event handlers for buttons; "Start", "Stop", "Reset"
function start_handler(){   
    if(running != true){
        running = true;
        timer = setInterval(function(){timer_handler()}, 100);
    }
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
}

// define event handler for timer with 0.1 sec interval
function timer_handler(){
    cTime += 1
}

// define draw handler
function draw_handler(canvas){
    canvas.clearRect(0, 0, box.width, box.height);
    canvas.fillStyle = "black";
    canvas.font = '20px Comic Sans MS';
    canvas.fillText(format(cTime), 150,100);
    canvas.fillText('Success: '+ String(x),10,40);
    canvas.fillText('Total: ' + String(y),10,20);
}
        
// create time/drawing handlers
var timer = setInterval(function(){timer_handler()}, 100);
var draw = setInterval(function(){draw_handler(ctx)},10);

