import React from 'react';

function Footer() {
    return (
        <footer>
            <div >
                <div >
                    <h2>About Us</h2>
                    <p>At PencilArt, we're passionate about connecting artists and art lovers.</p>
                </div>
                <div >
                    <h2>Links</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
                <div >
                    <h2>Subscribe to Our Newsletter</h2>
                    <form action="#">
                        <input type="email" placeholder="Enter your email address" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
                <div >
                    <h2>Accepted Payment Methods</h2>
                    <img src="https://www.paypalobjects.com/webstatic/mktg/logo-center/PP_Acceptance_Marks_for_LogoCenter_266x142.png" alt="PayPal" />
                    <img src="https://www.mastercard.us/content/dam/mccom/en-us/consumers/images/logos/mastercard_logo_small.png" alt="Mastercard" />
                    <img src="https://cdn.worldvectorlogo.com/logos/visa-3.svg" alt="Visa" />
                </div>
            </div>
            <div >
                <p>&copy; 2023 PencilArt - All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
