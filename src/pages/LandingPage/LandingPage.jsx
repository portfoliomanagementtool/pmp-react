import React from 'react'
import { Icon } from '@iconify/react';
// import person1 from '.../images/Person1.png'
import person1 from '../../images/Person1.png'
import person2 from '../../images/Person2.png'
import photo1 from '../../images/Photo1.png'
import photo2 from '../../images/Photo2.png'
import photo3 from '../../images/Photo3.png'

import Navbar from './Navbar';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <>
    <Navbar/>
    <div>
    <div className='flex justify-center'>
        <div>
        <h1 className=' text-5xl md:text-7xl  font-bold text-center'>Your Wealth,<span className='text-[#473A6C]'> Our Priority<br></br>
        Mutual Funds, </span>Amplified!</h1>
        <div className='m-20'>
            <h1 className='w-[725px] text-[18px] flex items-center justify-center'>Experience data-driven personalized portfolios and expert guidance for a prosperous financial journey.</h1>
        </div>
        {/* <div className='flex justify-center'>
            <h1 className='bg-[#D9D9D9] rounded-lg w-[533px] flex justify-between items-center pl-10'>Enter your Email
            <button className="bg-[#473A6C] w-[142px] h-[64px] border-[#473A6C] rounded-lg border-2 text-white">Get Started</button>
            </h1>
        </div> */}
        <div className=" flex justify-center">
            <input placeholder="Enter your email" className='bg-[#D9D9D9] rounded-lg w-[533px] flex justify-between items-center pl-10'/>
            <button className="bg-[#473A6C] w-[142px] h-[64px] border-[#473A6C] rounded-lg border-2 text-white">Get Started</button>
          </div>
        </div>
    </div>
    <div className='w-[full] mx-20 h-[270px] bg-[#D9D9D9] mt-28'>

    </div>
    <div className='flex  md:flex mx-60 mt-28 '>
        <div className='w-1/2'>
            <h1 className='text-[64px] font-bold text-[#263238]'>How <span className='text-[#473A6C]'>We</span> Work</h1>
            <h2 className='text-[18px] mt-12 w-[500px]'>Track your investments in PMP and let our mutual fund system analyze your user data to craft a personalized portfolio for future growth.</h2>
            <div className='flex items-center gap-10 mt-10'>
                <div className='rounded-full w-[110px] h-[110px] bg-[#D9D9D950] flex items-center justify-center'>
            <Icon icon="carbon:mobile-download" color="#473a6c" width="50" height="50" />
            </div>
                <div>
                    <h1 className='text-[20px] text-[#263238] font-bold'>Data Analysis</h1>
                    <h1 className='text-[18px] text-[#263238]'>Analyzing your Preferences</h1>
                </div>
            </div>
            <div className='flex items-center gap-10 mt-10'>
                <div className='rounded-full w-[110px] h-[110px] bg-[#D9D9D950] flex items-center justify-center'>
                <Icon icon="fluent:inprivate-account-28-regular" color="#473a6c" width="50" height="50" />
            </div>
                <div>
                    <h1 className='text-[20px] text-[#263238] font-bold'>Personalized Portfolios</h1>
                    <h1 className='text-[18px] text-[#263238]'>Tailoring unique investment plans.</h1>
                </div>
            </div>
            <div className='flex items-center gap-10 mt-10'>
                <div className='rounded-full w-[110px] h-[110px] bg-[#D9D9D950] flex items-center justify-center'>
                <Icon icon="ic:outline-account-balance"  color="#473a6c" width="50" height="50" />
            </div>
                <div>
                    <h1 className='text-[20px] text-[#263238] font-bold'>Future-Oriented</h1>
                    <h1 className='text-[18px] text-[#263238]'>Monitoring market trends continuously.</h1>
                </div>
            </div>
            <div className='flex items-center gap-10 mt-10'>
                <div className='rounded-full w-[110px] h-[110px] bg-[#D9D9D950] flex items-center justify-center'>
                <Icon icon="carbon:currency-dollar"  color="#473a6c" width="50" height="50" />
            </div>
                <div>
                    <h1 className='text-[20px] text-[#263238] font-bold'>Expert Guidance</h1>
                    <h1 className='text-[18px] text-[#263238]'>Support from experienced advisors.</h1>
                </div>
            </div>

        </div>
        <div className='w-1/2 h-auto bg-[#D9D9D950] rounded-lg flex justify-center items-center'>
  
            {/* <img src='../images/Person1.png' alt="home"/> */}
            <img src={photo1} alt='photo1'/>
        </div>
    </div>
    <div className='flex mx-60 mt-28 '>
         <div className='w-1/2 h-auto my-10 bg-[#D9D9D950] rounded-lg flex justify-center items-center'>
            <img src={photo2} alt="photo2"/>
         </div>
        <div className='w-1/2 ml-24 '>
            <h1 className='text-[64px] font-bold text-[#263238]'>Your <span className='text-[#473A6C]'>Pathway</span> to Future Investment</h1>
            <h2 className='text-[18px] mt-4 w-[500px]'>Unlock your future investment potential with our data-driven, personalized portfolios and expert guidance.</h2>
            <div className='bg-[#D9D9D950] h-[90px] rounded-lg my-8 flex items-center  justify-between px-10'>
                
                <h1 className='text-[24px] text-[#263238]'>What is PMP?</h1>
                <Icon icon="mingcute:down-line" width="32" height="32" />
            </div>
            <div className='bg-[#D9D9D950] h-[90px] rounded-lg my-8 flex items-center  justify-between px-10'>
                <h1 className='text-[24px] text-[#263238]'>Are there Any Fees for using PMP?</h1>
                <Icon icon="mingcute:down-line" width="32" height="32" />
            </div>
            <div className='bg-[#D9D9D950] h-[90px] rounded-lg my-8 flex items-center  justify-between px-10'>
                <h1 className='text-[24px] text-[#263238]'>How Safe is PMP?</h1>
                <Icon icon="mingcute:down-line" width="32" height="32" />
            </div>
            <div className='bg-[#D9D9D950] h-[90px] rounded-lg my-8 flex items-center  justify-between px-10'>
                <h1 className='text-[24px] text-[#263238]'>What do I gain from using PMP?</h1>
                <Icon icon="mingcute:down-line" width="32" height="32" />
            </div>
        </div>
       
    </div>
    <div className='flex mx-60 mt-28 '>
        <div className='w-1/2'>
            
            <h1 className='text-[64px] font-bold text-[#263238]'>Why Choose</h1>
            <h1 className='text-[64px] font-bold text-[#473A6C]'> PMP </h1>
            <h2 className='text-[18px] mt-4 w-[500px]'>Unlock the potential of your financial future with PMP's tailored investment strategies and client-focused approach.</h2>
            <div className='flex items-center mt-10 gap-10'>
                <div className='w-[64px] h-[64px] rounded-full bg-[#D9D9D950] flex items-center justify-center'><h1 className='text-[36px] text-[#473A6C] font-bold'>1</h1></div>
                <h1 className='text-[20px] text-[#263238] font-semibold'>Tailored Portfolios</h1>
            </div>
            <div className='flex items-center mt-10 gap-10'>
                <div className='w-[64px] h-[64px] rounded-full bg-[#D9D9D950] flex items-center justify-center'><h1 className='text-[36px] text-[#473A6C] font-bold'>2</h1></div>
                <h1 className='text-[20px] text-[#263238] font-semibold'>Expert Guidance</h1>
            </div>
            <div className='flex items-center mt-10 gap-10'>
                <div className='w-[64px] h-[64px] rounded-full bg-[#D9D9D950] flex items-center justify-center'><h1 className='text-[36px] text-[#473A6C] font-bold'>3</h1></div>
                <h1 className='text-[20px] text-[#263238] font-semibold'>Data-Driven Approach</h1>
            </div>
            <div className='flex items-center mt-10 gap-10'>
                <div className='w-[64px] h-[64px] rounded-full bg-[#D9D9D950] flex items-center justify-center'><h1 className='text-[36px] text-[#473A6C] font-bold'>4</h1></div>
                <h1 className='text-[20px] text-[#263238] font-semibold'>Transparent and Secure</h1>
            </div>
            <button className="bg-[#473A6C] w-[142px] h-[64px] border-[#473A6C] rounded-lg border-2 text-white mt-10">Learn More</button>
           

        </div>
        <div className='w-1/2 h-auto bg-[#D9D9D950] rounded-lg flex justify-center items-center' >
            <img src={photo3} alt='photo3'/>
        </div>
    </div>
    <div className='flex justify-center mt-28'>
        <div>
        <h1 className='text-[70px] font-bold'>What <span className='text-[#473A6C]'>Customers</span> have to say</h1>
       
        <div className='mx-20 my-8'>
            <h1 className='w-[725px] text-[18px] flex items-center justify-center'>Discover why our clients love PMP. Read testimonials from satisfied investors who have experienced success and exceptional service.</h1>
        </div>
       
        </div>
    </div>
    <div className='flex mx-60 gap-10'>
        <div className='w-full bg-[#D9D9D950] h-[377px] rounded-lg flex'>
            <div >
            <img src={person1} alt='homw'/>
            </div>
            <div>
                <h1>Lorem ipsum dolor sit amet, , </h1>
            </div>
        </div>
        <div className='w-full bg-[#D9D9D950] h-[377px] rounded-lg flex'>
            <div className='w-[300px]'>
            <img src={person2} alt='homw'/>
            </div>
            <div>
                <h1>Lorem ipsum dolor sit amet, , </h1>
            </div>
        </div>
    </div>
    <div className='flex justify-center items-center'>
    <button className="bg-[#473A6C] w-[221px] h-[64px] border-[#473A6C] rounded-lg border-2 text-white mt-10">View All</button>
    </div>
    <div className='mx-60 bg-[#D9D9D950] h-[370px] my-32 flex items-center justify-center'>
        <div>
<h1 className='text-[56px] font-bold'>Track your investments using <span  className='text-[#473A6C]'>PMP</span></h1>
<h1 className='text-[56px] font-bold'>and invest in your future</h1>
</div>
    </div>
</div>
<Footer/>
</>
  )
}

export default LandingPage;