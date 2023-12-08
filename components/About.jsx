import DevImg from "./DevImg";
import {Tabs,TabsContent,TabsList,TabsTrigger} from "@/components/ui/tabs"

import{User2,MailIcon,HomeIcon,PhoneCall,GraduationCap,Calendar,Briefcase, Languages,} from 'lucide-react'

import Image from "next/image";

const infoData = [
    {
        icon: <User2 size={20}/>,
        text: 'Shivbhan Kushwaha',
    },
    {
        icon: <PhoneCall size={20}/>,
        text: '+91 9115379563',
    },
    {
        icon: <MailIcon size={20}/>,
        text: 'shivkush20cse51@gmail.com',
    },
    {
        icon: <Calendar size={20}/>,
        text: 'Born On 19 June, 2003',
    },
    {
        icon: <GraduationCap size={20}/>,
        text: 'Bachelor of Engineering',
    },
    {
        icon: <HomeIcon size={20}/>,
        text: '68/11 Rohari Patanpur,210341',
    },
]

const qualificationData = [
    {
        title : 'Education',
        data:[
            {
                University: 'Dr Bhimrao Ambedkar University, Agra',
                Qualification: 'Bachelor of Engineering (CSE)',
                Course: ' OS, DSA, DBMS, CN',
                Years: '2020 - 2024'
            },
            {
                University: 'S. V. D. P. Inter College, Ragaul (UP Board)',
                Qualification: 'Intermediate (10+2)',
                Course : 'PCM',
                Years: '2018 - 2020'
            },
            {
                University: 'S. V. D. P. Inter College, Ragaul (UP Board)',
                Qualification: 'Matriculation (10)',

                Course : 'English, Hindi',
                Years: '2016 - 2018'
            },
        ]
    },
    {
        title : 'Experience',
        data:[
            {
                Company: 'Oasis Infobyte',
                Role: 'Fontend Development',
                Period: 'May 2023 ~ June 2023',
                Years: '2023 - 2023',
                Mode: 'Online-Remote'
            },
            {
                Company: 'The Sparks Foundation',
                Role: 'Full Stack Development',
                Period: 'June 2022 ~ July-2023',
                Years: '2023 - 2023',
                Mode: 'Online-Remote'
            },
            {
                Company: 'SWOC Season-4',
                Role: 'Contributer (Current)',
                Period: 'December 2023 - Present',
                Years: '2023 - 2024',
                Mode: 'Online-Remote'
            },
        ]
    }
]

const skillData = [
    {
        title : 'Skills',
        data : [
            {
                name : 'Language :',
                Languages: 'C++, C, SQL, JavaScript, Python, typeScript',
            },
            {
                name : 'Front-End :',
                Languages: 'HTML, CSS',
            },
            {
                name : 'Frameworks :',
                Languages: 'ReactJs, NextJs, Bootstrap, TailwindCSS',
            },
            {
                name : 'Backend-End :',
                Languages: 'NodeJs, ExpressJs, REST API',
            },
            {
                name : 'Databases :',
                Languages : 'Prisma, MongoDB, Firebase, MySQL',
            },
        ]
    },
    {
        title : 'Tools',
        data : [
            {
                imgPath : '/about/vscode.svg'
            },
            {
                imgPath : '/about/git.svg'
            },
            {
                imgPath : '/about/github.svg'
            },
            {
                imgPath : '/about/postman-icon.svg'
            },
            {
                imgPath : '/about/windows.svg'
            },
        ]
    }
]

const About = () => {
    const getData = (arr,title) => {
        return arr.find((item) => item.title === title);
    };


  return (
    <section className="xl:h-[960px] pb-12 xl:py-24">
        <div className="container mx-auto">
            <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About Me</h2>
            <div className="flex flex-col xl:flex-row">
                {/* image */}
                <div className="hidden xl:flex flex-1 relative">
                    <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px]
                     h-[505px] bg-no-reapeat relative' imgSrc='/about/profile.png'/>
                </div>
                {/* tabs */}
                <div className="flex-1">
                    <Tabs defaultValue="personal">
                        <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='qualification'>Qualifications</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
                        </TabsList>
                        {/* tabs content */}
                        <div className="text-lg mt-12 xl:mt-8">
                            <TabsContent value='personal'>
                                <div className="text-center xl:text-left">
                                    <h3 className="h3 mb-4">Unmatched Service Quality for over 10 years</h3>
                                    <p className="subtitle max-w-xl mx-auto xl:mx-0">I specialize in crafting intuitive websites with cutting-edges technology, 
                                    deliverying dynamic and engagin user experiences,</p>
                                    {/* icons */}
                                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                        {infoData.map((item,index) => {
                                            return (
                                            <div key={index} className="flex items-center gap-x-4 mx-auto xl:mx-0" >
                                                <div className="text-primary">{item.icon}</div>
                                                <div>{item.text}</div>
                                            </div>
                                            )
                                        })}
                                    </div>
                                    {/* languages */}
                                    <div className="flex flex-col gap-y-2">
                                        <div className="text-primary">Language Skill</div>
                                        <div className="border-b border-border"></div>
                                        <div>English,Hindi</div>
                                    </div>
                                </div>
                            </TabsContent>
                            {/* qualificaton */}
                            <TabsContent value='qualification'>
                                <div>
                                    <h3 className="h3 mb-8 text-center xl:text-left">My awesome Journey</h3>
                                    {/* expericane & education wrapper */}
                                    <div className="grid md:grid-cols-2 gap-y-8">
                                        {/* experience */}
                                        <div className="flex flex-col gap-y-6">
                                            <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                <Briefcase size={28}/>
                                                <h4 className="capitalize font-medium">
                                                    {getData(qualificationData,'Experience').title}
                                                </h4>
                                            </div>
                                            {/* list */}
                                            <div className="flex flex-col gap-y-8">{getData(qualificationData,'Experience').data.map((item,index) => {
                                                const {Company,Role,Years,Mode,Period} = item;
                                                return (
                                                    <div className="flex gap-x-8 group" key={index}>
                                                        <div className="h-[118px] w-[1px] bg-border relative ml-2">
                                                            <div className="w-[11px] h-[11px] rounded-full bg-primary 
                                                            absolute -left-[5px] group-hover:translate-y-[118px] transition-all
                                                             duration-500"></div>
                                                        </div>
                                                        <div>
                                                            <div className="font-semibold text-xl leading-none mb-2">{Company}</div>
                                                            <div className="text-lg leading-none text-muted-foreground mb-2">{Role}</div>
                                                            <div className="text-lg leading-none text-muted-foreground mb-2">{Period}</div>
                                                            <div className="text-lg leading-none text-muted-foreground mb-2">{Mode}</div>
                                                            <div className="text-base font-medium">{Years}</div>
                                                        </div>
                                                    </div>
                                                )
                                            })}</div>
                                        </div>
                                        {/* education */}
                                        <div className="flex flex-col gap-y-6">
                                            <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                <GraduationCap size={28} />
                                                <h4 className="capitalize font-medium">
                                                    {getData(qualificationData,'Education').title}
                                                </h4>
                                            </div>
                                            {/* list */}
                                            <div className="flex flex-col gap-y-8">{getData(qualificationData,'Education').data.map((item,index) => {
                                                const {University,Qualification,Years,CGPA,Course} = item;
                                                return (
                                                    <div className="flex gap-x-8 group" key={index}>
                                                        <div className="h-[108px] w-[1px] bg-border relative ml-2">
                                                            <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] 
                                                            group-hover:translate-y-[108px] transition-all
                                                             duration-500"></div>
                                                        </div>
                                                        <div>
                                                            <div className="font-semibold text-xl leading-none mb-2">{University}</div>
                                                            <div className="text-lg leading-none text-muted-foreground mb-2">{Qualification}</div>
                                                            <div className="text-lg leading-none text-muted-foreground mb-2">{Course}</div>
                                                            <div className="text-base font-medium">{Years}</div>
                                                        </div>
                                                    </div>
                                                )
                                            })}</div>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value='skills'>
                                <div className="text-center xl:text-left">
                                    <h3 className="h3 mb-8">What I Use Everyday</h3>
                                    {/* skills */}
                                    <div className="mb-16">
                                        <h4 className="text-xl font-semibold mb-2">Skills</h4>
                                        <div className="border-b border-border mb-4"></div>
                                        {/* skill list */}
                                        <div>
                                            {getData(skillData,'Skills').data.map((item,index) => {
                                                const {name,Languages} = item;
                                                return (
                                                    
                                                    <div key={index} className="flex items-center gap-x-4 mx-auto xl:mx-0" >
                                                        <div className="text-primary">{name}</div>
                                                        <div>{Languages}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    {/* tools */}
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
                                        <div className="border-b border-border mb-4"></div>
                                        {/* tools list */}
                                        <div className="flex gap-x-8 justify-center xl:justify-start">
                                            {getData(skillData,'Tools').data.map((item,index) => {
                                                const {imgPath} = item;
                                                return (
                                                    <div key={index}>
                                                        <Image src={imgPath} width={48} height={48} alt="Tools" priority/>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About