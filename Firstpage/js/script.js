// back-to-top 버튼
const backToTop = document.getElementById("backtotop");
const checkScroll = () => {
    let scrollY = window.pageYOffset; //현재 scroll의 Y좌표 반환

    if (scrollY !== 0) {
        backToTop.classList.add('show')
    } else {
        backToTop.classList.remove('show')
    }
}
const moveBackToTop = () => {
    backToTop.classList.remove('up')
    if (window.pageYOffset > 0) {
        window.scrollTo({ top: 0, behavior: "smooth" }) //스크롤할 위치로 이동, smooth로 부드럽게

        let scrollY = window.pageYOffset;

        if (scrollY !== 0) {
            backToTop.classList.add('up')
        }
    }
}

addEventListener('scroll', checkScroll);
backToTop.addEventListener('click', moveBackToTop)
/* ***************************************************************** */
// 카드 슬라이스
const slidePrevList = document.getElementsByClassName('slide-prev')

// 카드 왼쪽으로 넘기기
const transformPrev = (event) => { 
    //태그 가져오기
    const slidePrev = event.target // event가 발생한 요소 가져오기
    const slideNext = slidePrev.nextElementSibling //HTML 다음 요소 선택

    const cardList = slidePrev.parentElement.parentElement.nextElementSibling
    let activeLi = cardList.getAttribute("data-position")
    const liList = cardList.getElementsByTagName("li")

    if (cardList.clientWidth < (liList.length * 220 + Number(activeLi))) {
        activeLi = Number(activeLi) - 220

        if (cardList.clientWidth > (liList.length * 220 + Number(activeLi))) { // 처리 후 카드가 다 넘어왔다면?
            slidePrev.style.color = '#708090' // 
            slidePrev.classList.remove('slide-prev-hover')
            slidePrev.removeEventListener('click', transformPrev)
        }


        slideNext.style.color = '#191970'
        slideNext.classList.add('slide-next-hover')
        slideNext.addEventListener('click', transformNext);
    }
    cardList.style.transition = "transform 1s"
    cardList.style.transform = 'translateX(' + String(activeLi) + 'px)'
    cardList.setAttribute('data-position', activeLi)
}
// 카드 오른쪽으로 넘기기
const transformNext = (event) => { 
    const slideNext = event.target // event가 발생한 요소 가져오기
    const slidePrev = slideNext.previousElementSibling //HTML 다음 요소 선택

    const cardList = slideNext.parentElement.parentElement.nextElementSibling
    let activeLi = cardList.getAttribute('data-position')
    const liList = cardList.getElementsByTagName('li')

    if (Number(activeLi) < 0) {
        activeLi = Number(activeLi) + 220

        slidePrev.style.color = '#191970'
        slidePrev.classList.add('slide-prev-hover')
        slidePrev.addEventListener('click', transformPrev)
    }
    cardList.style.transition = "transform 1s"
    cardList.style.transform = 'translateX(' + String(activeLi) + 'px)'
    cardList.setAttribute('data-position', activeLi)
}


for (let i = 0; i < slidePrevList.length; i++) {
    //ul 태그를 선택하기!
    let cardList = slidePrevList[i].parentElement.parentElement.nextElementSibling
        //vanilla js의 아쉬운 부분.. 너무 김!
    let liList = cardList.getElementsByTagName('li')

    // 카드가 ul 태그의 너비보다 크면(넘어가면) 
    // 왼쪽 버튼 활성화 오른쪽 버튼은 첫 위치이므로 비활성화

    if (window.clientWidth > 916) { //너비가 916px보다 클 때
        if (cardList.clientWidth < (liList.length * 220)) {
            slidePrevList[i].classList.add('slide-prev-hover')
            slidePrevList[i].addEventListener('click', transformPrev)
        } else {
            slidePrevList[i].classList.add('slide-prev-hidden')
                // 넘치지 않으면 왼쪽 오른쪽 버튼 없애기
                // 태그 삭제시, 부모 요소에 removeChild 를 통해서 삭제할 수 있다.
                // 즉, 1. 부모 요소를 찾고 2. 자식요소를 삭제한다.
        }
    }
    // 현재 이 부분은 서버에 계속해서 업데이트하지 못해서 의미 없음
    else { //너비가 916px보다 작을 때
        if (cardList.clientWidth < (liList.length * 220)) {
            slidePrevList[i].classList.add('slide-prev-hover')
            slidePrevList[i].addEventListener('click', transformPrev)
        } else {

            slidePrevList[i].classList.add('slide-prev-hidden')
        }
    }

}
// 오류 해결!! (인덱스를 위 for문에서 제거해버리면 인덱싱 오류생김)
const hiddenSlidePrevList = document.getElementsByClassName('slide-prev-hidden')
for (let i = hiddenSlidePrevList.length; i > 0; i--) {
    const arrowContainer = hiddenSlidePrevList[i - 1].parentElement
    arrowContainer.removeChild(hiddenSlidePrevList[i - 1].nextElementSibling)
    arrowContainer.removeChild(hiddenSlidePrevList[i - 1])

}
