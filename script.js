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

    if (name === "" || role === "" || company === "" || message === "") {
        alert("Please fill all fields");
        return;
    }

    let div = document.createElement("div");
    div.className = "rec-card";

    let firstLetter = name.charAt(0).toUpperCase();

    div.innerHTML = `
        <div class="rec-header">
            <div class="avatar">${firstLetter}</div>
            <div class="user-info">
                <h4>${name}</h4>
                <span>${role} @ ${company}</span>
            </div>
        </div>
        <p class="rec-text">"${message}"</p>
    `;

    document.getElementById("list").appendChild(div);

    // Show popup
    let popup = document.getElementById("popup");
    popup.classList.add("show");

    // Clear fields
    document.getElementById("name").value = "";
    document.getElementById("role").value = "";
    document.getElementById("company").value = "";
    document.getElementById("input").value = "";
}

// Close popup
function closePopup() {
    document.getElementById("popup").classList.remove("show");
}
