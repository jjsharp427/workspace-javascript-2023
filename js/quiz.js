function randStickers(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
// generate the numbers for the quiz
// var sticker1 = Math.floor((Math.random()*200)+300);
// var sticker2 = Math.floor((Math.random()*100)+50);
// var sticker3 = Math.floor((Math.random()*50)+3);

var sticker1 = randStickers(300,600);
var sticker2 = randStickers(100,sticker1/2);
var sticker3 = randStickers(1,100);
console.log(sticker1,sticker2,sticker3)

// put the random numbers into the HTML file
document.getElementById("s1").textContent = sticker1.toString();
document.getElementById("s2").textContent = sticker2.toString();
document.getElementById("s3").textContent = sticker3.toString();

// generate possible answers in quiz
document.querySelector('[value="1"]').nextSibling.nodeValue = sticker1.toString()+"-"+sticker2.toString();
document.querySelector('[value="2"]').nextSibling.nodeValue = sticker1.toString()+"-"+sticker3.toString();
document.querySelector('[value="3"]').nextSibling.nodeValue = sticker1.toString()+"-"+sticker2.toString()+"+"+sticker3.toString();
document.querySelector('[value="4"]').nextSibling.nodeValue = sticker1.toString()+"-"+sticker2.toString()+"-"+sticker3.toString();

// Action -- click and change style
function changeStyle(e) {
    e.preventDefault(); // prevent the default action
    // get style of current element
    var classname = this.getAttribute("class");
    // change style of element
    if (classname == "answer") {
        this.setAttribute("class","answer selected");
    }
    else {
        this.setAttribute("class","answer");
    }
    this.animate([{transform:'rotate(0deg)'},{transform:'rotate(360deg)'}],{duration:1000,fill:"forwards"});
}

// add event listener to all the answers
for (var i = 0; i<4; i++) {
    document.getElementsByClassName("answer")[i].addEventListener("click",changeStyle,false);
}