'use client'
import React , {useState} from "react"
import { Tabs, TabsList,TabsContent,TabsTrigger } from "@/components/ui/tabs"
import ProjectCard from "@/components/ProjectCard"

const projectData = [
  {
    image : '/work/1.png',
    category : 'NextJs',
    name : 'Ecommerce Website',
    description : "This project is working on e-commerce website like buy and sell both options it is live projects and selected for the college projects.",
    link : 'https://taj-marbles-m26frn0ue-shivbhankushwaha.vercel.app/',
    github : 'https://github.com/ShivBhanKushWaha/Agra-marbles-store',
  },
  {
    image : '/work/2.png',
    category : 'HTML',
    name : 'Banking Projects',
    description : "This is based on recieve and send money this is simple project using HTML , CSS & JS,it have only frontend part.",
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
    link : 'https://resplendent-fenglisu-90382f.netlify.app/',
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

// remove category duplicate
const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map(item => item.category))];

const Projects = () => {

  const [categories,setCategories] = useState(uniqueCategories);
  const [category,setCategory] = useState('all projects')
  const filteredProjects = projectData.filter(project => {
    // if category is 'all projects' return all, projects other wise return that projects
    return category === 'all projects' ? project : project.category === category;
  })

  return (
    <section className='min-h-screen pt-12'>
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">My Projects</h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12
           mx-auto md:border dark:border-none'>
            {categories.map((category,index) => {
              return (
                <TabsTrigger onClick={() => setCategory(category)} value={category} key={index} className='capitalize w-[162px]
                 md:w-auto'>
                  {category}
                </TabsTrigger>
              )
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project,index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard key={index} project={project}/>
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects
