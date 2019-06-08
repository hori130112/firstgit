let char=""
 for( let i=1;i<10;i++){
     for( let j=1;j<10;j++){
if(i*j<10){
    char=char+" "+" "+i*j
}
   else char=char+" "+i*j
}
     char=char+"\n"
}

 console.log(char)
 document.getElementById("kukuhyou").innerText=char;