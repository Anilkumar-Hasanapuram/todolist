const input=document.getElementById("inputbox");
const list=document.getElementById("listcontainer");
const checkSound = document.getElementById("checkSound");

function addTask()
{
    if(input.value==='')
    {
        alert("you must write something!");
    }
    else
    {
        let li=document.createElement("li");
        li.innerHTML=input.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value="";
    saveData();
}
list.addEventListener("click",function(e)
{
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
        checkSound.play();
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
    }
},false);

function saveData()
{
   localStorage.setItem("data",list.innerHTML);

}
function showtask()
{
    list.innerHTML=localStorage.getItem("data");

}
showtask();