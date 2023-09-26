const input = document.getElementById('input-id');
const li_contain = document.getElementById('list');
function Add()
{
    if (input.value === '')
    {
        alert("you write something");
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = input.value;
        li_contain.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        saveData();

    }
    input.value= '';
}
li_contain.addEventListener("click",function(e){
    if (e.target.tagName==="LI")
    {
        e.target.classList.toggle("chek");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();

    }
},false)

function saveData()
{
    localStorage.setItem("data",li_contain.innerHTML);  
}
function showTask()
{
    li_contain.innerHTML = localStorage.getItem("data");
}
showTask();