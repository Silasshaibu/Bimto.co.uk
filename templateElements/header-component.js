class HeaderComponent extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`

        <div class="bannerAdvertSection">
        <p> What goes with pink? More pink. <a href="./shop.html"><strong><span class="goToShop">Shop now</span> </strong></a> for the color of the summer.</p>
    </div>
    <header class="mainHeader">
       <div class="head layer1">
            <div>
                <ul onclick="toggleLanguageSwitcher()" class="header-switch langSwitcher">EN
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icons--default--state caret">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                        <div class="nested-li">
                            <li>ESP</li>
                            <li>TR</li>
                            <li>EN</li>
                        </div>
                    </ul>

                <ul onclick="toggleCurrencySwitcher()" class="header-switch currencySwitcher">USD
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icons--default--state caret">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                        <div class="nested-li">
                            <li>YEN</li>
                            <li>LR</li>
                        </div>
                    </ul>
            </div>

            <div class="right">
                <p><img src="./Assets/Images/userProfile-icon.svg" alt="userProfile-icon"/><span class="userStatus"></span>
                &emsp14; Log In | Sign Up</p>
                <p><img src="./Assets/Images/bag_cart-icon.svg" alt="userProfile-icon"/> &emsp14;<span class="numOfItems">  0</span> &emsp14; Items</p>
                <p><span class="currencyState">$</span> &emsp14; 0.00</p>
                <p><img class="searchIcon" src="./Assets/Images/search-icon.svg" alt="search-icon"/></p>

                <div class="miniSearchField">
                    <form action="/search" method="GET">
                            <input type="text" name="query" placeholder="Search..">
                            <button type="submit">Search</button>
                    </form>
                </div>

            </div>
        </div>
        <div class="head layer2">
            <img src="./Assets/Images/bimto-logo-web.png" alt="BIMTO" width="100px" height="fit-content"/>
        </div>
        <div class="head layer3">
            <nav>
                <ul>
                    <li><a class="active" href="#">HOME</a></li>
                    <li><a href="#">GADGET</a></li>
                    <li><a href="#">KITCHEN</a></li>
                    <li><a href="#">AROUND THE HOME</a></li>
                    <li><a href="#">LIFEHACKS</a></li>
                    <li><a href="#">LIVING ROOM</a></li>
                </ul>
            </nav>
        </div>
    </header>

        `;
    }
}

customElements.define('header-component', HeaderComponent);






