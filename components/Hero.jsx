import React from 'react'
import { Button } from './ui/button'
import { Download,Send } from 'lucide-react'

import {RiBriefcase4Fill,RiTeamFill,RiTodoFill,RiArrowDownSLine} from 'react-icons/ri'
import Link from 'next/link'
import Socials from './Socials'
import DevImg from './DevImg'
import Badge from './Badge'

const Hero = () => {
  return (
    <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat
     bg-bottom bg-cover dark:bg-none'>
        <div className='container mx-auto'>
            <div className='flex justify-between gap-x-8'>
                {/* text */}
                <div className='flex max-w-[600px] flex-col justify-center mx-auto
                 xl:mx-0 text-center xl:text-left'>
                    <div className='text-sm uppercase font-semibold mb-4 text-primary
                     tracking-[4px]'>Full Stack MERN Developer</div>
                    <h1 className='h1 mb-4'>Hello, I'm Shivbhan Kushwaha</h1>
                    <p className='subtitle max-w-[490px] max-auto xl:max-0'>Brief description with insights into myself , my vocational journey, 
                    and what I engage in professionally.</p>
                    {/* button */}
                    <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
                        <Link href='/contact'>
                            <Button className='gap-x-2'>Contact Me <Send size={20}/> </Button>
                        </Link>
                        <Link href="/resume/ShivbhanKushwaha.pdf">
                            <Button variant="secondary" className='gap-x-2'>Download CV <Download size={20}/></Button>
                        </Link>
                    </div>

                    {/* socials */}
                    <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconsStyles='text-foreground text-[22px] hover:text-primary
                     transition-all'/>
                </div>
                {/* image */}
                <div className='hidden xl:flex relative'>
                    {/* badge 1*/}
                    <Badge endCountNum={2} containerStyles='absolute top-[24%] -left-[5rem]'
                    badgeText="Years Of Experience" 
                    icon={<RiBriefcase4Fill/>}/>
                    {/* badge 2*/}
                    <Badge endCountNum={37} containerStyles='absolute top-[80%] -left-[1rem]'
                    badgeText="Finished Projects" 
                    icon={<RiTodoFill/>}/>
                    {/* badge 3*/}
                    <Badge endCountNum={9} containerStyles='absolute top-[55%] -right-8'
                    badgeText="Happy Clients" 
                    icon={<RiTeamFill/>}/>
                    <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px]
                     bg-no-repeat absolute -top-1 -right-2'></div>
                     <DevImg containerStyles='bg-hero_shape w-[510px] h-[522px] bg-no-repeat
                      relative bg-bottom dark:bg-hero_shape2_dark' imgSrc='/hero/developer.png'/>
                </div>
            </div>
            {/* icons */}
            <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12
             animate-bounce'>
                <RiArrowDownSLine className='text-3xl text-primary'/>
            </div>
        </div>
    </section>
  )
}

export default Hero