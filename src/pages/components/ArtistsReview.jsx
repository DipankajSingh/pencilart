import React from 'react'
import Image from 'next/image'

export default function ArtistsReview() {
    return (
        <div className='
        artistsReview
        relative
        p-6
        '>{/*card type Design*/}
            <h1 className='
            capitalize

            '>artists are our special power</h1>
            <div className='relative'>
                <div className='relative'>
                    <div className='
                    relative
                    ml-auto
                    mr-auto
                    artitsReviewImage
                    overflow-hidden
                    rounded-full
                    '
                    >
                        <Image fill={true} src={'/images/againMyself.jpg'} alt='image/myself' />
                    </div>
                    <span>Dipankaj</span>
                    <p>"I've been blown away by the level of support PencilArt provides to its artists. The resources and assistance offered have been invaluable in helping me grow my career and succeed on the platform."</p>
                </div>
                <div>
                    <div className='
                    relative
                    ml-auto
                    mr-auto
                    artitsReviewImage
                    overflow-hidden
                    rounded-full
                    '
                    >
                        <Image fill={true} src={'/images/spidy.jpg'} alt='image/myself' />
                    </div>
                    <span>Spider Man</span>
                    <p>"PencilArt's artist support is top-notch. Their marketing and sales tools have helped me increase my exposure and sell more artwork, and their critiques and feedback have been invaluable in improving my skills and techniques."</p>
                </div>
                <div>
                    <div className='
                    relative
                    ml-auto
                    mr-auto
                    artitsReviewImage
                    overflow-hidden
                    rounded-full
                    '
                    >
                        <Image fill={true} src={'/images/myself.jpg'} alt='image/myself' />
                    </div>
                    <span>Me Again</span>
                    <p>"As a new artist on PencilArt, I was nervous about selling my artwork online. However, the support and resources provided by PencilArt have made the process easy and stress-free. They have truly helped me launch my career as an artist."</p>
                </div>
            </div>
        </div>
    )
}
