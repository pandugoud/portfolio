function toggleDark(){
document.body.classList.toggle("dark");
}

function addRec(){

let name = document.getElementById("name").value;
let role = document.getElementById("role").value;
let company = document.getElementById("company").value;
let msg = document.getElementById("msg").value;

if(!name || !role || !company || !msg){
alert("Fill all fields");
return;
}

let card = document.createElement("div");
card.className = "rec-card";

card.innerHTML = `
<div class="avatar">${name[0]}</div>
<div>
<h4>${name}</h4>
<small>${role} @ ${company}</small>
<p>${msg}</p>
</div>
`;

document.getElementById("list").appendChild(card);

document.getElementById("popup").style.display="flex";

document.getElementById("name").value="";
document.getElementById("role").value="";
document.getElementById("company").value="";
document.getElementById("msg").value="";
}

function closePopup(){
document.getElementById("popup").style.display="none";
}
