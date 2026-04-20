function toggleDark(){document.body.classList.toggle("dark")}

function addRec(){
let name=document.getElementById("name").value;
let role=document.getElementById("role").value;
let company=document.getElementById("company").value;
let msg=document.getElementById("msg").value;

if(!name||!role||!company||!msg){alert("Fill all fields");return;}

let div=document.createElement("div");
div.className="rec-card";
div.innerHTML=`<div class="avatar">${name[0]}</div><div><b>${name}</b> (${role})<br>${company}<p>${msg}</p></div>`;
document.getElementById("list").appendChild(div);
document.getElementById("popup").style.display="flex";

document.getElementById("name").value="";
document.getElementById("role").value="";
document.getElementById("company").value="";
document.getElementById("msg").value="";
}

function closePopup(){document.getElementById("popup").style.display="none"}
