

var arr= new Array(10);
var counter=0;
var stackmsg= "";

function pushHandler(v){
    var bottom=document.getElementById("bottomTextarea");
    push(bottom.value);
    print();
}


function shiftHandler(){
    shift();
    print();
    
}

function push(v){
    console.log("Value to be pushed "+ v);    
    if (counter==10){
        stackmsg = "Stack overflow";
        
        console.log("Stack overflow");
        
    }else{
        ++counter;
        arr.push(v);
    }
    
    clearInputArea();

 }

function shift(){
    if(counter==0){
        stackMsg = "Queue Empty";
        console.log("Queue Empty");
    }else{
        --counter;
        var valid  = false;
        var value;
        while(!valid){
            value = arr.shift();
            if(value!=undefined){
                valid = true;
            }
        }
        console.log("Value shifted from Queue "+ value);
    }
  }

//We perform the Pop function on the array.
function pop(){
    console.log("Entering pop");
    if(counter==10){
        stackmsg = "Stack is empty";
        console.log("Stack underflow");
    }else{
        var value = arr.pop();
        --counter;
        console.log("Value to be popped "+ value);
    }
 
 }


function print(){
   var top=document.getElementById("topTextarea");
   //Managing Edge Cases of Queue/Stack empty or Full.    
   if(counter == 0 || counter ==10){
        console.log("Value of StackMsg "+ stackmsg);
        top.value = top.value + stackmsg;
   }else{
        var strmsg = "";
        for(var i =0; i<arr.length; i++){
            if(arr[i]!= undefined){
                strmsg +=  arr[i] + "\n";
            }
        }
        console.log("Value of StackMsg "+ strmsg);
        top.value =  strmsg;
        strmsg = "";
        stackmsg = "";
   }
}
  
function clearInputArea(){
    var bottom=document.getElementById("bottomTextarea");
    bottom.value = "";
}

