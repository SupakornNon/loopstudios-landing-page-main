const body = document.querySelector("body"),
      nav= document.querySelector("nav"),
      headerArea= document.querySelector(".header-area"),
      headerTitle= document.querySelector(".header-title"),
      menuBtn = document.querySelector('.menu-btn'),
      openMenu = document.querySelector('.openMenu'),
      closeMenu = document.querySelector('.closeMenu');
      // menuBtn = document.querySelector('.menu-btn'),

      menuBtn.addEventListener("click", () =>{
         menuBtn.classList.toggle("active");
         headerArea.classList.toggle("active");
         headerTitle.classList.toggle("active");
         
      })


      body.addEventListener("click", e =>{
         let clickedElm = e.target;
      
         if(!clickedElm.classList.contains("openMenu") && !clickedElm.classList.contains("navbar")){
            menuBtn.classList.remove("active");
            headerArea.classList.remove("active");
            headerTitle.classList.remove("active");
         }
      })