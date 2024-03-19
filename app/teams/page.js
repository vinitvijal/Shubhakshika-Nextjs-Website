import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardDescription } from '@/components/ui/card'
 
import Picture1 from '../../assets/images/team/Picture1.png'
import Picture2 from '../../assets/images/team/Picture2.png'
import Picture3 from '../../assets/images/team/Picture3.png'
import Picture4 from '../../assets/images/team/Picture4.png'
import Picture5 from '../../assets/images/team/Picture5.png'
import Picture6 from '../../assets/images/team/Picture6.png'
import Picture7 from '../../assets/images/team/Picture7.jpeg'

import Aggarwal from '../../assets/images/team/AGGARWAL.jpeg'
import ANITA from '../../assets/images/team/ANITA.jpeg'
import JAYANTI from '../../assets/images/team/JAYANTI.jpeg'
import KUSUM from '../../assets/images/team/KUSUM.jpeg'
import PARAMJEET from '../../assets/images/team/PARAMJERET.jpeg'
import POORVI from '../../assets/images/team/POORVI.jpeg'
import pranshu from '../../assets/images/team/pranshu.jpeg'
import RUCHI from '../../assets/images/team/RUCHI.jpeg'
import sheela from '../../assets/images/team/sheela.jpeg'
import sonika from '../../assets/images/team/sonika.jpg'
import SWARAJ from '../../assets/images/team/SWARAJ.jpeg'

const Data = [
    {
        name: 'Mr. Shri Om Prakash',
        role: 'Founder & Group Chairman,The Indogulf Group',
        img: Picture2
    },
    {
        name: 'Mr. Harichand Aggarwal',
        role: 'Chairman,Insecticides India Pvt Ltd',
        img: Picture1
    },{
        name: 'Mr. Ankit Goel',
        role: 'Chairman and MD, Space World Group',
        img: Picture4
    },{
        name: 'Mr. Sanjay Arora',
        role: '',
        img: Picture7
    },{
        name: 'Mr. Gyan Aggarwal',
        role: 'Chairman, Rajdeep Agro Products Pvt Ltd',
        img: Picture3
    },{
        name: 'Mr. Ravi Dadhich',
        role: 'CEO, JAN AUSHADHI PARIYOJNA,Under Deptt of Pharmaceuticals,Ministry of Chemicals and Fertilisers, GOVT. Of India',
        img: Picture6
    },
    {
        name: 'Prof. Neelima Gupta',
        role: 'Department of Computer Science, University of Delhi',
        img: Picture5
    },
    


]

function TeamCard() {
    // I want to show image and after that name and role
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[80%] px-10"
    >
      <CarouselContent>
        {Data.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="py-10">
                <CardContent className="flex aspect-square   items-center justify-center p-2">
                    <Image src={item.img} className='object-cover w-4/5 opacity-100' alt='qa'/>
                </CardContent>
                <CardDescription className="text-left px-5 text-xl font-semibold">{item.name}</CardDescription>
                <CardDescription className="text-left px-5 text-sm">{item.role}</CardDescription>

              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}


function page() {
  return (
    <>
        <Header/>
        <div className='gap-10 w-full flex justify-evenly items-center flex-col mt-32'>
            <h1 className='text-4xl font-bold underline underline-offset-8 decoration-amber-400'>Advisory Board Members</h1>
            <TeamCard id="Advisory" title="Advisory Board" />


            <h1 className='text-4xl font-bold underline underline-offset-8 decoration-amber-400 mt-32'>Executive Board Members</h1>
            <div className="p-1 grid grid-cols-3 gap-6 w-[80%] px-10 mb-20 ">
              <div className=" col-span-3 flex justify-center items-center">
              <Card className="py-10 w-1/3">
                <CardContent className="flex aspect-square   items-center justify-center p-2">
                    <Image src={pranshu} className='object-cover w-4/5 opacity-100' alt='qa'/>
                </CardContent>
                <CardDescription className="text-center px-5 text-xl font-bold">MS. PRANSHU BHATNAGAR</CardDescription>
                <CardDescription className="text-center font-semibold text-amber-600 px-5 text-md">Chairperson</CardDescription>

              </Card>
              </div>
              <div className=" col-span-3 flex justify-evenly items-center">

              <Card className="py-10 w-1/3">
                <CardContent className="flex aspect-square   items-center justify-center p-2">
                    <Image src={KUSUM} className='object-cover w-4/5 opacity-100' alt='qa'/>
                </CardContent>
                <CardDescription className="text-center px-5 text-xl font-semibold">MS. KUSUM VIRMANI</CardDescription>
                <CardDescription className="text-center font-semibold text-amber-600 px-5 text-sm">President</CardDescription>

              </Card>
              <Card className="py-10 w-1/3">
                <CardContent className="flex aspect-square   items-center justify-center p-2">
                    <Image src={RUCHI} className='object-cover w-4/5 opacity-100' alt='qa'/>
                </CardContent>
                <CardDescription className="text-center px-5 text-xl font-semibold">MS RUCHI GUPTA</CardDescription>
                <CardDescription className="text-center font-semibold text-amber-600 px-5 text-sm">Vice President</CardDescription>

              </Card>
              </div>
              <Card className="py-10">
                <CardContent className="flex aspect-square   items-center justify-center p-2">
                    <Image src={sheela} className='object-cover w-4/5 opacity-100' alt='qa'/>
                </CardContent>
                <CardDescription className="text-center px-5 text-xl font-semibold">MS. SHEELA JAIN</CardDescription>
                <CardDescription className="text-center font-semibold text-amber-600 px-5 text-sm">Vice President & Coordinator (Fund Promotion)</CardDescription>

              </Card>
              <Card className="py-10">
                <CardContent className="flex aspect-square   items-center justify-center p-2">
                    <Image src={sonika} className='object-cover w-4/5 opacity-100' alt='qa'/>
                </CardContent>
                <CardDescription className="text-center px-5 text-xl font-semibold">DR. SONIKA THAKRAL</CardDescription>
                <CardDescription className="text-center font-semibold text-amber-600 px-5 text-sm">Secretary</CardDescription>

              </Card>
              <Card className="py-10">
                <CardContent className="flex aspect-square   items-center justify-center p-2">
                    <Image src={ANITA} className='object-cover w-4/5 opacity-100' alt='qa'/>
                </CardContent>
                <CardDescription className="text-center px-5 text-xl font-semibold">MS. ANITA SHARMA</CardDescription>
                <CardDescription className="text-center font-semibold text-amber-600 px-5 text-sm">Secretary (Operations)</CardDescription>

              </Card>
              <Card className="py-10">
                <CardContent className="flex aspect-square   items-center justify-center p-2">
                    <Image src={POORVI} className='object-cover w-4/5 opacity-100' alt='qa'/>
                </CardContent>
                <CardDescription className="text-center px-5 text-xl font-semibold">MS. POORVI KHERA</CardDescription>
                <CardDescription className="text-center px-5 font-semibold text-amber-600 text-sm">Secretary (Projects)</CardDescription>

              </Card>
              <Card className="py-10">
                <CardContent className="flex aspect-square   items-center justify-center p-2">
                    <Image src={PARAMJEET} className='object-cover w-4/5 opacity-100' alt='qa'/>
                </CardContent>
                <CardDescription className="text-center px-5 text-xl font-semibold">MR. PARAMJEET SINGH</CardDescription>
                <CardDescription className="text-center px-5 font-semibold text-amber-600 text-sm">Treasurer</CardDescription>

              </Card>
              <Card className="py-10">
                <CardContent className="flex aspect-square   items-center justify-center p-2">
                    <Image src={Aggarwal} className='object-cover w-4/5 opacity-100' alt='qa'/>
                </CardContent>
                <CardDescription className="text-center px-5 text-xl font-semibold">MR R P AGGARWAL</CardDescription>
                <CardDescription className="text-center px-5 font-semibold text-amber-600 text-sm">Finance Coordinator</CardDescription>

              </Card>
              <div className=" col-span-3 flex justify-evenly items-center">
              <Card className="py-10 w-1/3">
                <CardContent className="flex aspect-square   items-center justify-center p-2">
                    <Image src={JAYANTI} className='object-cover w-4/5 opacity-100' alt='qa'/>
                </CardContent>
                <CardDescription className="text-center px-5 text-xl font-semibold">JAYANTI CHATTERJI</CardDescription>
                <CardDescription className="text-center px-5 font-semibold text-amber-600 text-sm">Member</CardDescription>

              </Card>
              <Card className="py-10 w-1/3">
                <CardContent className="flex aspect-square   items-center justify-center p-2">
                    <Image src={SWARAJ} className='object-cover w-4/5 opacity-100' alt='qa'/>
                </CardContent>
                <CardDescription className="text-center px-5 text-xl font-semibold">MR. SWARAJ KOCHHAR</CardDescription>
                <CardDescription className="text-center  px-5 font-semibold text-amber-600 text-sm">Member</CardDescription>

              </Card>

            </div>              
              
            </div>

        </div>
        <Footer/>
    </>
  )
}

export default page
