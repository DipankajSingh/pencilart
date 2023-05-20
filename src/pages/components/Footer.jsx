import Image from 'next/image';
import React from 'react';

function Footer() {
    return (
        <footer className='
        bg-black
        text-primaryAccent
        p-5
        pb-2
        '>
            <div >
                <p className='
                text-center
                text-lg
                mb-4
                '>At PencilArt, we're passionate about connecting artists and art lovers.</p>
                <div >
                    <form action="#" className='
                    flex
                    flex-wrap
                    text-black
                    justify-center
                    text-center
                    items-center
                    gap-3
                    h-max
                    p-4
'>
                        <div className='
                        relative
                        '>

                            <input className='
                            h-14
                            w-[20rem]
                            rounded-lg
                            pl-4
                            newsLetterEmail
                            [&:focus+h2]:text-[white]
                            [&:focus+h2]:p-[unset]
                            [&:focus+h2]:h-max
                            [&:focus+h2]:w-max
                            [&:focus+h2]:px-3
                            [&:focus+h2]:left-3
                            [&:focus+h2]:top-[-1.5rem]
                            focus:placeholder:text-[grey]
                            placeholder:text-[white]
                        outline-none
                            
                            '
                                required
                                type="email"
                                placeholder='Enter your Email'

                            />
                            <h2 className='
                        absolute
                        flex
                        justify-center
                        items-center
                        pointer-events-none
                        top-4
                        left-3
                        transition-all
                        
                        ' >Subscribe to Our Newsletter</h2>
                        </div>
                        <button className='
                        h-max
                        px-3
                        bg-secondaryAccent
                        py-3
                        rounded-lg
                        ' type="submit">Subscribe</button>
                    </form>
                </div>

                <div className='text-center
                flex
                justify-center
                gap-16
                flex-wrap
                mb-5
                '>
                    <div className='
                
                ' >
                        <span className='text-2xl font-bold'>Links</span>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/shop">Shop</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className='flex flex-col flex-wrap'>
                        <span className='text-2xl font-bold'>Payment methods</span>
                        <a href="#" target="_blank" rel="noopener noreferrer">UPI</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">Credit card</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">debit card</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">net banking</a>
                    </div>
                </div>
            </div>
            <div className='relative text-center'>
                <p>&copy; 2023 PencilArt - All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
