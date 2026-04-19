function addRec() {
    let input = document.getElementById("input").value;

    if(input === "") {
        alert("Please enter something");
        return;
    }

    let div = document.createElement("div");
    div.className = "rec";
    div.innerText = input;

    document.getElementById("list").appendChild(div);

    document.getElementById("popup").style.display = "block";

    document.getElementById("input").value = "";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}