var typed = new Typed(".multiple-text",{
  strings:["FullStack Developer", "YouTuber", "Blogger"],
  typeSpeed: 100,
  backSpeed:100,
  backDelay:1000,
  loop:true
});


const body = document.querySelector("body"),
      modeSwtich = body.querySelector(".toggle-switch");
      modeSwtich.addEventListener("click",() =>{
        body.classList.toggle("dark")
      })

