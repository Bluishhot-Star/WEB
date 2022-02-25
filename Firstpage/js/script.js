// back-to-top 버튼
const backToTop = document.getElementById("backtotop");
const checkScroll = () => {
    let scrollY = window.pageYOffset; //현재 scroll의 Y좌표 반환

    if (scrollY !== 0) {
        backToTop.classList.add('show')
    }
    else {
        backToTop.classList.remove('show')
    }
}
const moveBackToTop = () => {
    backToTop.classList.remove('up')
    if (window.pageYOffset > 0) {
        window.scrollTo({top: 0, behavior: "smooth"}) //스크롤할 위치로 이동, smooth로 부드럽게

        let scrollY = window.pageYOffset; 

        if (scrollY !== 0) {
            backToTop.classList.add('up')
        }
    }
}

addEventListener('scroll',checkScroll);
backToTop.addEventListener('click',moveBackToTop)

// 카드 슬라이스
const slidePrevList = document.getElementsByClassName('slide-prev')

const transformPrev = () => {

}
for (let i = 0; i<slidePrevList.length; i++) {
    //ul 태그를 선택하기!
    let cardList = slidePrevList[i].parentElement.parentElement.nextElementSibling
        //vanilla js의 아쉬운 부분.. 너무 김!
    let liList = cardList.getElementsByTagName('li')

    // 카드가 ul 태그의 너비보다 크면(넘어가면) 
    // 왼쪽 버튼 활성화 오른쪽 버튼은 첫 위치이므로 비활성화
    if (cardList.clientWidth < (liList.length * 260)) {
        slidePrevList[i].classList.add('slide-prev-hover')
        slidePrevList[i].addEventListener('click', transformPrev)
    }else {
    //     // 넘치지 않으면 왼쪽 오른쪽 버튼 없애기
    //     // 태그 삭제시, 부모 요소에 removeChild 를 통해서 삭제할 수 있다.
    //     // 즉, 1. 부모 요소를 찾고 2. 자식요소를 삭제한다.
        slidePrevList[i].classList.add('slide-prev-hidden')
    }
    
}
// 오류 해결!!
const hiddenSlidePrevList = document.getElementsByClassName('slide-prev-hidden')
for (let i = hiddenSlidePrevList.length; i > 0 ; i--) {
    const arrowContainer = hiddenSlidePrevList[i-1].parentElement
    arrowContainer.removeChild(hiddenSlidePrevList[i-1].nextElementSibling)
    arrowContainer.removeChild(hiddenSlidePrevList[i-1])
    
}
