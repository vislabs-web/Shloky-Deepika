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


const questionSection=document.querySelector(".question-section");
const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");
const answerMessage=document.getElementById("answerMessage");
let noClicks=0;

noBtn.addEventListener("click",()=>{
  noClicks++;
  const scale=Math.min(1 + noClicks * 0.38, 5.5);
  yesBtn.style.transform=`scale(${scale})`;
  yesBtn.style.zIndex="10";
  answerMessage.textContent = noClicks === 1
    ? "Hmm... maybe try again? ♡"
    : noClicks === 2
      ? "The YES is getting bigger... ♡"
      : "Okay, I think YES needs more space. ♡";
  if(noClicks >= 4){
    noBtn.disabled=true;
    noBtn.style.opacity="0";
    noBtn.style.pointerEvents="none";
    answerMessage.textContent="Looks like YES won this little paper battle. ♡";
  }
});

yesBtn.addEventListener("click",()=>{
  questionSection.classList.add("answered");
  answerMessage.textContent="I knew it. ♡";
  yesBtn.style.transform="scale(1.18)";
});
