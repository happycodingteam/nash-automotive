const menu = document.querySelector('.menu');
const menuSection = menu.querySelector('.menu-section');
const menuArrow = menu.querySelector('.menu-mobile-arrow');
const menuClosed = menu.querySelector('.menu-mobile-close');
const menuTrigger = document.querySelector('.menu-mobile-trigger');
const menuOverlay = document.querySelector('.overlay');
let subMenu;
menuSection.addEventListener('click', (e) => {
    if (!menu.classList.contains('active')) {
        return;
    }
    if (e.target.closest('.menu-item-has-children')) {
        const hasChildren = e.target.closest('.menu-item-has-children');
        showSubMenu(hasChildren);
    }
});
menuArrow.addEventListener('click', () => {
    hideSubMenu();
});
menuTrigger.addEventListener('click', () => {
    toggleMenu();
});
menuClosed.addEventListener('click', () => {
    toggleMenu();
});
menuOverlay.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    menu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
}

function showSubMenu(hasChildren) {
    subMenu = hasChildren.querySelector('.menu-subs');
    subMenu.classList.add('active');
    subMenu.style.animation = 'slideLeft 0.5s ease forwards';
    const menuTitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
    menu.querySelector('.menu-mobile-title').innerHTML = menuTitle;
    menu.querySelector('.menu-mobile-header').classList.add('active');
}

function hideSubMenu() {
    subMenu.style.animation = 'slideRight 0.5s ease forwards';
    setTimeout(() => {
        subMenu.classList.remove('active');
    }, 300);
    menu.querySelector('.menu-mobile-title').innerHTML = '';
    menu.querySelector('.menu-mobile-header').classList.remove('active');
}
window.onresize = function () {
    if (this.innerWidth > 991) {
        if (menu.classList.contains('active')) {
            toggleMenu();
        }
    }
};
$(document).ready(function () {
    $("#van").click(function () {
        $("#van-section").show();
        $("#car-section").hide();
    });
    $("#car").click(function () {
        $("#car-section").show();
        $("#van-section").hide();
    });
    $(".p-btn").click(function () {
        $(".p-btn").addClass("active-p-btn");
        $(".p-btn").removeClass("active-p-btn");
        $(this).addClass("active-p-btn");
    });
    $(".van-p-btn").click(function () {
        $(".van-p-btn").addClass("active-p-btn");
        $(".van-p-btn").removeClass("active-p-btn");
        $(this).addClass("active-p-btn");
    });
    $(".filter-item-text").click(function () {
        $(".filter-item-text").addClass("active-color");
        $(".filter-item-text").removeClass("active-color");
        $(this).addClass("active-color");
    });
    $("#car-personal-btn").click(function () {
        $("#car-personal-show").show();
        $("#car-business-show").hide();
    });
    $("#car-business-btn").click(function () {
        $("#car-business-show").show();
        $("#car-personal-show").hide();
    });
    $("#van-personal-btn").click(function () {
        $("#personal-van-show").show();
        $("#business-van-show").hide();
    });
    $("#van-business-btn").click(function () {
        $("#business-van-show").show();
        $("#personal-van-show").hide();
    });
});
