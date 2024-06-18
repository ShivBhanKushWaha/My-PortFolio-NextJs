'use client'
import Link from 'next/link'
import {
    RiYoutubeFill,
    RiLinkedinFill,
    RiGithubFill,
    RiFacebookFill,
    RiInstagramFill,
    RiCodeBoxFill,
    RiTwitterFill
} from 'react-icons/ri'

const icons = [
    {
        path: 'https://www.youtube.com/@ShivbhanKushwaha3051',
        name:<RiYoutubeFill/>,
    },
    {
        path: 'https://leetcode.com/shivbhankushwaha862003672001/',
        name:<RiCodeBoxFill/>,
    },
    {
        path: 'https://www.linkedin.com/in/shivbhan-kushwaha-183b18226/',
        name:<RiLinkedinFill/>,
    },
    {
        path: 'https://github.com/ShivBhanKushWaha',
        name:<RiGithubFill/>,
    },
    {
        path: 'https://www.facebook.com/shivbhan.kushwaha.75',
        name:<RiFacebookFill/>,
    },
    {
        path: 'https://www.instagram.com/black_lover14444/',
        name:<RiInstagramFill/>,
    },
    {
        path: 'https://twitter.com/technical_jugad',
        name:<RiTwitterFill/>,
    },
]

const Socials = ({containerStyles,iconsStyles}) => {
  return (
    <div className={`${containerStyles}`}>
        {icons.map((icon,index) => {
            return <Link href={icon.path} target='blank' key={index}>
                <div className={`${iconsStyles}`}>{icon.name}</div>
            </Link>
        })}
    </div>
  )
}

export default Socials
