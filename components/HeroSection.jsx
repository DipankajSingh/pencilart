import Image from 'next/image'
import React from 'react'

function HeroSection() {
    return (
        <main className={`
        relative
        w-screen
        mainHero
        mt-[5rem]
        px-10
        h-max
        `}>
            <div className='relative inline-block bg-heroColor heroImage'>
                <Image height={300} width={400} src={'/Icons/heroImage.png'} />
            </div>
            <h2 className='
                heroTitle
                md:text-center
                font-hero
                '>Where <span className='
                textToAnimate
                after:bg-secondaryAccent
                '>Art</span> comes to <span className='
                textToAnimate
                after:bg-secondaryAccent
                delay-2
                '>life!</span></h2>
            <p className='heroParagraph mt-3'>"Discover and buy unique artwork from talented artists, and sell your sketches to a global community of art lovers. PencilArt is the perfect platform to showcase your creativity and explore new artistic styles."</p>
            <div className='
            flex
            justify-center
            '>
                <button className='buttonHero  '>Buy Now</button>
                <button className='
                text-[1.5rem]
                text-center
                mt-3
                hover:text-secondaryAccent
'>Sell Now</button>
            </div>


        </main>
    )
}

export default HeroSection
