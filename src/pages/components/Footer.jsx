import Image from 'next/image';
import React from 'react';

function Footer() {
    return (
        <footer className='
        bg-black
        text-primaryAccent
        p-5
        '>
            <div >
                <p className='
                text-center
                text-lg
                '>At PencilArt, we're passionate about connecting artists and art lovers.</p>
                <div >
                    <h2>Subscribe to Our Newsletter</h2>
                    <form action="#">
                        <input type="email" placeholder="Enter your email address" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>

                <div className='text-center
                bg-secondaryAccent'>
                    <div className='
                
                ' >
                        <h2>Links</h2>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/shop">Shop</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className='flex gap-2 flex-wrap'>
                        <a href="#" target="_blank" rel="noopener noreferrer">UPI</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">Credit card</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">debit card</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">net banking</a>
                    </div>
                </div>
            </div>
            <div className='relative bottom-0 text-center'>
                <p>&copy; 2023 PencilArt - All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
