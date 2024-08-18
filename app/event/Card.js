import React from 'react'

const cardData = [
    {
        title: 'Workshops',
        src: '/events/e8.png',
        description: '',
        link: '/events/workshops'
    },
    {
        title: 'Educational Trips',
        src: '/events/e8.png',
        description: '',
        link: '/events/edutrips'
    }
]

const Card = () => {
  return (
    <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">

    <div class="rounded overflow-hidden flex flex-col max-w-xl mx-auto">

        <a href="#">
            <img class="w-full" src='/events/e8.png' alt="Sunset in the mountains"/>
        </a>
        <div class="relative -mt-16 px-10 pt-5 pb-16 bg-white m-10">
            <a href="#"
                class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2">Workshops</a>
            <p class="text-gray-500 text-sm">
                Today, I’m covering one of my favorite parts of the Nordstrom Anniversary Sale: the activewear!
            </p>
            <p class="mt-5 text-gray-600 text-xs">
                <a href="/event/workshops" class="text-xs text-indigo-600 transition duration-500 ease-in-out">
                    Visit
                </a>
            </p>
        </div>

    </div>

    </div>
  )
}

export default Card
