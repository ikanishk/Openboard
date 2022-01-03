 //----------------------------------NOTES----------------------------------//
    // What have we done below in this note?
    // We have highlighted a rectanglular region of the canvas with dimensions (10,30,200,200) with "green"


    (A)


    //How to draw a line in canvas?
    //Below is the sequence of functions that can be used for drawing a line in canvas.
    //Beginpath(sets Initial Pos) => moveto(sets Final Pos without drawing) => lineto(draws a line till the passed co=ordinates) => stroke
    // we display(highlight) the rectangle area in which we have allowed drawing through canvas.
    tool.fillStyle="green";
    tool.fillRect(10,30,200,200);

    //to mark the boundaries
    tool.strokeStyle="red";
    tool.strokeRect(50,50,200,200);

    // ************************//

     B)
    //  the below one is to use an addEventListener which takes a function as an input which is the function  
    //  the mousedown and mouseup are arguments passed in eventlisteners, they are triggered if the the mouse is pressed or lifted respectively in the part where that particular eventlistener is initiated.
        body.addEventListener("mousedown",function(){
        console.log("Mouse being touched");
        });


    //*******************************//

    C)
    
    //mousedown => when mouse is pressed.
    //mouseup   => when mouse is released.


    let iX, iY, fX, fY;
    body.addEventListener("mousedown",function(e){
         console.log("Mouse being touched");
         console.log(e);
        iX=e.clientX; //We needed top pass an object e, so that we can call the ClientX and ClientY functions through it.
        iY=e.clientY;
         console.log(xPos,yPos); //This line displays the X-Y Co-ordinates of the position where the mouse is pressed.
    });

    body.addEventListener("mouseup",function(e){
         alert("Mouse not being touched");
         console.log(e);
        fX=e.clientX; //We needed top pass an object e, so that we can call the ClientX and ClientY functions through it.
        fY=e.clientY;
         console.log(xPos,yPos); //This line displays the X-Y Co-ordinates of the position where the mouse is released.

        let height=fY-iY;
        let width=fX-iX;
        tool.strokeRect=(iX,iY,width,height);
    });
    //------------------------------------------------------------------------//
    // D)

    //The Style tag is used in the head tag which is further used to style different compoonents of the page.
    <style>
        /* *{
        border:1px solid red;
        } */

        div{
        border:1px solid green;
        background-color: lightcyan;

        }

        body{
        border:1px solid gray;
        }
    </style>

    // Colors.html is used to explain flex and how to switch colors for our tool.
    
    // ***********************************************************************
    //Logic to implement  a pencil.(which draws as we hover the mouse on the screen.)
    let canvasboard=document.querySelector("canvas");
    canvasboard.height=window.innerHeight;
    canvasboard.width=window.innerWidth;
    let tool=canvasboard.getContext("2d");
    let boardtop=canvasboard.getBoundingClientRect().top; //The getBoundingClientRect() function returns the co-ordinates of the entity from which we are taking the top margin.
    let boardleft=canvasboard.getBoundingClientRect().left;
    let iX, iY, fX, fY;


    body.addEventListener("mousedown",function(e){
        iX=e.clientX+boardleft; //We needed top pass an object e, so that we can call the ClientX and ClientY functions through it.
        iY=e.clientY-boardtop;
    })

    body.addEventListener("mousemove",function(e){        
        fX=e.clientX+boardleft;
        fY=e.clientX+boardtop;
        tool.beginPath();
        tool.moveTo(iX,iY);
        tool.lineTo(fX,fY);
        tool.stroke();
        iX=fX;
        iY=fY;
    })



//     // ---------------------------------------------------------------- //
//     <!-- Event Bubbling is a concept in which  we define a currentTarget and a target -->
// <!-- In event bubbling, the event starts from the div and keeps on going to it's parent divs until it encounters a eventListener. and if it does not encounter ay eventListener, it grows till the parent HTML and simply gets killed. -->
// <!-- Suppose we have a class parent and a class son inside it. So, if we add an eventlistener to a son class, it will be the currentarget but the target will be all it's parent classes. -->
