import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';
import background from '../new-york-city-manhattan-skyline-black-and-white-ae-PJKA3SD.jpg';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
};

export default function About() {
    const [author, setAuthors] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == 'author']{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then((data) => setAuthors(data[0]))
        .catch(console.error)
    }, [])

    if(!author) return <div>Loading..</div>

    return (
        <main className="relative">
            <img src={background} alt="city skyline" className="absolute w-full h-full md:h-full  md:object-contain md:absolute md:w-full lg:h-auto lg:w-full lg:absolute opacity-75 " />
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-gray-800 rounded-lg shadow-2xl lg:flex p-20 opacity-90">
                    <img src={urlFor(author.authorImage).url()} className="rounded w-32 w-32 lg:w-64 h-64 mr-8 opacity-100" alt={author.name} />
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-gray-300 mb-4 mt-6">
                        <span className="text-green-100">{author.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                            <BlockContent blocks={author.bio} projectId="m80s6cjc" dataset="production" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}