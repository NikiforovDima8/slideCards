const downBtn=document.querySelector('.down-button')
const upBtn=document.querySelector('.up-button')
const container=document.querySelector('.container')
const mainSlide=document.querySelector('.main-slide')
const sidebar=document.querySelector('.sidebar')
const slidesCount=mainSlide.querySelectorAll('div').length

let active=0


sidebar.style.top=`-${(slidesCount-1)*100}vh`
 
upBtn.addEventListener('click',()=>{
    changeSlide('up')
})

downBtn.addEventListener('click',()=>{
    changeSlide('down')
})



function changeSlide(direction){
if(direction==='up'){
    active++
    if(active===slidesCount){
        active=0
    }
}else if(direction==='down'){
    active--
    if(active<0){
        active=slidesCount-1
    }
}

const height=container.clientHeight
mainSlide.style.transform =`translateY(-${active*height}px)`

sidebar.style.transform =`translateY(${active*height}px)`

}

