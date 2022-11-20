/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }


  window.onscroll = function() {myFunction()};

  var header = document.getElementById("nav-menu");
  var sticky = header.offsetTop;
  
  function myFunction() {
    if (window.pageYOffset > sticky ) {
      header.classList.add("sticky");
      document.getElementById('menuLink1').style.color="#000"
      document.getElementById('menuLink2').style.color="#000"
      document.getElementById('menuLink3').style.color="#000"
      document.getElementById('menuLink4').style.color="#000"
      document.getElementById('menuLink5').style.color="#000"
    } else {
      header.classList.remove("sticky").style.scrollBehavior="smooth";
      document.getElementById('menuLink1').style.color="#f1f1f1"
      document.getElementById('menuLink2').style.color="#f1f1f1"
      document.getElementById('menuLink3').style.color="#f1f1f1"
      document.getElementById('menuLink4').style.color="#f1f1f1"
      document.getElementById('menuLink5').style.color="#f1f1f1"
    }
  }


  document.addEventListener('DOMContentLoaded', () => {

    // create horizontal tabs
    new VanillaTabs({
      'selector': '#tabs-h',	// default is ".tabs"
      'type': 'horizontal', 	// can be horizontal / vertical / accordion
      'responsiveBreak': 840,	// tabs become accordion on this device width
      'activeIndex' : 0				// active tab index (starts from 0 ). Can be -1 for accordions.
    });
  });