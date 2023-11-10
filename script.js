
let total = document.querySelector(".total");
x = 0;
//add btns
addbtns = document.querySelectorAll(".add");
addbtns[0].onclick = function(){
    let newitem = document.createElement("div");
    newitem.innerHTML = document.querySelector(".item1").innerHTML
    newitem.classList.add(".shopping-cart-item")
    items.appendChild(newitem);
    cart+="s";
    x += 899,99; 
    total.innerHTML = x+ "kr";
    cartBtnCheck();

};
addbtns[1].onclick = function(){
    let newitem = document.createElement("div");
    newitem.innerHTML = document.querySelector(".item2").innerHTML
    newitem.classList.add(".shopping-cart-item")
    items.appendChild(newitem);
    cart+="h";
    console.log(cart)
    x += 500; 
    total.innerHTML = x+ "kr";
    cartBtnCheck();

};
addbtns[2].onclick = function(){
    let newitem = document.createElement("div");
    newitem.innerHTML = document.querySelector(".item3").innerHTML
    newitem.classList.add(".shopping-cart-item")
    items.appendChild(newitem);
    cart+="p";
    console.log(cart)
    x += 369,99; 
    total.innerHTML = x+ "kr";
    cartBtnCheck();

};
addbtns[3].onclick = function(){
    let newitem = document.createElement("div");
    newitem.innerHTML = document.querySelector(".item1").innerHTML
    newitem.classList.add(".shopping-cart-item")
    items.appendChild(newitem);
    cart+="h";
    console.log(cart)
    x += 899,99; 
    total.innerHTML = x+ "kr";
    cartBtnCheck();

};
addbtns[4].onclick = function(){
    let newitem = document.createElement("div");
    newitem.innerHTML = document.querySelector(".item2").innerHTML
    newitem.classList.add(".shopping-cart-item")
    items.appendChild(newitem);
    cart+="p";
    console.log(cart)
    x += 500; 
    total.innerHTML = x+ "kr";
    cartBtnCheck();

};
addbtns[5].onclick = function(){
    let newitem = document.createElement("div");
    newitem.innerHTML = document.querySelector(".item3").innerHTML
    newitem.classList.add(".shopping-cart-item")
    items.appendChild(newitem);
    cart+="p";
    console.log(cart)
    x += 369,99; 
    total.innerHTML = x+ "kr";
    cartBtnCheck();

};
addbtns[6].onclick = function(){
    let newitem = document.createElement("div");
    newitem.innerHTML = document.querySelector(".item4").innerHTML
    newitem.classList.add(".shopping-cart-item")
    items.appendChild(newitem);
    cart+="p";
    console.log(cart)
    x += 200; 
    total.innerHTML = x+ "kr";
    cartBtnCheck();

};
addbtns[7].onclick = function(){
    let newitem = document.createElement("div");
    newitem.innerHTML = document.querySelector(".item5").innerHTML
    newitem.classList.add(".shopping-cart-item")
    items.appendChild(newitem);
    cart+="p";
    console.log(cart)
    x += 680; 
    total.innerHTML = x+ "kr";
    cartBtnCheck();

};
addbtns[8].onclick = function(){
    let newitem = document.createElement("div");
    newitem.innerHTML = document.querySelector(".item6").innerHTML
    newitem.classList.add(".shopping-cart-item")
    items.appendChild(newitem);
    cart+="p";
    console.log(cart)
    x += 120; 
    total.innerHTML = x+ "kr";
    cartBtnCheck();

};
addbtns[9].onclick = function(){
    let newitem = document.createElement("div");
    newitem.innerHTML = document.querySelector(".item7").innerHTML
    newitem.classList.add(".shopping-cart-item")
    items.appendChild(newitem);
    cart+="p";
    console.log(cart)
    x += 100; 
    total.innerHTML = x+ "kr";
    cartBtnCheck();

};
addbtns[10].onclick = function(){
    let newitem = document.createElement("div");
    newitem.innerHTML = document.querySelector(".item8").innerHTML
    newitem.classList.add(".shopping-cart-item")
    items.appendChild(newitem);
    cart+="p";
    console.log(cart)
    x += 450,66; 
    total.innerHTML = x+ "kr";
    cartBtnCheck();

};
addbtns[11].onclick = function(){
    let newitem = document.createElement("div");
    newitem.innerHTML = document.querySelector(".item9").innerHTML
    newitem.classList.add(".shopping-cart-item")
    items.appendChild(newitem);
    cart+="p";
    console.log(cart)
    x += 20; 
    total.innerHTML = x + "kr";
    cartBtnCheck();

};
//cart
let items = document.querySelector(".items");
let cart = [];


//glow
let t = false;
let h2 = document.querySelector("h2");
setInterval(()=>{
    if(t==false){
        h2.style.textShadow = "1px 1px 10px purple";
        h2.style.transition = "2s"
        t = true;
    }
    else{
        h2.style.textShadow = "none";
        h2.style.transition = "2s"
        t = false;
    }

},2000)


//total

//Hero text blink
let ht = document.querySelectorAll(".blink");
let b  = 0;
let colorhero = ["lightblue", "#d8ade6"]
setInterval(()=>{
    if(b == ht.length){
        b = 0;
    }
    if(b == 0){
        ht[3].style.color = "white";
        ht[3].style.textShadow = "none";
    }
    else if(b > 0){
        ht[b-1].style.color = "white";
        ht[b-1].style.textShadow = "none";
    }
    
    ht[b].style.color = colorhero[1];
    ht[b].style.textShadow = "1px 1px 20px purple";
    b+=1
},800)






//blink2


// intersection observer
let populars = document.querySelector(".wrapper");
let populare = document.querySelector(".popular")
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            populare.style.opacity ="1"
            populars.style.opacity = "1"
        }
    })
})
observer.observe(populare);
observer.observe(populars);

//cartbutton
function cartBtnCheck(){
    if(cart.length != 0){
        document.querySelector(".cart-btn").style.background = "black"
    }
    else{
        document.querySelector(".cart-btn").style.background = "white"
    }
}
//cart appear
let cartbtn = document.querySelector(".abso");
cartbtn.addEventListener("click",()=>{
    document.querySelector(".shopping-cart").style.top = "121px"
})

//purchase
const checkout = document.querySelector(".outbtn");
checkout.addEventListener("click",()=>{
    total.innerHTML = "";
    items.innerHTML ="";
    window.alert("Order Placed")
    document.querySelector(".cart-btn").style.background = "white"
})

//Hamburger
let toggle = false;
let hamburgerButton = document.querySelector(".hamburger")
let hMenu = document.querySelector(".menu");
hamburgerButton.addEventListener("click", ()=>{
    if(toggle == false){
        hMenu.style.left = "0px"
        hMenu.style.transition = "1s"
        toggle = true;
    }
    else{
        hMenu.style.left = "100%"
        hMenu.style.transition = "2s"
        toggle = false;
    }
})
