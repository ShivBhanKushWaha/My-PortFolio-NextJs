'use client'
import Link from "next/link"
import { Button } from "./ui/button"
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'
import 'swiper/css/pagination'

import {Pagination} from 'swiper/modules'

import { Card,CardDescription,CardHeader,CardTitle } from "@/components/ui/card"
import Image from "next/image"


const reviewsData = [
    {
        avtar : '/reviews/avatar-1.png',
        name : 'Ayush Jaiswal',
        job : 'full stack MERN Developer',
        review : ' MERN Stack supports the MVC architecture which makes the Development process hurdle free.',
    },
    {
        avtar : '/reviews/avatar-3.png',
        name : 'Abhay Sharma',
        job : 'Frontend Developer',
        review : 'This set of Frameworks and tools are very specifically chosen to work together.',
    },
    {
        avtar : '/reviews/avatar-4.png',
        name : 'Shubhanshu Rao',
        job : 'Backend Developer',
        review : 'A framework layered on top of Node JS, used to build the backend of a site using Node JS functions and structures.',
    },
    {
        avtar : '/reviews/avatar-5.png',
        name : 'Abhishek Gupta',
        job : 'Data Scientist',
        review : 'The JavaScript runtime environment, it is used to run JavaScript on a Machine rather than in a browser.',
    },
    {
        avtar : '/reviews/avatar-6.png',
        name : 'Ritik',
        job : 'Coder',
        review : 'The Technology Stack is a set of frameworks and tools used to develop a Software Product.',
    },
    {
        avtar : '/reviews/avatar-2.png',
        name : 'Arjun',
        job : 'Java Developer',
        review : 'The web app development industry has progressed significantly than in previous years. It takes lots of innovative.',
    },
]

const Reviews = () => {
  return (
     <section className="mb-12 xl:mb-32">
        <div className="container mx-auto">
            <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
            {/* slides */}
            <Swiper slidesPerView={1}
            breakpoints={{
                640: {slidesPerView: 2},
                1400: {slidesPerView: 3},
            }} 
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{
                clickable:true
            }}
            className="h-[350px]"
            >
                {reviewsData.map((person,index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                                <CardHeader className='p-0 mb-10'>
                                    <div className="flex items-center gap-x-4">
                                        {/* images */}
                                        <Image src={person.avtar} width={70} height={70} alt="" priority/>
                                        {/* name */}
                                        <div className="flex flex-col">
                                            <CardTitle>
                                                {person.name}
                                            </CardTitle>
                                            <p>
                                                {person.job}
                                            </p>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardDescription className='text-lg text-muted-foreground'>
                                    {person.review}
                                </CardDescription>
                            </Card>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
     </section>
  )
}

export default Reviews
