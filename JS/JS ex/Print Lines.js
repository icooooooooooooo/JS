function inputArr(args){
    for(let i=0; i<args.length; i++){
       if(args[i]=="Stop"){
           break;
       }
       console.log(args[i]);
   }
}
inputArr(["Line1","Line2","Line3","Stop","Line4"])
