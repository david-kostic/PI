function isti_znakovi(niz){
    
   var s = niz.length;
   var temp, maxbrojac;
   var last = niz.charAt(0);
   var brojac=1;

   for(var i=1; i<=s; i++){
        temp=niz.charAt(i);
        if(temp==last){
            brojac++;
        }
        else{
            brojac=1;
        }
        last=temp;

        if(brojac!=1){
            maxbrojac=brojac;
        }
   }
   return maxbrojac;
}
console.log(isti_znakovi("baaacd"))
console.log(isti_znakovi("ba2d11"))