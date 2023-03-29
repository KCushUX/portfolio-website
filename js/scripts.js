console.log("Thanks for coming!");

function menuToggle() {
  var x = document.getElementById("myNavtoggle");
  if (x.className === "navtoggle") {
    x.className += " responsive";
  } else {
    x.className = "navtoggle";
  }
}

$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    2000
  );
});

$("#click_advance").click(function () {
  $("#display_advance").toggle("1000");
  $("i", this).toggleClass("fas fa-bars fas fa-x");
});

// Back to top shortcut:
let topbutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Jump Menu:
let jumpmenu = document.getElementById("jmpMenu");

// When the user scrolls down 20px from the top of the document, show the button
window.addEventListener("scroll", displayMenu);

function displayMenu() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    jumpmenu.style.display = "block";
  } else {
    jumpmenu.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
