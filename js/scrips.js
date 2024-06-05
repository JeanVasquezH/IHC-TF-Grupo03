const Nosotros = document.querySelector("#QuienesSomos");
const services = document.querySelector("#Servicios");

/*Menu about*/
Nosotros.addEventListener("click", (p) => {
    p.preventDefault();
    const sectionP = document.querySelector(".about");
    sectionP.scrollIntoView({behavior: "smooth"});
})

/*Menu Servicios*/
services.addEventListener("click", (s) => {
    s.preventDefault();
    const sectionS = document.querySelector(".sau");
    sectionS.scrollIntoView({behavior: "smooth"});
})

