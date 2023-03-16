const circle1 = document.querySelector('.circle1')
const circle2 = document.querySelector('.circle2')
const circle3 = document.querySelector('.circle3')

/* homepage 1*/
const left1 = document.querySelector('.left1')
const right1 = document.querySelector('.right1')
right1.addEventListener('click',()=>{
    const homepage2 = document.querySelector('.homepage2')
  
    homepage2.style.display="block"
    const circle2 = document.querySelector('.circle2')
    circle2.style.width = "1.2rem"
    circle2.style.height= "1.2rem"

   
})

left1.addEventListener('click',()=>{
    const homepage3 = document.querySelector('.homepage3')
  
    homepage3.style.display="block"
   
})

/* homepage 2
setInterval(function () {right1.click();},8000);*/



/* homepage 2*/
const left2 = document.querySelector('.left2')
const right2 = document.querySelector('.right2')
right2.addEventListener('click',()=>{
   
    const homepage3 = document.querySelector('.homepage3')
    homepage3.style.display="block"


    const circle3 = document.querySelector('.circle3')
    circle3.style.width = "1.2rem"
    circle3.style.height= "1.2rem"





    
    
})



left2.addEventListener('click',()=>{
    const homepage2 = document.querySelector('.homepage2')
    const homepage3 = document.querySelector('.homepage3')
    homepage3.style.display="none"
    homepage2.style.display="none"
   
})
/* homepage 3
setInterval(function () {right2.click();},12000);*/



/* homepage 3*/
const left3 = document.querySelector('.left3')
const right3 = document.querySelector('.right3')

right3.addEventListener('click',()=>{
    
    const homepage3 = document.querySelector('.homepage3')
    const homepage2 = document.querySelector('.homepage2')
    homepage3.style.display="none"
    homepage2.style.display="none"
 
})



left3.addEventListener('click',()=>{
    const homepage2 = document.querySelector('.homepage2')
    const homepage3 = document.querySelector('.homepage3')
    
    homepage3.style.display="none"
    homepage2.style.display="block"
   
})
/* homepage 3
 setInterval(function () {right3.click();},15000);*/

/* close menu */
const close = document.querySelector('.close')
close.addEventListener('click',()=>{
    const  minclode = document.querySelector('.minclode')
    minclode.style.display="none"
    close.style.display="none"
})


/* menu hambrgr */
const menuhamb1 = document.querySelector('.menuhamb1')
menuhamb1.addEventListener('click',()=>{
    const  minclode = document.querySelector('.minclode')
    minclode.style.display="block"
    close.style.display="block"
    
   
})
