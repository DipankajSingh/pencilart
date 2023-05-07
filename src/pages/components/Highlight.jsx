import Image from 'next/image'
import React from 'react'

export default function Highlight() {
    return (
        <section className='
            h-max
            w-screen
            highlight
            [&>div>div>h4]:font-extrabold
            [&>div>div>h4]:text-[1.2rem]
            [&>div>div>h4]:capitalize
            [&>div>div>p]:font-semibold
            [&>div>div>p]:text-[#4d4b4b]
            [&>div>div>svg>path]:fill-secondaryAccent
        '>
            <div>
                <div className='high1'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M498 339.7c9.1-26.2 14-54.4 14-83.7C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512c35.4 0 69.1-7.2 99.7-20.2c-4.8-5.5-8.5-12.2-10.4-19.7l-22.9-89.3c-10-39 11.8-80.9 51.8-92.1c37.2-10.4 73.8 10.1 87.5 44c12.7-1.6 25.1 .4 36.2 5zM296 332c0 6.9-3.1 13.2-7.3 18.3c-4.3 5.2-10.1 9.7-16.7 13.4c-2.7 1.5-5.7 3-8.7 4.3c3.1 1.3 6 2.7 8.7 4.3c6.6 3.7 12.5 8.2 16.7 13.4c4.3 5.1 7.3 11.4 7.3 18.3s-3.1 13.2-7.3 18.3c-4.3 5.2-10.1 9.7-16.7 13.4C258.7 443.1 241.4 448 224 448c-3.6 0-6.8-2.5-7.7-6s.6-7.2 3.8-9l0 0 0 0 0 0 0 0 .2-.1c.2-.1 .5-.3 .9-.5c.8-.5 2-1.2 3.4-2.1c2.8-1.9 6.5-4.5 10.2-7.6c3.7-3.1 7.2-6.6 9.6-10.1c2.5-3.5 3.5-6.4 3.5-8.6s-1-5-3.5-8.6c-2.5-3.5-5.9-6.9-9.6-10.1c-3.7-3.1-7.4-5.7-10.2-7.6c-1.4-.9-2.6-1.6-3.4-2.1l-.6-.4-.3-.2-.2-.1 0 0 0 0 0 0c-2.5-1.4-4.1-4.1-4.1-7s1.6-5.6 4.1-7l0 0 0 0 0 0 0 0 0 0 .2-.1c.2-.1 .5-.3 .9-.5c.8-.5 2-1.2 3.4-2.1c2.8-1.9 6.5-4.5 10.2-7.6c3.7-3.1 7.2-6.6 9.6-10.1c2.5-3.5 3.5-6.4 3.5-8.6s-1-5-3.5-8.6c-2.5-3.5-5.9-6.9-9.6-10.1c-3.7-3.1-7.4-5.7-10.2-7.6c-1.4-.9-2.6-1.6-3.4-2.1c-.4-.2-.7-.4-.9-.5l-.2-.1 0 0 0 0 0 0c-3.2-1.8-4.7-5.5-3.8-9s4.1-6 7.7-6c17.4 0 34.7 4.9 47.9 12.3c6.6 3.7 12.5 8.2 16.7 13.4c4.3 5.1 7.3 11.4 7.3 18.3zM176.4 176a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm194.8 57.6c-17.6-23.5-52.8-23.5-70.4 0c-5.3 7.1-15.3 8.5-22.4 3.2s-8.5-15.3-3.2-22.4c30.4-40.5 91.2-40.5 121.6 0c5.3 7.1 3.9 17.1-3.2 22.4s-17.1 3.9-22.4-3.2zM434 352.3c-6-23.2-28.8-37-51.1-30.8s-35.4 30.1-29.5 53.4l22.9 89.3c2.2 8.7 11.2 13.9 19.8 11.4l84.9-23.8c22.2-6.2 35.4-30.1 29.5-53.4s-28.8-37-51.1-30.8l-20.2 5.6-5.4-21z" /></svg>
                </div>
                <div>
                    <h4>High quality art-work</h4>
                    <p>"At PencilArt, we are committed to providing our customers with the highest quality artwork from talented artists around the world. Browse our collection to discover unique, one-of-a-kind pieces that will elevate any space."</p>
                </div>
            </div>
            <div>
                <div className='high2'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z" /></svg>
                </div>
                <div>
                    <h4>secure transaction</h4>
                    <p>"Buy and sell artwork on PencilArt with confidence, knowing that our secure transactions protect your payment information and personal data."</p>
                </div>
            </div>

            <div className='
            high4parent
            ' >
                <div className='high4'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 80v48c0 17.7 14.3 32 32 32H48 96V80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48V384c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96H112zM464 480c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7V384c0 53-43 96-96 96H368h96z" /></svg>
                </div>
                <div>
                    <h4>Request  a skech</h4>
                    <p>"At PencilArt, we believe that every art piece should be as unique as the person who owns it. That's why we offer the ability to request custom sketches from our talented artists. From personalized portraits to bespoke illustrations, our artists can create a one-of-a-kind piece that perfectly captures your vision."</p>
                    <button className='
                    px-4
                    py-3
                    bg-secondaryAccent
                    text-[white]
                    font-[700]
                    mt-4
                    '>Make Request</button>
                </div>
            </div>
        </section>
    )
}
