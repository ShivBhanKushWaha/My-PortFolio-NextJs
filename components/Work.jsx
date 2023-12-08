'use client'
import Link from "next/link"
import { Button } from "./ui/button"
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'
import 'swiper/css/pagination'

import {Pagination} from 'swiper/modules'
import ProjectCard from "./ProjectCard"


const projectData = [
  {
    image : '/work/1.png',
    category : 'NextJs',
    name : 'Ecommerce Website',
    description : "This project is working on e-commerce website like buy and sell both options are availabe.",
    link : 'https://taj-marbles-m26frn0ue-shivbhankushwaha.vercel.app/',
    github : 'https://github.com/ShivBhanKushWaha/Agra-marbles-store',
  },
  {
    image : '/work/2.png',
    category : 'HTML',
    name : 'Banking Projects',
    description : "This is based on recieve and send money this is simple project using HTML , CSS & JS.",
    link : 'https://shivbhankushwaha.github.io/TSF-Basic-Banking-System-Projects/',
    github : 'https://github.com/ShivBhanKushWaha/TSF-Basic-Banking-System-Projects',
  },
  {
    image : '/work/3.png',
    category : 'ReactJs',
    name : 'My-Blog-Website',
    description : "A blog is a website that is updated frequently with personal commentary or business content.",
    link : 'https://github.com/ShivBhanKushWaha/My-Blog-React-project',
    github : 'https://github.com/ShivBhanKushWaha/My-Blog-React-project',
  },
  {
    image : '/work/4.png',
    category : 'ReactJs',
    name : 'MI-Store-Clone ',
    description : "MI store clone using ReactJs and CSS styles to learn the ReactJs in frontend development",
    link : 'https://github.com/ShivBhanKushWaha/MI-Store-Clone',
    github : 'https://github.com/ShivBhanKushWaha/MI-Store-Clone',
  },
  {
    image : '/work/2.png',
    category : 'ReactJs',
    name : 'Todo Website',
    description : "To-do list apps can help you organize tasks and deadlines.",
    link : 'https://github.com/ShivBhanKushWaha/fullstack-ToDo-app-Backend',
    github : 'https://github.com/ShivBhanKushWaha/fullstack-to-app-frontend',
  },
  {
    image : '/work/3.png',
    category : 'HTML',
    name : 'Chat GPT-4.0',
    description : "ChatGPT is an artificial intelligence language model developed by OpenAI.",
    link : 'https://sk-chat-gpt-4-0-cbd5kzqsl-vishnabh.vercel.app/',
    github : 'https://github.com/ShivBhanKushWaha/Sk_ChatGPT_4.0',
  },
  {
    image : '/work/1.png',
    category : 'HTML',
    name : 'My Github Profile',
    description : "Here is my all projects in the githuub , you can visite check them.",
    link : 'https://github.com/ShivBhanKushWaha',
    github : 'https://github.com/ShivBhanKushWaha',
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* {Text} */}
        <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left 
        mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">Here is my some latest project are availabe,
           Some ara live and some are only frontend or running on the localhost you can also visit my github profile to explre all the projects!</p>
          <Link href='/projects'>
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper className="h-[480px]" slidesPerView={1}
          breakpoints={{640:{
            slidesPerView : 2
          }}} spaceBetween={30} modules={[Pagination]} pagination={{clickable : true}}>
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0,4).map((project,index) => {
              return (
              <SwiperSlide key={index}>
                <ProjectCard project={project}/>
              </SwiperSlide>)
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Work