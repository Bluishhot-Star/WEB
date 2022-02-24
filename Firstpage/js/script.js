function checkScroll() {
    let scrollY = window.pageYOffset; //현재 scroll의 Y좌표 반환

    if (scrollY !== 0) {
        backToTop.classList.add('show')
    }
    else {
        backToTop.classList.remove('show')
    }
}
function moveBackToTop() {
    backToTop.classList.remove('up')
    if (window.pageYOffset > 0) {
        window.scrollTo({top: 0, behavior: "smooth"}) //스크롤할 위치로 이동, smooth로 부드럽게

        let scrollY = window.pageYOffset; 

        if (scrollY !== 0) {
            backToTop.classList.add('up')
        }
    }
}

const backToTop = document.getElementById("backtotop");
addEventListener('scroll',checkScroll);
backToTop.addEventListener('click',moveBackToTop)