import { books ,mostbuy } from "./data/product.js";




var container =document.querySelectorAll(".container")
let html=""
let html1=""
books.forEach((book_item)=>{
    html+=`  <div class="box">
    <img class="first_image" src="${book_item.book_image}" alt="">
</div>`


 container[0].innerHTML =html
})


mostbuy.forEach((book_item1)=>{
    html1+=`  <div class="box1">
    <img class="first_image" src="${book_item1.book_images}" alt="">
</div>`


 container[1].innerHTML =html1
})