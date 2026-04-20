// LOADER
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};

// DARK
function toggleDark(){
  document.body.classList.toggle("dark");
}

// TYPED
var typed = new Typed("#name", {
  strings:["Prathap goud","Developer"],
  typeSpeed:80,
  loop:true
});

// AOS
AOS.init();

// FILTER
function filterProjects(type){
  let cards=document.querySelectorAll(".project-card");

  cards.forEach(card=>{
    if(type==="all"){
      card.style.display="block";
    } else {
      card.classList.contains(type)
      ? card.style.display="block"
      : card.style.display="none";
    }
  });
}

// RECOMMEND
function addRec() {
    let name = document.getElementById("name").value.trim();
    let role = document.getElementById("role").value.trim();
    let company = document.getElementById("company").value.trim();
    let message = document.getElementById("input").value.trim();

    if (!name || !role || !company || !message) {
        alert("Please fill all fields");
        return;
    }

    let div = document.createElement("div");
    div.className = "rec-card";

    div.innerHTML = `
        <div class="rec-header">
            <div class="avatar">${name.charAt(0).toUpperCase()}</div>
            <div>
                <h4>${name}</h4>
                <small>${role} @ ${company}</small>
            </div>
        </div>
        <p>"${message}"</p>
    `;

    document.getElementById("list").appendChild(div);

    // popup show
    document.getElementById("popup").classList.add("show");

    // clear fields
    document.getElementById("name").value = "";
    document.getElementById("role").value = "";
    document.getElementById("company").value = "";
    document.getElementById("input").value = "";
}

function closePopup() {
    document.getElementById("popup").classList.remove("show");
}
