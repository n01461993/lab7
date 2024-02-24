const inputBox = document.getElementById('search-box');
const taskList = document.getElementById('task-list');

function addTask(){
    if(inputBox.vale === '');

    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}

taskList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);