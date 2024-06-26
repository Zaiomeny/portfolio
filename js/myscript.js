document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.menu-item');
    const tab_menus = document.querySelectorAll('.tab-menu span');

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
                    const targetId = e.target.dataset.target
                    const tab_contents = document.querySelectorAll('.tab-content div')
                    removeActiveClass(tab_contents)
                    document.querySelector(targetId).classList.add('active')
                }
            })
        }
    }
    activeLink(links)
    activeLink(tab_menus, true)

})
