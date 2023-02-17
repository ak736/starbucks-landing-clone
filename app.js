const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {


    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});



const burgur = document.querySelector(".burgur");
const lavLinks = document.querySelector(".lav-links");
const rightSideNav = document.querySelector(".right-side-nav");

var lavOpen = false;

burgur.addEventListener("click", () => {
if (lavOpen == false) {
    lavOpen = true;

    lavLinks.classList.remove("nav-inactive");
    rightSideNav.classList.remove("nav-inactive");
  
    lavLinks.classList.add("nav-active");
    rightSideNav.classList.add("nav-right-active");
}

else if(lavOpen == true){

  lavOpen = false;

  setTimeout(() => {
    lavLinks.classList.remove("nav-active");
    rightSideNav.classList.remove("nav-right-active");
   }, 1000);
    
     lavLinks.classList.add("nav-inactive");
     rightSideNav.classList.add("nav-inactive");

}
}
)


const child = lavLinks.firstElementChild;
const unseenDiv = document.querySelector(".unseen-div");
const menuBefore = document.querySelector(".unseen-head");


var insideHamOpen = false;

child.addEventListener("click", () => {
if (insideHamOpen == false) {
  insideHamOpen = true;

    unseenDiv.classList.remove("unseen-inactive");
  
    unseenDiv.classList.add("unseen-active");
}

else if(insideHamOpen == true){

  insideHamOpen = false;

  setTimeout(() => {
    unseenDiv.classList.remove("unseen-active");
   }, 1000);
    
     unseenDiv.classList.add("unseen-inactive");

}


}
)

menuBefore.addEventListener("click", () => {

  unseenDiv.classList.add("unseen-inactive");
})
