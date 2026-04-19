function addRec() {
    let input = document.getElementById("input").value;

    if (input === "") {
        alert("Please enter a recommendation");
        return;
    }

    let div = document.createElement("div");
    div.className = "rec";
    div.innerText = input;

    document.getElementById("list").appendChild(div);

    // SHOW POPUP
    document.getElementById("popup").style.display = "block";

    document.getElementById("input").value = "";
}

function closePopup() {
    document.getElementById("popup").style.display = "block";
}
