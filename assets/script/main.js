var setVanta = ()=>{
                if (window.VANTA) window.VANTA.CELLS({
                el: ".testing",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                size: 1.90,
                speed: 2.20
                })
                }
                _strk.push(function() {
                setVanta()
                window.edit_page.Event.subscribe( "Page.beforeNewOneFadeIn", setVanta )
                })
                
function openMenu() {
    document.getElementById("mobileMenu").style.width = "300px";
    document.querySelectorAll("body :not(.notBlur)")
    .forEach(element => element.style.filter = "blur(2px)");
}
  
function closeMenu() {
    document.getElementById("mobileMenu").style.width = "0%";
    document.querySelectorAll("body :not(.notBlur)")
    .forEach(element => element.style.filter = "blur(0px)");
}

/*=============== ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.accordion__item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.accordion__header')

    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')
        
        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.accordion__content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}

function comingsoon(){
    alert("Coming soon");
}
