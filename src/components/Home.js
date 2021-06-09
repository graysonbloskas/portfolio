import React from 'react';
import image from '../computer-coding-shoot-P84MWYU (1).jpg'

export default function Home() {
    return (
        <main className="bg-gray-900">
            <img src={image} alt="Coding Background" className="absolute object-cover w-full h-full opacity-75" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-blue-100 font-bold cursive leading-none lg:leading-snug home-name">Hi, I'm <br></br>Grayson Bloskas</h1>
            </section>
        </main>
    )
}