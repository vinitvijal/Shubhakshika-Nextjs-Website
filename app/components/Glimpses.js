import React from 'react'

function Glimpses() {
  return (
    <section className='min-h-[100vh] w-[100vw] flex justify-center items-center flex-col md:mt-40 -mt-28' id='#glimpses'>
        <div className=' text-6xl font-bold'>Glimpses</div>
        <div className=' w-[90vw] flex justify-evenly items-center pt-20'>
            <div className='grid grid-cols-3 gap-4'>
              <div>
                <img src="https://cdn.statically.io/gh/vinitvijal/images-cdn/main/glimpses/g1.png" className='rounded-tl-[40px] w-[350px] hover:shadow-lg hover:scale-105 transition-all' />
              </div>
              <div>
                <img src='https://cdn.statically.io/gh/vinitvijal/images-cdn/main/glimpses/g2.png' className='w-[350px] hover:shadow-lg hover:scale-105 transition-all' />
              </div>
              <div>
                <img src='https://cdn.statically.io/gh/vinitvijal/images-cdn/main/glimpses/g3.jpeg' className='rounded-tr-[40px] w-[350px] hover:shadow-lg hover:scale-105 transition-all' />
              </div>
              <div>
                <img src='https://cdn.statically.io/gh/vinitvijal/images-cdn/main/glimpses/g4.jpeg' className='w-[350px] hover:shadow-lg hover:scale-105 transition-all' />
              </div>
              <div>
                <img src='https://cdn.statically.io/gh/vinitvijal/images-cdn/main/glimpses/g5.jpeg' className='w-[350px] hover:shadow-lg hover:scale-105 transition-all' />
              </div>
              <div>
                <img src='https://cdn.statically.io/gh/vinitvijal/images-cdn/main/glimpses/g6.jpeg' className='w-[350px] hover:shadow-lg hover:scale-105 transition-all' />
              </div>
              <div>
                <img src='https://cdn.statically.io/gh/vinitvijal/images-cdn/main/glimpses/g7.jpeg' className='rounded-bl-[40px] w-[350px] hover:shadow-lg hover:scale-105 transition-all' />
              </div>
              <div>
                <img src='https://cdn.statically.io/gh/vinitvijal/images-cdn/main/glimpses/g8.jpeg' className='w-[350px] hover:shadow-lg hover:scale-105 transition-all' />
              </div>
              <div>
                <img src='https://cdn.statically.io/gh/vinitvijal/images-cdn/main/glimpses/g9.jpeg' className='rounded-br-[40px] w-[350px] hover:shadow-lg hover:scale-105 transition-all' />
              </div>
            </div>
        </div>
    </section>
  )
}

export default Glimpses
