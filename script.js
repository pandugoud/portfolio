function toggleDark(){
document.body.classList.toggle("dark");
}

function addRec(){

let name=document.getElementById("name").value;
let role=document.getElementById("role").value;
let company=document.getElementById("company").value;
let msg=document.getElementById("msg").value;

if(!name||!role||!company||!msg){
alert("Fill all fields");
return;
}

let div=document.createElement("div");
div.style.background="rgba(255,255,255,0.1)";
div.style.padding="10px";
div.style.margin="10px";
div.innerHTML=`
<b>${name}</b> (${role} @ ${company})<br>
${msg}
`;

document.getElementById("list").appendChild(div);

document.getElementById("popup").style.display="flex";
}

function closePopup(){
document.getElementById("popup").style.display="none";
}
