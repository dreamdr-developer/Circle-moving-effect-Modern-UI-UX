const circle1= document.querySelector("#circle-1")
const circle2= document.querySelector("#circle-2")
const circle3= document.querySelector("#circle-3")
const circle4= document.querySelector("#circle-4")

const content = document.querySelector("#content")

// console.log(content.getBoundingClientRect().width)
const vedalpu = content.getBoundingClientRect().width;
const neluvu = content.getBoundingClientRect().height;

content.addEventListener("mouseenter",move())
function move(){
    content.addEventListener("mousemove",function(dets){
        // console.log("hey")
        console.log((dets.x-(vedalpu/2))/(vedalpu/100))
        // console.log(dets.y-(neluvu/2)/(neluvu/100))
        console.log(((dets.y-348)-(40/2))/(3.62)/2);
circle1.style.transform =`translate(${-(dets.x-(vedalpu/2))/(vedalpu/100)}%,${-(((dets.y-348)-(40/2))/(3.62)/2)}%)`
circle2.style.transform =`translate(${(dets.x-(vedalpu/2))/(vedalpu/100)}%,${(((dets.y-348)-(40/2))/(3.62)/2)}%)`
circle3.style.transform =`translate(${(dets.x-(vedalpu/2))/(vedalpu/100)}%,${-(((dets.y-348)-(40/2))/(3.62)/2)}%)`
circle4.style.transform =`translate(${-(dets.x-(vedalpu/2))/(vedalpu/100)}%,${(((dets.y-348)-(40/2))/(3.62)/2)}%)`

})}

content.addEventListener("mouseleave",function(){
    circle1.style.transform =`translate(0%,0%)`
    circle2.style.transform =`translate(0%,0%)`
    circle3.style.transform =`translate(0%,0%)`
    circle4.style.transform =`translate(0%,0%)`
})



var tl = gsap.timeline();
tl.to("#left",{
    ease:Expo.easeInOut,
    duration:.8,
    left:"100%",
    stagger:.2,
    width:"100%",
})
.to("#right",{
    duration:.8,
    stagger:.2,
    width:"100%",
    ease:Expo.easeInOut,
})
// .to(".getta",{
//     ease:Expo.easeInOut,
//     duration:.8,
//     delay:.8,
// })
.to("#nav",{
    y:"8%",
    duration:.6,
    opacity:1,
    ease:Expo.easeInOut
})
.to(".circle",{
    opacity:1,
    ease:Expo.easeInOut,
    duration:.8,
    stagger:.2,
})
.to(".cursor",{
    opacity:1,
})
.to(".box",{
    opacity:1,
    ease:Expo.easeInOut,
})
.to("#bottom img",{
    y:5,
    duration:.8,
    opacity:1,
    ease:Expo.easeInOut,
    repeat:-1,
})

gsap.to("#Line1",{
    height:"98%",
    delay:1.5,
    duration:.8,
    ease:Expo.easeInOut,
})
gsap.to("#Line2",{
    width:"100%",
    delay:1.5,
    duration:.6,
    ease:Expo.easeInOut,
})

let moveecursor = document.querySelector(".cursor")
document.addEventListener("mousemove",moveCursor);
function moveCursor(haha){
let x= haha.clientX;
let y= haha.clientY;
// console.log(x,y)
moveecursor.style.left=`${x}px`;
moveecursor.style.top=`${y}px`;
}

