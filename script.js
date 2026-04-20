function toggleDark(){
  document.body.classList.toggle("dark");
}

function addRec(){

  let name = document.getElementById("userName").value;
  let role = document.getElementById("userRole").value;
  let company = document.getElementById("userCompany").value;
  let msg = document.getElementById("userMsg").value;

  if(!name || !msg){
    alert("Please fill required fields");
    return;
  }

  let div = document.createElement("div");
  div.className = "project-card";

  div.innerHTML = `
    <h3>${name}</h3>
    <small>${role} @ ${company}</small>
    <p>${msg}</p>
  `;

  document.getElementById("list").appendChild(div);

  document.getElementById("popup").style.display="flex";

  document.getElementById("userName").value="";
  document.getElementById("userRole").value="";
  document.getElementById("userCompany").value="";
  document.getElementById("userMsg").value="";
}

function closePopup(){
  document.getElementById("popup").style.display="none";
}
