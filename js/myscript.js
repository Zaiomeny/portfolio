document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.menu-item');
    const tab_menus = document.querySelectorAll('.tab-menu a');

    const removeActiveClass = (elements) => {
        elements.forEach((el)=>{
            el.classList.remove("active")
        })
    }


    for (let link of links) {
        link.addEventListener('click', (e) => {
            removeActiveClass(links)
            e.target.classList.add('active')
        })
    }

    for (let tab_menu of tab_menus) {
        tab_menu.addEventListener('click', (e) => {
            let targetElementId = e.target.getAttribute('href')
            removeActiveClass(tab_contents)
            e.target.classList.add('active')
            removeActiveClass(tab_menus)
            document.querySelector(targetElementId).classList.add('active')
        })
    }

})