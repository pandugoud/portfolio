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
function addRec(){
  let val=document.getElementById("input").value;

  if(val==="") return;

  let div=document.createElement("div");
  div.className="rec";
  div.innerText=val;

  document.getElementById("list").appendChild(div);

  document.getElementById("popup").style.display="block";
}

function closePopup(){
  document.getElementById("popup").style.display="none";
}
