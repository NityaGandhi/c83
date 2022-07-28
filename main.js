var width = screen.width;
var height = screen.height;
new_width = screen.width - 70;
new_height = screen.height - 300;
var last_position_of_x, last_position_of_y;
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
 
if(width < 992)
{
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchstart)
function my_touchstart(e){
    console.log("my_touchstart");
}



canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    current_position_of_touch_x = e.touches[0].clientX- canvas.offsetLeft;
     current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;


        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.lineWidth = "10px";


        console.log("Last position of x and y coordinates =");
        console.log("current position of mouse x is =" + current_position_of_touch_x + ", current position of mouse y is=" + current_position_of_touch_y) ;
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates =");
        console.log("x =" + current_position_of_touch_x + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();


    

    last_position_of_x = current_position_of_touch_x;
    last_position_of_y = current_position_of_touch_y;

}