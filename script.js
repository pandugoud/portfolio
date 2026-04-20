function toggleDark(){
  document.body.classList.toggle("dark");
}

function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

function addRec(){

  let name = document.getElementById("name").value;
  let role = document.getElementById("role").value;
  let company = document.getElementById("company").value;
  let msg = document.getElementById("msg").value;

  if(!name || !msg){
    alert("Fill all fields");
    return;
  }

  let div = document.createElement("div");
  div.className="tcard";

  div.innerHTML = `
    <h4>${name} (${role} - ${company})</h4>
    <p>${msg}</p>
  `;

  document.getElementById("list").appendChild(div);

  document.getElementById("popup").style.display="flex";

  document.getElementById("name").value="";
  document.getElementById("role").value="";
  document.getElementById("company").value="";
  document.getElementById("msg").value="";
}

function closePopup(){
  document.getElementById("popup").style.display="none";
}
