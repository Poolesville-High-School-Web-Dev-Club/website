let span = document.querySelector("#changing")
let list = [
    "web development",
    "photography",
    "app development",
    "bots",
    "acrylic"
]
let x = 1;
function delay(delayInms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(2);
        }, delayInms);
    });
}

setInterval(async function() {
    span.classList.add("after")
   
    
    await delay(1000)

    span.textContent = list[x];
    await delay(200)
    span.classList.remove("after")
    console.log(x)
    x++
    x = x % list.length
}, 3000)
