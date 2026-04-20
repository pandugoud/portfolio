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
div.className="project-card";

div.innerHTML=`
<h3>${name}</h3>
<p>${role} @ ${company}</p>
<p>"${msg}"</p>
`;

document.getElementById("list").appendChild(div);

document.getElementById("popup").style.display="flex";
}

function closePopup(){
document.getElementById("popup").style.display="none";
}
