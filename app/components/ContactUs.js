import React from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function ContactUs() {
  return (
    <section className='h-[80vh] w-[100vw] border-t border-b flex md:flex-row flex-col justify-evenly items-start md:mb-0 mb-60' id='contact'>
        <div className=" md:w-1/2 w-full p-20 flex justify-evenly flex-col md:gap-0 gap-2 h-full">
            <p className="md:text-6xl text-3xl font-semibold">Contact Us</p>
            <p className="md:text-3xl text-sm font-medium">Shubhakshika Education Society</p>
            <p>4/124, Block-J, Sector-16, Rohini <br/>
                Landmark - Near Sardar Colony Gurudwara <br/>
                New Delhi -110089</p>
            <p>Basti Vikas Kendra, Gate No-2 <br/>
                Amarjyoti Colony, Shahbad Daulatpur <br/>
                Bawana Road, New Delhi -110042</p>
                <div className="font-medium">
                    <p>Phone:  +(91) 95999 70797</p>
                    <p>Mobile: +(91) 98102 01542</p>
                    <p>Telephone:  011-27852040</p>
                    <p>Email: <a href="mailto:shubhakshika@gmail.com">shubhakshika@gmail.com</a></p>
                </div>
        </div>
        <div className="md:w-1/2 w-full md:py-20 md:px-20 px-10 h-full flex justify-center gap-2 flex-col ">
            <Input type="email" id="email" placeholder="Your Name" />
            <Input type="email" id="email" placeholder="Mobile Number" />
            <Input type="email" id="email" placeholder="Your Email" />
            <Textarea placeholder="Type your message here." className="h-48" />
            <Button className="">Send</Button>
        </div>
    </section>
  )
}
