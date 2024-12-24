let count = 10
let counter = setInterval(function () {
    document.getElementById("count").innerHTML = count
    count = count - 1
    if (count < 0) {
        document.getElementById("msg").innerHTML = "MERRY CHRISTMAS! <br> From Elisha"
        document.getElementById("count").style.display = "none"
        document.getElementById("santa-claus").style.display = "inline-block"
        clearInterval(counter)
    }
}, 1000)