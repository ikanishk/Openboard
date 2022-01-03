        let sticky=document.querySelector("#sticky");
        
        sticky.addEventListener("click",function(e){
            let sticky=document.createElement("div");
            sticky.setAttribute("class","sticky"); //we create a class called sticky every time the listener s triggered which has an innerHTML of the navbar and textarea which ends up creating a sticky note every time we click the button that has the listener.
            sticky.innerHTML=`    <div class="navbar">
            <div class="close"></div>
            <div class="minimize"></div>
            </div>
            <textarea ></textarea></textarea>`;
            body.appendChild(sticky);


            // Logic for minimizing textArea
            let minimize=sticky.querySelector(".minimize");
            let textArea=sticky.querySelector("textArea");
            let close=sticky.querySelector(".close");
            let isclosed=false;

            
            minimize.addEventListener("click",function(e){
                close.addEventListener("click",function(e){
                sticky.remove();
            })
            if(isclosed==false){
                textArea.style.display="none";
            }
            else{
                textArea.style.display="block";
            }
           isclosed=!isclosed;
        })
        })