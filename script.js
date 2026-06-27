// =============================
// Jain Communications
// Making Sunshine Work For You
// =============================

// Mobile Navigation
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });

            if(navMenu){
                navMenu.classList.remove("active");
            }
        }
    });
});

// Navbar Background
window.addEventListener("scroll",()=>{

const navbar=document.querySelector(".navbar");

if(!navbar) return;

if(window.scrollY>80){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});

// ====================================
// Solar Savings Calculator (India)
// ====================================

const billInput=document.getElementById("monthlyBill");

const calculateBtn=document.getElementById("calculateBtn");

if(calculateBtn){

calculateBtn.addEventListener("click",calculateSavings);

}

function calculateSavings(){

const bill=parseFloat(billInput.value);

if(isNaN(bill) || bill<=0){

alert("Please enter your monthly electricity bill.");

return;

}

// Approximation

const yearlyBill=bill*12;

const solarSize=(bill/1200).toFixed(1);

const annualSavings=Math.round(yearlyBill*0.80);

const lifetimeSavings=annualSavings*25;

const payback=(4.5).toFixed(1);

document.getElementById("systemSize").innerText=
solarSize+" kW";

document.getElementById("annualSavings").innerText=
"₹ "+annualSavings.toLocaleString("en-IN");

document.getElementById("lifetimeSavings").innerText=
"₹ "+lifetimeSavings.toLocaleString("en-IN");

document.getElementById("payback").innerText=
payback+" Years";

const result=document.getElementById("calculatorResult");

if(result){

result.style.display="block";

result.scrollIntoView({
behavior:"smooth"
});

}

}

// ====================================
// Reveal Animation
// ====================================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});

// ====================================
// Counter Animation
// (Will work if added later)
// ====================================

document.querySelectorAll("[data-count]").forEach(counter=>{

let started=false;

window.addEventListener("scroll",()=>{

if(started) return;

const rect=counter.getBoundingClientRect();

if(rect.top<window.innerHeight){

started=true;

let count=0;

const target=parseInt(counter.dataset.count);

const speed=Math.ceil(target/80);

const timer=setInterval(()=>{

count+=speed;

if(count>=target){

count=target;

clearInterval(timer);

}

counter.innerText=count;

},25);

}

});

});

// ====================================
// Footer Year
// ====================================

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}

// ====================================
// Console Branding
// ====================================

console.log(
"%cJain Communications\nMaking Sunshine Work For You",
"color:#D4AF37;font-size:18px;font-weight:bold;"
);
