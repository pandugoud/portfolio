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
    let input = document.getElementById("input").value;

    if (input.trim() === "") {
        alert("Please enter something");
        return;
    }

    let div = document.createElement("div");
    div.className = "rec-card";

    let firstLetter = input.charAt(0).toUpperCase();

    div.innerHTML = `
        <div class="avatar">${firstLetter}</div>
        <p>${input}</p>
    `;

    document.getElementById("list").appendChild(div);

    document.getElementById("popup").style.display = "flex";

    document.getElementById("input").value = "";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
