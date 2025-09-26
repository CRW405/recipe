function fancify() {
    document.querySelectorAll("body *").forEach((element) => {
        element.style.fontFamily = "Monsieur La Doulaise, serif";
        });
    button = document.getElementById("button");
    button.innerHTML = "CURE!";
    button.onclick = antidote;
    return;
}

function antidote()
        {
            document.querySelectorAll("body *").forEach((element) => {
        element.style.fontFamily = "Arial, sans-serif";
        });

            button = document.getElementById("button");
            button.innerHTML = "Fancify!";
            button.onclick = fancify;
            return;
        }
