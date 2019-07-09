// alert("Hello! I am an alert box!!");
var pics = ["mycats.jpg", "oscar1.jpg", "oscar2.jpg", "cotton1.jpg", "cotton2.jpg"];

var i=0
function nextPic(){
  i++;
  if (i==pics.length){
    i=0;
  }
  document.getElementById("img_to_change").src = pics[i];
}

function bigImg(x) {
  x.style.width = "500px";
}

function normalImg(x) {
  x.style.width = "300px";
}

function show_hide(){
  var x = document.getElementById("content");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
