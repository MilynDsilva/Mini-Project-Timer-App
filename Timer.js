let min= document.querySelector("#min");
let sec= document.querySelector("#sec");

let btn= document.querySelector("#btn");

let btn12= document.querySelector("#btn1");
let btn2=document.querySelector("#btn2");

let mytimer;
let mycounter =0;
let myseconds =0;
let mymins = 0;

btn.addEventListener("click", function(){
    mytimer=setInterval(function() {
        //thetimer++;
        mycounter++;
        myseconds=mycounter;
        sec.innerHTML= myseconds;
        btn. disabled = true;

        if (myseconds >59) {
            sec.innerHTML= "00";
            mycounter=0;
            mymins++;
            if (mymins >59) {
                min.innerHTML= "00";
                sec.innerHTML= "00";
                clearInterval(mytimer);
            }
            else if (mymins >9){
                min.innerHTML=mymins;
            }else{
                min.innerHTML= "0"+mymins;

            }
           

        }else if(myseconds > 9) {
            sec.innerHTML=myseconds;

        }else {
            sec.innerHTML="0"+myseconds;
        }


    },1000);
    

})

btn12.addEventListener("click", function(){
    clearInterval(mytimer);
    btn. disabled = false;

})

btn2.addEventListener("click",function(){
    min.innerHTML= "00";
    sec.innerHTML= "00";
    clearInterval(mytimer);
    mycounter =0;
    myseconds =0;
    mymins = 0;

})