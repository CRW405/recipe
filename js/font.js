var all = document.getElementsByTagName("*")

function fancify() {
    for (var i = 0; i < all.length;i++) {
        console.log(i)
        all[i].style.fontFamily = "Monsieur La Doulaise"
    }
}
