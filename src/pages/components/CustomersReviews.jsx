import React from 'react'
import Image from 'next/image'
import ReviewStar from './ReviewStar'
import ReviewStarStroke from './ReviewStarStroke'
export default function CustomersReviews() {
    return (
        <div>
            <h2 className='
            text-[1.8rem]
            font-extrabold
            w-max
            bg
            text-center
            mx-auto
            mt-[5rem]
            relative
            capitalize
            customersReview
            ' ><span className='
            bg-gradient-to-r
            from-black
            via-secondaryAccent
            to-black
            bg-clip-text
            text-[transparent]
            '>"what our Customers Says,,</span></h2>
            <div className='customerReviewDiv mt-10'>
                <div>
                    <div>
                        <span>Ankit</span>
                        <span className='flex'>
                            <ReviewStar />
                            <ReviewStar />
                            <ReviewStar />
                            <ReviewStar />
                            <ReviewStar />
                        </span>
                    </div>
                    <p>"I recently purchased a beautiful pencil sketch from PencilArt and I couldn't be happier with my purchase. The process was smooth and easy, and the quality of the artwork is exceptional. I've already received so many compliments on it and can't wait to buy more art from this talented community of artists!"</p>
                    <button>let's get that art now</button>
                </div>
                <div>
                    <div>

                        <span>Reyansh</span>
                        <span className='flex'>
                            <ReviewStar />
                            <ReviewStar />
                            <ReviewStar />
                            <ReviewStar />
                        </span>
                    </div>
                    <p>"As a collector of unique artwork, I'm always on the lookout for new talent. I stumbled upon PencilArt and was amazed by the quality of the artwork on the platform. I ended up buying two sketches and was blown away by the attention to detail and creativity of the artists. I can't recommend this platform enough!"</p>
                    <button>let's get that art now</button>
                </div>
                <div>
                    <div>

                        <span>Senorita</span>
                        <span className='flex'>
                            <ReviewStar />
                            <ReviewStar />
                            <ReviewStar />
                            <ReviewStar />
                            <ReviewStar />
                        </span>
                    </div>
                    <p> "I was looking for a special gift for my friend's birthday and decided to check out PencilArt. I was so impressed by the range of artwork available and ended up purchasing a custom sketch from one of the artists. The process was easy and the artist was so accommodating to my requests. My friend loved the gift and I'm now a huge fan of PencilArt!"</p>
                    <button>let's get that art now</button>
                </div>
            </div>
        </div>
    )
}
