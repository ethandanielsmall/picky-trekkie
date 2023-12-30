// when click on tng button, send 'tngButton' to 'findAnEpisode' string.
// build the string with clicks tngButton, happyButton, etc.
// when the string is built, send it to the db
// get back names of episodes and insert them onto page

let sec = document.querySelector("#section")
let timeout;

function engage() {
    // when choices 1, 2, and 3 are 'true'
    // load
    sec.style.display="inline";
    console.log("engage");
};

document.getElementById("button").onclick = engage();