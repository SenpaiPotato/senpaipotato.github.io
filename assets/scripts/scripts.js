// Typewriter created by Tameem Safi.
// source: https://github.com/tameemsafi/typewriterjs

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    delay:50,
    deleteSpeed:5
});

typewriter.typeString('student at uc berkeley')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString('bird enthusiast')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("maker of absurd DIY projects")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("creator of chaos")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("pikmin player")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("squirrel feeder")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("i'm currently open to work")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("check out my projects!")
    // .pauseFor(1000)
    // .deleteAll()
    // .pauseFor(500)
    // .typeString("")
    // .pauseFor(1000)
    // .deleteAll()
    .start();

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-70px";
  }
}


// $(function() {
//   $('a[href*=#]').on('click', function(e) {
//     e.preventDefault();
//     $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
//   });
// });

//filter buttons 
//source : https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_elements

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("each-project");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    console.log(element.className, arr2[i]);
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("button-section");
var btns = btnContainer.getElementsByClassName("filter-button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    console.log(current);
  });
}

const img = document.getElementById('about-img');

// Define the default and clicked image sources
const defaultImage = "assets/img/me_new.png";
const clickedImage = "assets/img/me.png";

// Toggle the image on click
img.addEventListener('click', () => {
    img.src = img.src.endsWith(defaultImage) ? clickedImage : defaultImage;
});