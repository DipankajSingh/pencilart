import React from 'react'
import Image from 'next/image'

export default function ArtistsReview() {
    return (
        <div>{/*card type Design*/}
            <h1>artists are our special power</h1>
            <div>
                <Image />
                <span>John Doe</span>
                <p>"I've been blown away by the level of support PencilArt provides to its artists. The resources and assistance offered have been invaluable in helping me grow my career and succeed on the platform."</p>
            </div>
            <div>
                <Image />
                <span>andrew dec</span>
                <p>"PencilArt's artist support is top-notch. Their marketing and sales tools have helped me increase my exposure and sell more artwork, and their critiques and feedback have been invaluable in improving my skills and techniques."</p>
            </div>
            <div>
                <Image />
                <span>senorita</span>
                <p>"As a new artist on PencilArt, I was nervous about selling my artwork online. However, the support and resources provided by PencilArt have made the process easy and stress-free. They have truly helped me launch my career as an artist."</p>
            </div>
        </div>
    )
}
