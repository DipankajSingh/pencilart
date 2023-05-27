import Image from 'next/image';
import React from 'react';
import Yt from './Yt'
import Insta from './Insta';
import Twitter from './Twitter';
function Footer() {
    const socialIconSize = 28


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
                mb-1
                '>At PencilArt, we're passionate about connecting artists and art lovers.</p>
                <span className='flex gap-10 justify-center [&>a]:outline-none '>
                    <a className='
                    hover:text-[#ff0cb6]
                    focus:text-[#ff0cb6]
                    active:text-[#ff0cb6]
                    ' href="#"><Insta size={socialIconSize} /></a>
                    <a className='
                    hover:text-[#16dadd]
                    focus:text-[#16dadd]
                    active:text-[#16dadd]
                    ' href="#"><Twitter size={socialIconSize} /></a>
                    <a className='
                    hover:text-[#ff1a1a]
                    focus:text-[#ff1a1a]
                    active:text-[#ff1a1a]
                    ' href="#"><Yt size={socialIconSize} /></a>
                </span>

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

                            [&:not(:placeholder-shown)+h2]:text-[white]
                            [&:not(:placeholder-shown)+h2]:p-[unset]
                            [&:not(:placeholder-shown)+h2]:h-max
                            [&:not(:placeholder-shown)+h2]:w-max
                            [&:not(:placeholder-shown)+h2]:px-3
                            [&:not(:placeholder-shown)+h2]:left-3
                            [&:not(:placeholder-shown)+h2]:top-[-1.5rem]

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
                gap-10
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
