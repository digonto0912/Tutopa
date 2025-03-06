// NAVBAR - phone active toggle
const nav_open = document.querySelector('.navbar-menu-toggle')
const nav = document.querySelector('.navbar-menu-close')
const nav_menu = document.querySelector('.navbar-menu')
const bg_black = document.querySelector('.bg-black')

console.log(bg_black);


// open
nav_open.addEventListener('click', () => {
    nav_menu.classList.add('active')
    bg_black.classList.add('active')
})

// close
nav.addEventListener('click', () => {
    nav_menu.classList.remove('active')
    bg_black.classList.remove('active')
})








// HOW WORK - Accordion
const how_parent_items = document.querySelectorAll('.parent')
const how_child_items = document.querySelectorAll('.child')

const how_parent_images = document.querySelectorAll('.parent-img')
const how_child_images = document.querySelectorAll('.child-img')


// parent side
how_parent_items.forEach((item) => {
    item.addEventListener('click', e => {
        item.classList.add('active')

        how_parent_items.forEach((el) => {
            if (el !== item) {
                el.classList.remove('active')
            }
        })

        const img_id = e.target.id + "-img"
        const img = document.getElementById(img_id)

        how_parent_images.forEach((el) => {
            if (el !== img) {
                el.classList.remove('active')
            } else {
                img.classList.add("active")
            }
        })
    })
});

// child side
how_child_items.forEach((item) => {
    item.addEventListener('click', (e) => {

        how_child_items.forEach((el) => {
            el.classList.remove('active');
        });
        item.classList.add('active');

        const img_id = e.target.id + "-img"
        const img = document.getElementById(img_id)

        how_child_images.forEach((el) => {
            console.log(el, img)
            if (el !== img) {
                el.classList.remove('active')
            } else {
                img.classList.add("active")
            }
        })
    })
});