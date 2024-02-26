const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"

    for (i=0; i<6 ; i++){
        color = color + hex[Math.floor(Math.random()*16)]

    }
   return color  ;
}


let intervalid;

const startColor = function(){
   
    if(!intervalid){
       intervalid = setInterval(bgColor,500) ;

    }
    
    function bgColor (){
    document.body.style.backgroundColor= randomColor();

   }


}

const stopColor = function(){
    clearInterval(intervalid)
    intervalid=null   // for flushing data 

}


document.querySelector('#start').addEventListener('click', startColor)

document.querySelector('#stop').addEventListener('click', stopColor)