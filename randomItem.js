document.getElementById("butt").addEventListener("click", chooseItem)
document.getElementById("show").addEventListener("click", chooseItem)
document.getElementById("reset").addEventListener("click", reset)


let list = [
    "Play only the red parts", 
    "Play only the green parts", 
    "Play only the blue parts",
    "Play between the lines",
    "Play the silent parts of the image",
    "Interpret the symbolic meaning of the image as pitch material",
    "Apply the rhythmic content of this image to the symbolic content of the previous image"
]

function reset(){
    var show = document.getElementById("show")
    // console.log(img)
    show.textContent = "Click on this page to reveal a performance instruction for playing the YouTube score"

}

function chooseItem(){
    var item = list.random()
    // console.log(item)
    var show = document.getElementById("show")
    // console.log(img)
    show.textContent = item 
}





Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
  }
  