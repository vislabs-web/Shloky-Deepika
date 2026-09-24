const modal=document.getElementById("modal");
const openBtn=document.getElementById("openBtn");
const closeBtn=document.getElementById("closeBtn");

openBtn.addEventListener("click",()=>{
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
});
closeBtn.addEventListener("click",()=>{
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
});
modal.addEventListener("click",(e)=>{
  if(e.target===modal) closeBtn.click();
});
document.addEventListener("keydown",(e)=>{
  if(e.key==="Escape" && modal.classList.contains("open")) closeBtn.click();
});
