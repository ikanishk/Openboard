
//Logic for tool change
let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");
let rect = document.querySelector("#rect");
let line = document.querySelector("#line");
let options = document.querySelectorAll(".size-box");
// identify -> click  -> again click
pencil.addEventListener("click", function (e) {
    if (cTool == "pencil") {
        // second click
        // options show 
        options[0].style.display = "flex";
    }
    else {
        for (let i = 0; i < options.length; i++) {

            options[i].style.display = "none";
        }
        // eraser.style.border = "1px solid red";
        cTool = "pencil";
    }
})
eraser.addEventListener("click", function (e) {
    if (cTool == "eraser") {
        // second click
        // options show 
        options[1].style.display = "flex";
    } else {
        // eraser.style.border = "1px solid red";
        // koi aur clicked aur usko options visible to wo remove ho jaaye 
        cTool = "eraser";
        tool.strokeStyle="white"; 
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";

        }
    }
})
rect.addEventListener("click", function (e) {
    if (cTool == "rect") {
        // second click
        // options show 
        options[2].style.display = "flex";
    } else {
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        // eraser.style.border = "1px solid red";
        cTool = "rect";
    }
})
line.addEventListener("click", function (e) {
    if (cTool == "line") {
        // second click
        // options show 
        options[3].style.display = "flex";
    } else {
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";

        }
        // eraser.style.border = "1px solid red";
        cTool = "line";
    }
})


//Logic for color change
let redColor = document.querySelector(".red");
let greenColor = document.querySelector(".green");
let blueColor = document.querySelector(".blue");
redColor.addEventListener("click", function () {
    tool.strokeStyle = "lightpink";
})
greenColor.addEventListener("click", function () {
    tool.strokeStyle = "lightgreen";
})
blueColor.addEventListener("click", function () {
    tool.strokeStyle = "lightblue";
})



//Logic for Size Change
    let pencilSize=5;
    let eraserSize=5;
    let rectSize=5;
    let lineSize=5;

    let sizeboxArr=document.querySelectorAll(".size-box");
    sizeboxArr[0].addEventListener("click",function(e){
    let elems=["size1","size2","size3","size4"]
    let allTheClasses= e.target.classList;// we have 2 classes for every div in "size-box" like size2 size. So, we store both of these classnames in an array through classList function.
    let firstClass=allTheClasses[0]; //from the array of all the classes we made above, our objective is to get the First class name.
    let tests=elems.includes(firstClass);
    if(tests){
       if(firstClass=="size1"){
        pencilSize=5;
       }
       else if(firstClass=="size2"){
        pencilSize=10;
       }

       else if(firstClass=="size3"){
        pencilSize=15;
        }

        else if(firstClass=="size4"){
        pencilSize=20;
        }
        tool.lineWidth=pencilSize;
    }


    // console.log(e.target);//target => where the event actually occurs.
    // console.log(e.currentTarget);//currentTarget => where we have installed an eventListener.
    
    })

    sizeboxArr[1].addEventListener("click",function(e){
        let elems=["size1","size2","size3","size4"]
        let allTheClasses= e.target.classList;// we have 2 classes for every div in "size-box" like size2 size. So, we store both of these classnames in an array through classList function.
        let firstClass=allTheClasses[0]; //from the array of all the classes we made above, our objective is to get the First class name.
        let tests=elems.includes(firstClass);
        if(tests){
            if(firstClass=="size1"){
             eraserSize=5;
            }
            else if(firstClass=="size2"){
                eraserSize=10;
            }
     
            else if(firstClass=="size3"){
                eraserSize=15;
             }
     
             else if(firstClass=="size4"){
                eraserSize=20;
             }
             tool.lineWidth=eraserSize;
         }
    
    
        // console.log(e.target);//target => where the event actually occurs.
        // console.log(e.currentTarget);//currentTarget => where we have installed an eventListener.
        
    })

    sizeboxArr[2].addEventListener("click",function(e){
            let elems=["size1","size2","size3","size4"]
            let allTheClasses= e.target.classList;// we have 2 classes for every div in "size-box" like size2 size. So, we store both of these classnames in an array through classList function.
            let firstClass=allTheClasses[0]; //from the array of all the classes we made above, our objective is to get the First class name.
            let tests=elems.includes(firstClass);
            if(tests){
                if(firstClass=="size1"){
                 rectSize=5;
                }
                else if(firstClass=="size2"){
                    rectSize=10;
                }
         
                else if(firstClass=="size3"){
                    rectSize=15;
                 }
         
                 else if(firstClass=="size4"){
                    rectSize=20;
                 }

                 tool.lineWidth=rectSize;
             }
        
        
            // console.log(e.target);//target => where the event actually occurs.
            // console.log(e.currentTarget);//currentTarget => where we have installed an eventListener.
            
    })

    sizeboxArr[3].addEventListener("click",function(e){
        let elems=["size1","size2","size3","size4"]
        let allTheClasses= e.target.classList;// we have 2 classes for every div in "size-box" like size2 size. So, we store both of these classnames in an array through classList function.
        let firstClass=allTheClasses[0]; //from the array of all the classes we made above, our objective is to get the First class name.
        let tests=elems.includes(firstClass);
        if(tests){
            if(firstClass=="size1"){
             lineSize=5;
            }
            else if(firstClass=="size2"){
                lineSize=10;
            }
     
            else if(firstClass=="size3"){
                lineSize=15;
             }
     
             else if(firstClass=="size4"){
                lineSize=20;
             }
             tool.lineWidth=lineSize;
         }
    
    
        // console.log(e.target);//target => where the event actually occurs.
        // console.log(e.currentTarget);//currentTarget => where we have installed an eventListener.
        
        })
        // 01:33:00