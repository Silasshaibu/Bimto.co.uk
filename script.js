//Header interface on default state
//Header interface on user Logged In state
//change the default text from log in to profile


const headerSwitchs = document.querySelectorAll('.header-switch');


//if any of this toggle option is active, then the other should be deactivated
function toggleLang(){
    headerSwitchs.forEach((item)=>{
        const caretDownArrow = item.querySelector('svg');
        const dropDownMenu = item.querySelector('.nested-li');
        caretDownArrow.classList.toggle('active');
        console.log(dropDownMenu);
        dropDownMenu.classList.toggle('active');
    })
}

const body = document.querySelector('body');
const dropDownMenu = document.querySelector('.nested-li');

    // body.addEventListener('click', ()=>{
    //     dropDownMenu.style.display ="none";
    //     console.log('body is clicked');
    // })




//on click on EN enable the active class of it that is toggle the svg.



