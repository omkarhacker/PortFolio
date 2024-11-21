import React from "react";
import Footer from './Footer';
const vpn = require('../assets/vpn.png');
const copeople = require('../assets/copeople.png');

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="w-full max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between h-[600px]">
            <div>
                <a href="#">
                    <img
                        className="w-full h-[200px] object-cover rounded-t-lg"
                        src={image}
                        alt={title}
                    />
                </a>
                <div className="p-4 sm:p-6">
                    <a href="#">
                        <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
                            {title}
                        </h5>
                    </a>
                    <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">
                        {description}
                    </p>
                </div>
            </div>
            <div className="m-2 sm:m-4 lg:m-6 flex justify-between items-center">
                <div className="flex flex-wrap gap-2 pl-2">
                    {technologies.map((tag, index) => (
                        <p key={`${index}-${tag}`} className="text-[14px] text-blue-500">
                            #{tag}
                        </p>
                    ))}
                </div>
                <a
                    href={git}
                    className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300"
                >
                    GitHub
                </a>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="relative z-0 bg-gray-900 w-full h-full flex flex-col items-center px-4 sm:px-0">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export const project = [
    {
        title: 'SkillHut',
        description: 'SkillHut is a modern education platform built with React, Node.js, Shadcn UI, and Tailwind CSS. It allows users to buy, sell, create, and study courses with a seamless, user-friendly experience.',
        image: copeople,
        git: 'https://github.com/omkarhacker/SkillHut',
        technologies: ['React', 'Node.js', 'Shadcn UI', 'Tailwind CSS', 'MongoDB']
    },
    {
        title: 'ShoutLine',
        description: 'ShoutLine is a visually appealing social media platform I built using React.js, Node.js, and Material UI. It allows users to upload posts, view posts, and follow others, offering an engaging and seamless social experience with a modern design.',
        image: vpn,
        git: "https://github.com/omkarhacker/ShoutLine",
        technologies: ['Node.js', 'React', 'Redux Toolkit', 'MongoDB', 'Material UI']
    }
];

export default Projects;
