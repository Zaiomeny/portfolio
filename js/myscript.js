document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.menu-item');
    const tab_menus = document.querySelectorAll('.tab-menu a');

    const removeActiveClass = (elements) => {
        elements.forEach((el)=>{
            el.classList.remove("active")
        })
    }

    const activeLink = (elements, targeted = false) => {
        for (let element of elements) {
            element.addEventListener('click', (e) => {
                removeActiveClass(elements)
                e.target.classList.add('active')
                if (targeted) {
                    e.preventDefault()
                    const targetId = e.target.getAttribute('href')
                    const tab_contents = document.querySelectorAll('.tab-content div')
                    removeActiveClass(tab_contents)
                    document.querySelector(targetId).classList.add('active')
                }
            })
        }
    }
    activeLink(links)
    activeLink(tab_menus, true)


    //Toggle menu

    const btn_toggle = document.querySelector('.menu-toggle')

    btn_toggle.addEventListener('click',(e)=>{
        document.querySelector('.nav-menu').classList.toggle('active')
    })

})
