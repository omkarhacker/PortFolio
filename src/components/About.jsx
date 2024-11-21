import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div className='className="relative z-0 bg-gray-900 w-full h-full flex flex-col items-center px-4 sm:px-0'>

      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👨‍💻 Hi, I'm Omkar Gadam, a 2025 graduate🎓 with a passion for crafting robust backend systems and captivating web applications.As a seasoned <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/omkar-gangadhar-gadam-599b45244/' target='_blank'>Software developer</a> I specialize in MERN stacks🚀.
              <br />
              ✍️ Beyond coding, I love sharing my insights and experiences through engaging blogs on <a className=' text-purple-300 hover:text-purple-400 duration-300' href="" target='_blank'>Medium</a>, where I delve into the intricacies of software development and technology trends.
              On a different note, I'm also into photography📸. It's not just a hobby; I see it as a way to capture moments🌟📷, tell stories.</p>

            <ButtonLink
              url='https://drive.google.com/file/d/1cJi5VxrADQbWL8nf1bh1gOsDA_TsQkGT/view?usp=sharing'
              text='View Resume →'
              padding={`p-3`}
            />

          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;