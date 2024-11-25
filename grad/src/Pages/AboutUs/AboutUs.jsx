import React from 'react'
import Header from '../../Components/Header/Header'
import Header2 from '../../Components/Header/Header2'
import AboutUsCard from '../../Components/AboutUsCard/AboutUsCard'
import ScrollToTop from '../../UI/ScrollToTop'

const AboutUs = () => {
  return (
    <div className='mt-16 bg-[#0060e4] h-screen'>
        <ScrollToTop />
        <Header title={"About Us"}/>
        <div className='grid grid-cols-2 place-items-center'>
            <AboutUsCard
            pic={"/Images/AboutUs/WhatsApp Image 2024-06-28 at 8.53.09 PM.jpeg" }
            name={"Ali Osama"}
            job={"Front-End Developer"}
            gh={"https://github.com/slr8"}
            fb={"https://www.facebook.com/ali.kemaly/?locale=ar_AR"}
            li={"https://www.linkedin.com/in/ali-osama-295493263/"}
            gm={"mailto:aliosama7133@gmail.com"}
            />
            <AboutUsCard
            pic={"/Images/AboutUs/WhatsApp Image 2024-06-26 at 11.54.48 PM.jpeg" }
            name={"Omar Nasr"}
            job={".NET Developer"}
            gh={"https://github.com/omarnasr1"}
            fb={"https://www.facebook.com/profile.php?id=100028270779617&mibextid=ZbWKwL"}
            li={"https://www.linkedin.com/in/omar-nasr-242b39241"}
            gm={"mailto:omarnasr629@gmail.com"}
            />
        </div>
    </div>
  )
}

export default AboutUs