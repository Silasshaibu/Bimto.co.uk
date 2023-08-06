class FooterComponent extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`


    <footer class="foot layer1">
    <div>
        <img src="./Assets/Images/bimto-logo-web.png" width="100px" alt="Bimto">
        <p>We have made it our mission to share the work of entrepreneurial, creative makers and artists with those who love things that are unique, functional and inspiring.</p>

        <p>So often when trying to buy something unique, the market is flooded with things which look the same. This is our opportunity to give you gifts, solutions and ideas you hadn't even thought of.</p>

        <p>Enjoy the experience of shopping in a different way and buying something unique and personal, a brilliant idea made to order.</p>
    </div>

    <div>
        <h4>Follow us</h4>
        <p>Follow us on our social platform</p>
        <p><a href="#"><img class="socials-iconSvg" src="./Assets/svgs/Fb_logo.svg" alt="Facebook" width="50px" height="50px"></a>
            <a href="#"><img class="socials-iconSvg" src="./Assets/svgs/Ig_logo.svg" alt="Instagram" width="50px" height="50px"></a></p>
    </div>

    <div>
        <h4>Contact Us</h4>
        <p>In the first instance please contact the seller via the website for any order related queries.</p>

        <p>For anything else you can send us an email at hello@bimto.co.uk and we will get back to you. We aim to respond to all emails within 24 - 48 hours.</p>
    </div>
</footer>
<hr class="horizontalLineStyle"/>
<footer class="foot layer2">
    <div>
        <nav>
            <li><a href="information.html">Information</a></li>
            <li><a href="delivery.html">Delivery</a></li>
            <li><a href="services.html">Services</a></li>
        </nav>
    </div>
    <div>
        <nav>
            <li><a href="about-us.html">About Us</a></li>
            <li><a href="privacy.html">Privacy Policy</a></li>
            <li><a href="terms-conditions.html">Terms Conditions</a></li>
        </nav>
    </div>
    <div>
        <h4>Contact Details</h4>
        <p>Full name of legal entity: BIMTO Ltd, a limited company with registered number 13643468. BIMTO Ltd is registered, and operates, in the United Kingdom.</p>
        <p>Postal address: BIMTO Ltd, 56 Hambledon Road, Bournemouth BH7 6PQ</p>
        <p>Our Data Protection Officer is Rebecca Boston</p>
        <p>Email address: hello@bimto.co.uk</p>
    </div>
</footer>
<footer class="foot layer3">
<p>&copy; 2023 www.bimto.co.uk</p>
<p><img src="./Assets/Images/Brands.png" alt="paymentSupport"></p>
</footer>

        `;
    }
}

customElements.define('footer-component', FooterComponent);






