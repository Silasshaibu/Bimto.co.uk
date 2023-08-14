//Header interface on default state
//Header interface on user Logged In state
//change the default text from log in to profile

const searchField = document.querySelector('.miniSearchField');
const searchIcon = document.querySelector('.searchIcon');
const body = document.querySelector('body');

searchIcon.addEventListener('click',(event)=>{
    searchField.classList.add('active');
    event.stopPropagation();
})

document.addEventListener('click', (event)=>{
    if(searchField.contains(event.target)){
    }else{
        searchField.classList.remove('active');
    }
});


//add this class to every
const slideImgs = document.querySelectorAll('.slide li');
slideImgs.forEach(item=>{
    const carretArrowBox = document.createElement('div');
    carretArrowBox.classList.add('rightCaretArrow--forMobileMenu');
    item.appendChild(carretArrowBox);
})

//if mobile menu card has last child

const mobileMenuSection = document.querySelector('.mobileMenuSection');
if (mobileMenuSection.hasChildNodes){
    let lastSlide = mobileMenuSection.childElementCount - 1;
    const lastSlideCard = mobileMenuSection.children[lastSlide];
    //if the last slid card exists, then find the rightCarteArrow inside it and hide them using the css selector.
    if (lastSlideCard){
        let caretSections = lastSlideCard.querySelectorAll('.rightCaretArrow--forMobileMenu');
        caretSections.forEach(caretSection=>{
            caretSection.style.display = 'none';
        })
    }
}






// const headerSwitchs = document.querySelectorAll('.header-switch');
// //if any of this toggle option is active, then the other should be deactivated
// function toggleLang(){
//     headerSwitchs.forEach((item)=>{
//         const caretDownArrow = item.querySelector('svg');
//         const dropDownMenu = item.querySelector('.nested-li');
//         caretDownArrow.classList.toggle('active');
//         console.log(dropDownMenu);
//         dropDownMenu.classList.toggle('active');
//     })
// }
// const dropDownMenu = document.querySelector('.nested-li');

