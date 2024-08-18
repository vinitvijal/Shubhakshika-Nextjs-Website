import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Sponsor1 from '../../assets/images/sponsor1.png'
import Sponsor2 from '../../assets/images/sponsor2.png'
import Sponsor3 from '../../assets/images/sponsor3.png'
import Sponsor4 from '../../assets/images/sponsor4.png'
import Sponsor5 from '../../assets/images/sponsor5.png'
import Sponsor6 from '../../assets/images/sponsor6.png'
import Sponsor7 from '../../assets/images/sponsor7.png'
import Sponsor8 from '../../assets/images/sponsor8.png'
import Sponsor9 from '../../assets/images/sponsor9.png'


function Sponsors() {
  return (
    <section className='h-[100vh] w-[100vw] mb-40 my-5 flex justify-center items-center flex-col' id='sponsor'>
        <div className=' text-6xl font-bold my-24'>Our Sponsors</div>
        <div className='  w-[90vw] grid grid-cols-3 gap-10'>
            <Link href='https://www.metaflexdoors.in/'>
                <Image src={Sponsor1} alt='sponsor' className='m-auto'/>
            </Link>
            <Link href='https://www.metaflexdoors.in/'>
                <Image src={Sponsor2} alt='sponsor' className='m-auto'/>
            </Link>
            <Link href='https://www.metaflexdoors.in/'>
                <Image src={Sponsor3} alt='sponsor' className='m-auto'/>
            </Link>
            <Link href='https://www.metaflexdoors.in/'>
                <Image src={Sponsor4} alt='sponsor' className='m-auto h-[80%] w-auto'/>
            </Link>
            <Link href='https://www.metaflexdoors.in/'>
                <Image src={Sponsor5} alt='sponsor' className='m-auto h-[80%] w-auto'/>
            </Link>
            <Link href='https://www.metaflexdoors.in/'>
                <Image src={Sponsor6} alt='sponsor' className='m-auto h-[80%] w-auto'/>
            </Link>
            <Link href='https://www.metaflexdoors.in/'>
                <Image src={Sponsor7} alt='sponsor' className='m-auto h-[80%] w-auto'/>
            </Link>
            <Link href='https://www.metaflexdoors.in/'>
                <Image src={Sponsor8} alt='sponsor' className='m-auto h-[80%] w-auto'/>
            </Link>
            <Link href='https://www.metaflexdoors.in/'>
                <Image src={Sponsor9} alt='sponsor' className='m-auto h-[80%] w-auto'/>
            </Link>

        </div>
    </section>
  )
}

export default Sponsors
