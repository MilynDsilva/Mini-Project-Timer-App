let timerdisplay= document.querySelector("#timerdisplay");

let btn= document.querySelector("#btn");

let btn12= document.querySelector("#btn1");

let thetimer =0;

let mytimer;


btn.addEventListener("click", function(){
    mytimer=setInterval(function() {
        //thetimer++;
        thetimer=thetimer+1;
        timerdisplay.innerHTML= thetimer;
        btn. disabled = true;
    },1000);
    

})

btn12.addEventListener("click", function(){
    clearInterval(mytimer);
    btn. disabled = false;

})
// let mytimer = setInterval(function() {
//     thetimer++;
//     //thetimer=thetimer+1;
//     timerdisplay.innerHTML= thetimer;
// },1000);


// setInterval(function() {
//     alert("Hold on!!!")
// },10000);
