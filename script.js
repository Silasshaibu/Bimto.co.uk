//Header interface on default state
//Header interface on user Logged In state
//change the default text from log in to profile

const headerSwitchs = document.querySelectorAll('.header-switch');

//if any of this toggle option is active, then the other should be deactivated
function toggleLang(){
    for (i = 0; i < headerSwitchs.length; i++) {
        const item = headerSwitchs[i];
        const dropDownMenu = item.querySelector('.nested-li');
        console.log(item);

        // if (item !== otherSelecteditems) {
        //     console.log(item);
        // }
    }

}


