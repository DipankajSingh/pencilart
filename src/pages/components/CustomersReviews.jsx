import React from 'react'
import Image from 'next/image'
export default function CustomersReviews() {
    return (
        <div>
            <h2>what our Customers Says</h2>
            <div>
                <div>
                    <div>
                        <Image />
                        <span>name</span>
                    </div>
                    <p>"I recently purchased a beautiful pencil sketch from PencilArt and I couldn't be happier with my purchase. The process was smooth and easy, and the quality of the artwork is exceptional. I've already received so many compliments on it and can't wait to buy more art from this talented community of artists!"</p>
                </div>
                <div>
                    <div>
                        <Image />
                        <span>name</span>
                    </div>
                    <p>"As a collector of unique artwork, I'm always on the lookout for new talent. I stumbled upon PencilArt and was amazed by the quality of the artwork on the platform. I ended up buying two sketches and was blown away by the attention to detail and creativity of the artists. I can't recommend this platform enough!"</p>
                </div>
                <div>
                    <div>
                        <Image />
                        <span>name</span>
                    </div>
                    <p> "I was looking for a special gift for my friend's birthday and decided to check out PencilArt. I was so impressed by the range of artwork available and ended up purchasing a custom sketch from one of the artists. The process was easy and the artist was so accommodating to my requests. My friend loved the gift and I'm now a huge fan of PencilArt!"</p>
                </div>
            </div>
        </div>
    )
}
