import Image from 'next/image'
import React from 'react'

function TopPicks() {
    return (<>
        <h2 className='
        text-[2rem]
        font-semibold
        ml-11
        my-4
        '>Today's Top Picks</h2>
        <div className='
        topPicksHolder
        relative
        flex
        flex-wrap
        justify-center
        gap-6
        '>
            {[1, 2, 3].map((key) => {
                return <div key={key} className='
                productCard
                relative
                flex
                flex-col
                '>
                    <div className='productCard__image relative h-4/5'>
                        <Image fill={true}
                            src={'/images/pic2.jpg'} />
                    </div>
                    <div className='
                    productCard__summary
                    p-4
                    bg-[#2e312c]
                    '>
                        <div className='flex justify-between mb-3'>
                            <h3 className='text-lg font-bold capitalize'>A princess</h3>
                            {/* have to fix this */}
                            <button title='Add To Cart' className='
                            mr-7
                            h-7
                            w-7
                            '>
                                <svg style={{ color: "wheat" }} xmlns={"http://www.w3.org/2000/svg"} width={"26"} height={"26"} fill={"red"} viewBox={"0 0 16 16"}> <path className='
                                hover:fill-secondaryAccent
                                ' d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" fill={'red'}></path> </svg>

                            </button>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-3xl font-extrabold'>$ 999 </span>
                            <button title='Looks good? click to buy now!' className='
                            bg-secondaryAccent
                            transition-all
                            px-3
                            rounded-lg
                            font-extrabold
                            capitalize
                            text-2xl
                            font-[monospace]
                            hover:border-black
                            active:border-black
                            focus:border-black
                            border-[3px]
                            hover:outline
                            active:outline
                            focus:outline
                            ' >look</button>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </>)
}

export default TopPicks
