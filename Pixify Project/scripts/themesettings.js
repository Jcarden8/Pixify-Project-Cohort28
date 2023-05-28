const themeButton=document.querySelector(".theme-btn")
const toggleTheme=()=>{

  const body = document.querySelector("body")
  const div = document.querySelector("div")
  const subBtn = document.querySelector(".sub-btn")
  const prevBtn = document.getElementById("previous-btn")


  if(body.style.backgroundColor==="white"){
    body.style.backgroundColor="#2A3B49"
    div.style.color ="white"
    subBtn.style.border = "2px solid #7BFFE9"
    themeButton.innerHTML="Dark Mode"
  }else{
    body.style.backgroundColor="white"
    div.style.color = "black"
    subBtn.style.border ="#7BFFE9"
    themeButton.innerHTML="Light Mode"
  }

}
themeButton.onclick=toggleTheme;
