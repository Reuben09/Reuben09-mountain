const reviews = [
   {
        img: "images/img-06.jpg",
        title:"Lbortis",
        text: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe distinctio, at consequuntur,   atque et sunt voluptatibus voluptatem est ipsam eaque culpa  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis quas libero, facere vero a  laborum accusamus repudiandae. Voluptate, ratione nesciunt. Quo, eveniet eaque"   
    },
    {
        img: "images/img-07.jpg",
        title:"Moon",
        text: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe distinctio, at consequuntur,   atque et sunt voluptatibus voluptatem est ipsam eaque culpa  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis quas libero, facere vero animi,  laborum accusamus repudiandae. Voluptate, ratione nesciunt. Quo, eveniet eaqu"     
    }
]


// navbar section
const menuToggle = document.querySelector(".menuToggle");
const navList = document.querySelector(".nav-list");

menuToggle.addEventListener("click", function(){
    navList.classList.toggle("show-links");
})

// slider section
const img = document.querySelector(".image");
const title = document.querySelector(".title");
const text = document.querySelector(".text");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
 
let currentItem = 0;
window.addEventListener("DOMContentLoaded", function(){
    showSection(currentItem);
})

function showSection(section){
      const item = reviews[section];
      img.src = item.img;
      title.textContent = item.title;
      text.textContent = item.text;
}

prevBtn.addEventListener("click", function(){
    currentItem--;
    showSection(currentItem);
 })
nextBtn.addEventListener("click", function(){
    currentItem++;
    showSection(currentItem);
  })