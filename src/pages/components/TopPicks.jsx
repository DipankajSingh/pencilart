import Image from 'next/image'
import React from 'react'

const imageAndDetail = [
    {
        pic: 'pic2.jpg',
        title: 'Pencil scketch of an angel by a telented',
        painter: 'Ankit',
        price: 999
    },
    {
        pic: 'pic3.jpg',
        painter: 'Dipankaj',
        price: 779,
        title: 'Mind of a boy painting'
    },
    {
        pic: 'pic2.jpg',
        painter: 'Gannaa',
        price: 599,
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
                            <h3 className='text-md font-bold
                            max-w-[13rem]
                            break-words capitalize'>{prop.title}  <br /> <span className='
                            text-sm font-thin text-[grey]
                            '>Sketched with ❤️ by {prop.painter}</span></h3>

                            {/* have to fix this */}
                            <button title='Add To Cart' className='
                            mr-9
                            min-h-[2rem]
                            min-w-[2rem]
                            relative
                            '>
                                <Image fill src={'/Icons/cart.svg'} />

                            </button>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-3xl font-extrabold'><span className='font-normal' >₹</span> {prop.price} </span>
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
