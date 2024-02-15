import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import Image from 'next/image'
import ushu from '../../assets/images/team/usha.jpeg'

export default function StoryCard() {
  return (
    <Card className="flex h-[25vh] justify-center items-center">
        <div className='w-1/3 flex justify-center items-center'>
            <Image src={ushu} className='w-[80%]' alt='child'/>
        </div>
    <CardContent className='w-2/3 h-[80%]'>
        <CardTitle>Raunak</CardTitle>
        <CardDescription className="h-[100%] overflow-auto ">Raunak an 8/9 year old boy was found begging at Badli station . The boy was smoking and eating tobacco. It took the NGO staff some time and lot of counselling to convince the parents to send the boy to the shelter home . Raunak was a quarrelsome boy and fought with other boys over small matters. The staff soon, found out that the child liked to dance and enjoyed playing cricket. This was the take off point for his reformation. The NGO held dance sessions with other children of his age . He learnt to share space with others .Cricket coaching was for him a lesson in working with the team. Raunak gave up smoking and spent his time in creative activities. Gradually , he was weaned off from begging too. Raunak is now going to an MCD school studying in class V. he is provided back-up teaching by the NGO.</CardDescription>
    </CardContent>

    </Card>
  )
}
