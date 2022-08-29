let bar_icon = document.getElementById("bar-icon");
let menue=document.querySelector(".links ul")
// const close_icon = document.getElementById("#close-icon")

bar_icon.addEventListener("click", () => {
    menue.classList.toggle("appear");
})

const scroll_btn = document.getElementById("scroll-top");


window.onscroll=function(){
    if(scrollY>=400){
        scroll_btn.style.display='block';
    }
    else{
        scroll_btn.style.display='none';
    }
}


scroll_btn.onclick=function(){
scroll(0,0);
}

// Reveal iteams

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset:true,
})
window.onload = function () {
    sr.reveal(`.left-side`);
    sr.reveal(`.right-side`, { delay:500});
    sr.reveal(`.card1`, { delay:400 });
    sr.reveal(`.card2`, { delay:500 });
    sr.reveal(`.card3`, { delay:600 });
    sr.reveal(`.card4`, { delay:700});
    sr.reveal(`.card5`, { delay:800});
    sr.reveal(`.card6`, { delay:900});
    sr.reveal(`.p-1`, { delay:300 });
    sr.reveal(`.p-1`, { delay:400 });
    sr.reveal(`.p-1`, { delay:500 });
    sr.reveal(`.p-1`, { delay:600});
    sr.reveal(`.p-1`, { delay:700});
    sr.reveal(`.p-1`, { delay:800});
    sr.reveal(`.image-part`,{ delay:1000 });
    sr.reveal(`.info-part`, { delay: 2000,origin:'right' });
}