//Header interface on default state
//Header interface on user Logged In state
//change the default text from log in to profile


//Replace the menuitem on the top with the product categories in the const area js
//put this list item in an array
//map each list to the category products

//filter each in top category section

//create a function such that on
//click on any of the function show
//the drop down menu and active the state of the current li
//



let dropdown = document.querySelector('.dropDown');
function activateCurrentMenu(){
    let NavMenuBar = document.querySelector('.header-unorderedList');


    for (i=0; i<NavMenuBar.children.length; i++){
    NavMenuBar.children[i].classList.remove('active');
    }

    NavMenuBar.addEventListener('click', (e)=>{
        e.stopPropagation();
        if(e.target){
            e.target.classList.add('active');
            dropdown.classList.add('active');
        }
    })

    document.addEventListener('click', (event)=>{

        if(dropdown.contains(event.target)){
        }else{
            dropdown.classList.remove('active');
            for (i=0; i<NavMenuBar.children.length; i++){
                NavMenuBar.children[i].classList.remove('active');
                }
        }
    });
}







//SearchIcon on desktop and tablet header  section functionality
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

//Language and Currency switcher functionality
let currencySwitcher = document.querySelector('.currencySwitcher');
let langSwitcher = document.querySelector('.langSwitcher');
let headerSwitchers = document.querySelectorAll('.header-switch');

    function toggleLanguageSwitcher(){
        langSwitcher = document.querySelector('.langSwitcher')
        dropDown = langSwitcher.querySelector('div');
        let svg = langSwitcher.querySelector('svg');
        svg.classList.add('active');
        dropDown.classList.add('active');
        if((currencySwitcher.children[1]).classList.contains('active')){
            currencySwitcher.children[1].classList.remove('active');
            currencySwitcher.children[0].classList.remove('active');
        };
        if(dropDown.classList.contains('active')){
            dropDown.addEventListener('click', (event)=>{
                let selectedLang = event.target.textContent;
                const textContentLanguage = langSwitcher.querySelector('ul');
                console.log(langSwitcher.childNodes[0].textContent);
                console.log(textContentLanguage.parentNode);
                // let currentLang = langSwitcher.childNodes[0].textContent;
                // currentLang = selectedLang;
                // let currentLange = langSwitcher;
                // currentLang.textContent = 'help';

            })
        }
    }

    function toggleCurrencySwitcher(){
        currencySwitcher = document.querySelector('.currencySwitcher')
        dropDown = currencySwitcher.querySelector('div');
        let svg = currencySwitcher.querySelector('svg');
        svg.classList.add('active');
        dropDown.classList.add('active');
        if((langSwitcher.children[1]).classList.contains('active')){
            langSwitcher.children[1].classList.remove('active');
            langSwitcher.children[0].classList.remove('active');
        };
    }

    document.addEventListener('click', (event)=>{
        if((langSwitcher).contains(event.target)){
        }else{
            langSwitcher.children[1].classList.remove('active');
            langSwitcher.children[0].classList.remove('active');
        }

        if((currencySwitcher).contains(event.target)){
        }else{
           currencySwitcher.children[1].classList.remove('active');
           currencySwitcher.children[0].classList.remove('active');
        }
    })

//end of switchers functionality

//add this caret right arrow to every li in mobile menu
const slideImgs = document.querySelectorAll('.slide li');
slideImgs.forEach(item=>{
    const carretArrowBox = document.createElement('div');
    carretArrowBox.classList.add('rightCaretArrow--forMobileMenu');
    item.appendChild(carretArrowBox);
})


//if mobile menu card has last child, remove caret arrow from the last child card
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

