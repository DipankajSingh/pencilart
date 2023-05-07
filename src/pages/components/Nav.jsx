import Image from 'next/image'
import React, { useState } from 'react'

export default function Nav() {

    const [menuHidden, setMenuHidden] = useState(true)
    const [searchHidden, setSearchHidden] = useState(false)

    return (
        <nav className='
        fixed
        w-screen
        top-0
        border-b
        sm:border-none
        py-2
        flex
        sm:flex-row-reverse
        justify-between
        z-[100]
        isolate
        backdrop-blur-sm
        h-[4rem]
        '>
            <div className='
            '>{/*nav menus*/}

                {/* hamburger starts */}
                <button className='
                ml-4
                relative
                inline-block
                sm:hidden
                cursor-pointer
                top-2
                w-[1.5rem]
                h-[1rem]
                z-[51]
                
            '
                    onClick={() => {
                        setMenuHidden(!menuHidden)
                        setSearchHidden(!!menuHidden)
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                </button>
                <ul className={
                    `
                    absolute
                    sm:relative
                    text-[2rem]
                    sm:text-[1rem]
                    flex
                    sm:flex
                    justify-center
                    sm:justify-normal
                    items-center
                    sm:items-start
                    flex-col
                    sm:flex-row
                    bg-backgroundPrimary
                    sm:bg-[#f0f8ff00]
                    h-screen
                    w-screen
                    top-0
                    sm:top-3
                    z-[50]
                    sm:h-max
                    sm:w-max
                    ${menuHidden ? "hidden" : "block"}
                    sm:block
                    [&>li]:cursor-pointer
                    gap-4
                    sm:mr-4
                    menuAfter
                    font-bold
                    `
                }>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Artists</li>
                    <li>Contact Us</li>
                    <li>Blog</li>
                    <li>FAQ</li>
                    <li>My Account</li>
                </ul>
            </div>

            <h1 className='
                text-[2rem]
                flex
                text-center
                sm:ml-4
                
                font-pencil
            '>
                <span className='grid place-items-center z-[2] h-full text-center'>
                    <svg
                        className='
                    fill-secondaryAccent
                    scale-x-[-1]
                    '
                        height={25} width={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >
                        <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
                    </svg>
                </span>
                encilArt
            </h1> {/*App heading*/}

            <div className='
            flex
            flex-row-reverse
            mr-3
            sm:absolute
            sm:hidden
            '>{/*seachField*/}
                <button onClick={() => setSearchHidden(!searchHidden)} className='
                mb-1
                '><Image height={30} width={30} src={"/Icons/search.svg"} /></button>
                <input placeholder='Look For The Best!' className={`
                 absolute
                ${searchHidden ? "scale-100 right-1/2" : "scale-0 right-1/4"}
                transition-all
                origin-right
                 border
                 z-[52]
                 translate-x-1/2
                 h-9
                 w-[16rem]
                 mt-1
                 my-0
                 rounded-md
                 focus-within:outline-secondaryAccent
                 p-2
                 text-center
                `} type="text" />
            </div>
        </nav>
    )
}
