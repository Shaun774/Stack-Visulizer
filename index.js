var items = [];

var popSound = new Audio("./audio/pop.mp3");
var pushsound = new Audio("./audio/push.mp3");

var add = document.querySelector(".add-button");
    add.addEventListener("click",function (){
    const val = document.querySelector(".input-number").value;
    if (val >=0 && val != null){
    const div = document.createElement('div');
    div.className = "stack-element";
    div.id = val;
    pushsound.play();
    div.innerText = val;
    items.push(val);
    document.querySelector(".bucket").appendChild(div);
    document.querySelector("input").value = "";
    }
});

var reset = document.querySelector(".reset");
reset.addEventListener("click",function(){
    location.reload();
});

var pop = document.querySelector(".pop-button");
pop.addEventListener("click",function (){
    if (items.length == 0){
        alert("Stack is Empty");
    }
    else{
    var popValue = items.pop(); 
    document.querySelector("#poped").innerText = popValue;
    var toPop = document.getElementById(popValue);
    popSound.play();
    toPop.remove();
    }
})



