


var stk= new Array(10);
//console.log(stk.length);
var st=10;
//console.log(st);
var stackmsg= " ";
function pushHandler(v){
    
    //alert("I am in pushHanler");
    var top=document.getElementById("topTextarea");    
    
    document.getElementById("bottomTextarea").focus();
    var bottom=document.getElementById("bottomTextarea");
   // topTextarea.value = topTextarea.value + "\n" + bottom.value;

    
  

    console.log(bottomTextarea.value);

    push(bottom.value);
    var stackResult = print();

    topTextarea.value = stackResult;
     
  
    bottomTextarea.value = " ";
 
}


function popHandler(){
    var top=document.getElementById("topTextarea");
//    ta1.value=ta1.value +"\n"+ta.value;
    
    pop();
    var stackResult =print();
    top.value = stackResult;
    
}
function push(v){
    
    if (st==0){

      stackmsg = "Stack overflow";
        console.log("Stack overflow");
        
    }else{
 st=st-1;
 stk[st]=v;
    }
    
}

function print(){
    console.log("Entering print");
    var str = " ";
    for(var i=st;i<10;i++){
      console.log(stk[i]);
        str = str + "\n"+ stk[i];
    }
    str =  stackmsg + str;
    console.log("Leaving print");
    console.log("str =" + str);
    return str;
}

function pop(){
    console.log("Entering pop");
    if(st==10){
        stackmsg = "Stack Underflow";
        console.log("Stack underflow");
    }else{
         var temp= stk[st];
    //stk[st]= undefined;
    st=st+1;
    }
   return temp;
    
}
/*
push(90);
push(80);
push(70);
push(60);
push(50);
push(40);
push(30);
push(20);
push(10);
push(40);
push(40);
push(40);


var z=pop();
print();
console.log("z =" +z);*/