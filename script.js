function toggleDark() {
  document.body.classList.toggle("dark");
}

function addRec() {
  const name = document.getElementById("name").value.trim();
  const role = document.getElementById("role").value.trim();
  const company = document.getElementById("company").value.trim();
  const msg = document.getElementById("msg").value.trim();

  if (!name || !role || !company || !msg) {
    alert("Please fill all fields");
    return;
  }

  const card = document.createElement("div");
  card.className = "rec-card";

  card.innerHTML = `
    <strong>${name}</strong> - ${role} (${company})
    <p>${msg}</p>
  `;

  document.getElementById("list").appendChild(card);

  document.getElementById("popup").style.display = "flex";

  document.querySelectorAll(".form input").forEach(i => i.value = "");
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
