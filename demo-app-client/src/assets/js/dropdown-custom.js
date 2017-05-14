// Close the dropdown menu if the user clicks outside of it

$(document).ready(function(){


        $(window).on('click', function(event) {

            // console.log('am apasat pe back, locatia noua: ', window.location.pathname);

           if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

        });

    }
});














