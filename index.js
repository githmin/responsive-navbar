

function navbarToggle() {
    var x = document.getElementById("navbar");
    const y = document.getElementById("toggleArea");
    
    y.addEventListener('click', () => {
        if (x.style.display === "flex") {
            x.style.display = "none";
          } else {
            x.style.display = "flex";
          }
    })

    
  }

  navbarToggle();