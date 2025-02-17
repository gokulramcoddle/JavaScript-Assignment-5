// Q1)Create a button and div using JS, when clicked on the button your basic details should be shown in the div. The static html file should only contain the basic HTML structure, no div/buttons .

var div=document.createElement("div");
div.id="msg";
div.style.height="100px";
div.style.width="500px";
div.style.backgroundColor=" rgb(245, 227, 227)";
div.style.display="none";

var button=document.createElement("button");
button.id="btn";
button.innerText="click";

button.addEventListener("click",function(){
if(div.style.display=="none"){
    div.innerText="Hi, I'm Gokul Ram , I have done bachelor of technology.";
    div.style.display="block";
}
else{
    div.style.display="none";
}
});

document.getElementById("q1").appendChild(div);
document.getElementById("q1").appendChild(button);

// Q2)Consider an array with name of 5 fruits, map this array and create five checkboxes with their corresponding names. In a div show the fruit names which are checked.

var fruits=["Apple","Orange","Graphes","Bananna","Pineapple"];
fruits.forEach(fruit=>{
    var label=document.createElement("label");
    var checkbox=document.createElement("input");
    checkbox.type="checkbox";
    checkbox.value=fruit;

    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(" "+ fruit));
    label.style.display="block";
    Q2.appendChild(label);  

    checkbox.addEventListener("change",selectedItem);
});

function selectedItem(){
   var items=Array.from(document.querySelectorAll("input[type='checkbox']:checked")).map(si=>si.value);
   document.getElementById("selected").innerText= 
   items.length>0 ? "Selected items: "+ items.join(", ") : "Selected items: ";
}

// Q3)Create an image slider without referring online codes, completely by yourself

var ison=false;
document.getElementById("togglebtn").addEventListener("click",()=>{
    ison=!ison
    document.getElementById("togglebtn").innerText=ison==true?"ON":"OFF";
    if(ison){
        document.getElementById("togglebtn").style.backgroundColor="green";  
    }
    else{
        document.getElementById("togglebtn").style.backgroundColor=" rgb(181, 181, 181)";
    }
});


// Q4)Create an image slider without referring online codes, completely by yourself.

var index=0;
var images=document.querySelectorAll(".img-box img")
var totalimg=images.length;

function changeimage(idx){
    images[index].classList.remove("active");
    index=(idx+totalimg)%totalimg;
    images[index].classList.add("active");
}
document.getElementById("next").addEventListener("click", function(){changeimage(index+1)});
document.getElementById("prev").addEventListener("click",function(){changeimage(index-1)});
