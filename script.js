// ================= LOADER =================
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none";
    }
});

// ================= DARK MODE =================
function toggleDark() {
    document.body.classList.toggle("dark");
}

// ================= TYPED JS =================
if (document.getElementById("name")) {
    new Typed("#name", {
        strings: ["Prathap Goud", "Full Stack Developer", "UI/UX Designer"],
        typeSpeed: 80,
        backSpeed: 40,
        loop: true
    });
}

// ================= AOS INIT =================
if (typeof AOS !== "undefined") {
    AOS.init();
}

// ================= RECOMMENDATION SYSTEM =================

// FIX: duplicate id issue avoid cheyyadaniki inputs unique ga access chesthunna
function addRec() {

    let nameEl = document.getElementById("nameInput");
    let roleEl = document.getElementById("role");
    let companyEl = document.getElementById("company");
    let msgEl = document.getElementById("input");

    let name = nameEl.value.trim();
    let role = roleEl.value.trim();
    let company = companyEl.value.trim();
    let message = msgEl.value.trim();

    // validation
    if (!name || !role || !company || !message) {
        alert("Please fill all fields");
        return;
    }

    let list = document.getElementById("list");

    let card = document.createElement("div");
    card.className = "rec-card";

    card.innerHTML = `
        <div class="rec-header">
            <div class="avatar">${name.charAt(0).toUpperCase()}</div>
            <div>
                <h4>${name}</h4>
                <small>${role} @ ${company}</small>
            </div>
        </div>
        <p class="rec-msg">"${message}"</p>
    `;

    list.appendChild(card);

    // popup show FIX
    let popup = document.getElementById("popup");
    popup.classList.add("show");

    // clear inputs
    nameEl.value = "";
    roleEl.value = "";
    companyEl.value = "";
    msgEl.value = "";
}

// ================= CLOSE POPUP =================
function closePopup() {
    document.getElementById("popup").classList.remove("show");
}

// ================= SMOOTH SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// ================= ACTIVE NAV =================
window.addEventListener("scroll", () => {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("nav a");

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector("nav a[href*=" + id + "]")?.classList.add("active");
            });
        }
    });
});
