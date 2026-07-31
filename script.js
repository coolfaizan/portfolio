
// let links = document.querySelectorAll(".nav-link");
// let current = null;

// links.forEach((link) => {
//     link.addEventListener("click", function () {

//         if (current) {
//             current.classList.add("vapour"); // Hide previous section
//         }

//         let div = document.querySelector("." + this.id);

//         div.classList.remove("vapour"); // Show current section. vapour mtlb display none;
//         current = div;
//     });
// });


let links = document.querySelectorAll(".nav-link");
let sections=document.querySelectorAll(".about, .education, .skills, .project, .contact");
links.forEach((link) => {
    link.addEventListener("click", function () {
        sections.forEach((section)=>{
            section.classList.add("vapour");
        })
        let div = document.querySelector("." + this.id);
        div.classList.remove("vapour"); // Show current section. vapour mtlb display none;
    });
});
let btn=document.querySelector("#submit");
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let inp=document.querySelectorAll(".form-control");
    for (i of inp){
        i.value="";
    }
});

const navLinks = document.querySelectorAll(".nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
        bsCollapse.hide();
    });
}); 