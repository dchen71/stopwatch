
// define global variables
var cTime = 0
var x = 0 //successful stop
var y = 0 //total stop
var running = true

//Selects the canvas
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


// define helper function format that converts time
// in tenths of seconds into formatted string A:BC.D
function format(t){  
    var d = t % 10
    var c = ((t - d) % 100) /10
    var b = (t / 100) % 6
    var a = int(t/600)
    return(str(a) + ':' + str(b) + str(c) + '.' + str(d))
}
    
// define event handlers for buttons; "Start", "Stop", "Reset"
function start_handler(){   
    running = true
    timer = setInterval(function(){timer_handler()}, 100)
}

function stop_handler(){
    if(running == true){

        if(cTime %10 == 0){
            x+= 1
        }
        y += 1
        running = false
    }
    clearInterval(timer);
}

function reset_handler(){
    cTime = 0
    x = 0
    y = 0
    clearInterval(timer);
}

// define event handler for timer with 0.1 sec interval
function timer_handler(){
    cTime += 1
}

// define draw handler
function draw_handler(canvas){
    canvas.draw_text(format(cTime),(180,100),20,"white")
    canvas.draw_text('Success: '+ str(x),(280,40),20,"white")
    canvas.draw_text('Total: ' + str(y),(280,20),20,"white")
}
        
// create frame
frame = simplegui.create_frame("Stopwatch: The Game", 400, 200)
var timer = setInterval(function(){timer_handler()}, 100)

// register event handlers
frame.set_draw_handler(draw_handler)
frame.add_button("Start", start_handler)
frame.add_button("Stop", stop_handler)
frame.add_button("Reset", reset_handler)


// start frame
frame.start()
timer.start()
