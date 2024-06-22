const Nosotros = document.querySelector("#QuienesSomos");
const services = document.querySelector("#Servicios");

const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function selectItem(e) {
    removeBorder();
    removeShow();
    //Add border to current tab
    this.classList.add('tab-border');
    //Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //Add show class
    tabContentItem.classList.add(`show`);
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}
//Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));

/*Menu about*/
Nosotros.addEventListener("click", (p) => {
    p.preventDefault();
    const sectionP = document.querySelector(".about");
    sectionP.scrollIntoView({behavior: "smooth"});
})

/*Menu Servicios*/
services.addEventListener("click", (s) => {
    s.preventDefault();
    const sectionS = document.querySelector(".tabs");
    sectionS.scrollIntoView({behavior: "smooth"});
})


for (let i = 0; i < tabItems.length ; i++) {
    tabItems[i].addEventListener("click", () => {
        const element = tabItems[i]
        tabItems[i].classList.add("active")

        for (let j = 0; j < tabItems.length; j++) {
            if (tabItems[j].classList.contains("active") && tabItems[j] != element) {
                tabItems[j].classList.remove("active")
            }
        }
    })
}