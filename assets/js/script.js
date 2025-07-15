let mobile_nav_open = document.getElementById('mobile_nav_open');
let mobile_nav_close = document.getElementById('mobile_nav_close');
let mobile_bar = document.getElementById('mobile-nav');
mobile_bar.classList.add('hidden');
function handleMobileBarClick(event) {
    let menu = event.target;
    // console.log(menu.tagName);

    if (menu.tagName == 'A' || 'SPAN') {
        mobile_bar.classList.add('hidden');
    }


}

mobile_nav_open.addEventListener('click', (e) => {
    mobile_bar.classList.remove('hidden');

    mobile_bar.addEventListener('click', handleMobileBarClick);

});

mobile_nav_close.addEventListener('click', (e) => {
    mobile_bar.classList.add('hidden');
    // Remove the event listener when the mobile nav closes
    mobile_bar.removeEventListener('click', handleMobileBarClick);
});





const initalTranslateLTR = -48 * 4;
const initalTranslateRTL = 36 * 4;
function setupintersection(element, isLTR, speed) {
    const intersection_Callback = (entities) => {
        const isItersectionString = entities[0].isIntersecting;
        // console.log(isItersectionString, element);
        if (isItersectionString) {
            document.addEventListener('scroll', scrollHandler);
        } else {
            document.removeEventListener('scroll', scrollHandler);
        }

    }
    const intersection_observer = new IntersectionObserver(intersection_Callback);
    intersection_observer.observe(element);

    function scrollHandler() {
        const tranlateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
        let total_translate = 0;
        if (isLTR) {
            total_translate = tranlateX + initalTranslateLTR;
        } else {
            total_translate = -(tranlateX + initalTranslateRTL);
        }
        element.style.transform = `translateX(${total_translate}px)`;
    }
}

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const line4 = document.getElementById('line_4');

setupintersection(line1, true, 0.12);
setupintersection(line2, false, 0.12);
setupintersection(line3, true, 0.12);
setupintersection(line4, true, 0.5);


let dtElement = document.querySelectorAll('dt');
dtElement.forEach(element => {
    element.addEventListener('click', (e) => {
        // console.log(e.target.ariaControlsElements[0].id);
        element.classList.add('ease-in-out');
        let dd = element.getAttribute('aria-controls');

        let ddElement = document.getElementById(dd);

        let dtarrow = element.querySelectorAll('i')[0];
        dtarrow.classList.add('transition');
        ddElement.classList.add('ease-in-out');
        ddElement.classList.toggle('hidden');
        dtarrow.classList.toggle('-rotate-180');
    })
})