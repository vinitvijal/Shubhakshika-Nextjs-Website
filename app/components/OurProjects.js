import { Card } from '@/components/ui/card'
import React from 'react'
import Image from 'next/image'
import deaddiction from '../../assets/images/de-addiction.jpg'
import education from '../../assets/images/education.jpg'
import project3 from '../../assets/images/project3.png'
import girleducation from '../../assets/images/girl-education.jpg'
import vocational from '../../assets/images/vocational2.jpg'

function OurProjects() {
  return (
    <div className='min-h-[100vh] w-[100vw] bg-slate-100 flex justify-center items-center flex-col'>
        <p className=' text-6xl flex items-center justify-center font-bold h-[15vh]'>Our Projects</p>
        <div className=' min-h-[80vh] grid-cols-3 grid w-full gap-5 pb-10'>
                <Card className='w-[30vw] p-5 gap-5 mx-auto'>
                    <Image src={project3} alt="Picture of the author" width={500} height={500} className=" rounded-lg" />
                    <p className=' text-2xl mt-4 font-semibold'>Shelter Home for Street Children</p>
                    <p className=' text-lg mt-4 '>Determined to make a difference in the lives of destitute children, we have set up an Open Shelter Home to provide them care, protection, and a healthy and happy environment. These children include beggars, rag- pickers, small vendors, orphaned, deserted, run-away and other vulnerable children. Besides giving them food, clothing, medical care and basic education, we also counsel them to bring about behavioural changes.</p>
                </Card>
                <Card className='w-[30vw] p-5 gap-5 mx-auto'>
                    <Image src={vocational} alt="Picture of the author" width={500} height={500} className=" rounded-lg" />
                    <p className=' text-2xl mt-4 font-semibold'>Vocational Training</p>
                    <p className=' text-lg mt-4 '>We have been imparting vocational training to make the beneficiaries self-reliant. Some of the popular skills that have been taught are Cookery, Textile Designing, Beauty Culture, Mobile Repair, Retail Management, Data-entry Computer Course, and Cutting and Tailoring (for women). We have also provided vocational training to women in Nari Niketan and children in Delhi-govt.-run children homes.</p>
                </Card>
                <Card className='w-[30vw] p-5 gap-5 mx-auto'>
                    <Image src={girleducation} alt="Picture of the author" width={500} height={500} className=" rounded-lg" />
                    <p className=' text-2xl mt-4 font-semibold'>Girl Child Project</p>
                    <p className=' text-lg mt-4 '>Resonating with the national objective of &apos;Beti padhao beti bachao&apos; campaign, we started the Girl Child Project in 2016. The programme aims at providing opportunities for education and employment to girls who have been treated as liabilities in their families and immediate surroundings. It is a matter of pleasure to report that the number of enrolment is increasing every year.</p>
                </Card>
                <Card className='w-[30vw] p-5 gap-5 mx-auto'>
                    <Image src={education} alt="Picture of the author" width={500} height={500} className=" rounded-lg" />
                    <p className=' text-2xl mt-4 font-semibold'>Education for all</p>
                    <p className=' text-lg mt-4 '>We believe that education is the foundation for leading a happy and fulfilled life. With this objective in mind we have been imparting value-creating education to needy children since 2001. We are happy to share that so far, we have provided basic education to more than 15,000 children with most of them inducted into formal education system after completing the bridge course. In 2006, we expanded the project to include orphans, beggars and other destitute children who were deprived of this opportunity. We also reached out to children in conflict with law in observations homes, and offered after-release back-up classes after their release or acquittal. We strive to tap the inherent potential of these children to bring about a positive change in their lives.</p>
                </Card>
                <Card className='w-[30vw] p-5 gap-5 mx-auto'>
                    <Image src={deaddiction} alt="Picture of the author" width={500} height={500} className=" rounded-lg" />
                    <p className=' text-2xl mt-4 font-semibold'>De-addiction Programme</p>
                    <p className=' text-lg mt-4 '>Observing that many of the boys in the Open Shelter Home were involved in substance abuse, we have initiated a project to wean children off this harmful habit. It is encouraging to see that many of these children give up addiction through love, care and activities that engage them at physical, mental and emotional levels.</p>
                </Card>
                
        </div>
    </div>
  )
}

export default OurProjects
