import Image from 'next/image'
import React from 'react'

const imageAndDetail = [
    {
        pic: 'pic2.jpg',
        title: 'Pencil scketch of an angel by a telented'
    },
    {
        pic: 'pic3.jpg',
        title: 'Mind of a boy painting'
    },
    {
        pic: 'pic2.jpg',
        title: 'that angel again'
    }
]

function TopPicks() {
    return (<>
        <h2 className='
        text-[2rem]
        font-semibold
        ml-11
        my-4
        '>Today's Top Picks <br />
        </h2>
        <div className='
        topPicksHolder
        px-7
        relative
        flex
        flex-wrap
        justify-center
        gap-6
        '>
            {imageAndDetail.map((prop) => {
                return <div key={prop.pic} className='
                productCard
                relative
                flex
                flex-col
                rounded-md
                overflow-hidden
                '>
                    <div className=' transition-[scale] origin-center productCard__image relative h-4/5'>
                        <Image fill={true}
                            src={`/images/${prop.pic}`} />
                    </div>
                    <div className='
                    productCard__summary
                    p-4
                    '>
                        <div className='flex justify-between mb-3'>
                            <h3 className='text-lg font-bold
                            break-words capitalize'>{prop.title}</h3>
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
                            <button title='Looks good? click to buy now!' role='button' className='
                            button-77
                            ' >view</button>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </>)
}

export default TopPicks
