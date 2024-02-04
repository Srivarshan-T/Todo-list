const inputbox =document.getElementById("inputbox");
let list=document.getElementById("list-container");
function add_list(){
    if (inputbox.value==' '){
        alert("please enter any task");
    }
    else{
         
        let li=document.createElement("li");
        li.innerHTML= inputbox.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        
        

        
    }
    inputbox.value=' ';
    savedata();
}
function hello(){
    if(list.innerHTML==' ')
    {
        alert("list is Empty!")
    }
    else{
        list.innerHTML=' ';
        savedata();
    }
   
}


list.addEventListener("click", function(e){
    if (e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();

    }
    
},false);
inputbox.addEventListener("keypress",function(e){
    if(e.keyCode==13){
        add_list();
    }
},false);
function savedata(){
localStorage.setItem("data",list.innerHTML)
}
function showtask(){
list.innerHTML=localStorage.getItem("data");
}

showtask();
