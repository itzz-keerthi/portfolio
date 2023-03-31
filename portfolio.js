console.log("Keerthi");
const nav=document.querySelector(".navbar");
const con=document.querySelector(".detail");
const nh=nav.offsetHeight;
window.addEventListener("scroll",(e)=>{
   if(scrollY>con.offsetTop-nh){
    nav.className="active";
   }
   else{
    nav.className="navbar";
   }

})
