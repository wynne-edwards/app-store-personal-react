window.onscroll = function () { scrollFunction() }; //When scrolling down change the size of the nav bar, when back at the top change it back. All are variations of if top do this else this

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("nav").style.height = "80px";
        document.getElementById("shop").style.lineHeight = "80px";
        document.getElementById("navLogo").style.transform = "scale(0.8)"
        document.getElementById("logo").style.top = "2px";
        document.getElementById("logoNameContainer").style.top = "-70px";
        document.getElementById("util").style.lineHeight = "80px";
        scrollFunction2();
    } else {
        document.getElementById("nav").style.height = "100px";
        document.getElementById("shop").style.lineHeight = "100px";
        document.getElementById("navLogo").style.transform = "scale(1)"
        document.getElementById("logo").style.top = "13px";
        document.getElementById("logoNameContainer").style.top = "-60px";
        document.getElementById("util").style.lineHeight = "100px";
    }
}
function scrollFunction2() {
    var desc1 = document.getElementsByClassName("hoverDesc");
    var desc2 = document.getElementsByClassName("hoverDesc2");
    if (document.body.scrollTop > 1700 || document.documentElement.scrollTop > 1700) {
        document.getElementById("nav").style.background = "transparent";
        document.getElementById("nav").style.backdropFilter = "blur(5px)";
        document.getElementById("hoverContainer").style.backdropFilter = "blur(5px)";
        document.getElementById("navLogo").style.color = "white";
        document.getElementById("shop").style.color = "white";
        document.getElementById("util").style.color = "white";
        document.getElementById("hoverContainer").style.background = "transparent";
        for (let i = 0; i < desc1.length; i++) {
            desc1[i].style.color = "white";
        }
        for (let i = 0; i < desc2.length; i++) {
            desc2[i].style.color = "white";
        }
    } else {
        document.getElementById("hoverContainer").style.backdropFilter = "blur(0px)";
        document.getElementById("nav").style.backdropFilter = "blur(0px)";
        document.getElementById("nav").style.background = "white";
        document.getElementById("navLogo").style.color = "black";
        document.getElementById("shop").style.color = "black";
        document.getElementById("util").style.color = "black";
        document.getElementById("hoverContainer").style.background = "#f9f9f9";
        for (let i = 0; i < desc1.length; i++) {
            desc1[i].style.color = "black";
        }
        for (let i = 0; i < desc2.length; i++) {
            desc2[i].style.color = "black";
        }
    }
}//Transitions
const thing1 = document.querySelector('.transitionSubheading'); 
const thing2 = document.querySelector('.transitionSubheading2');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { //When scrolling add labels to what you see, and remove to that you done
        if (entry.isIntersecting) {
            console.log(thing1.classList);
            thing1.classList.add('active1');
            thing2.classList.add('active2');
        } else {
            thing1.classList.remove('active1');
            thing2.classList.remove('active2');
        }
    });
});
observer.observe(document.querySelector('.transitionHeadingContainer'));//Observers
