import React from 'react'
import questionMark1 from '../assets/svg/questionMarks1.svg'
import questionMark2 from '../assets/svg/questionMarks2.svg'
import rightWeb from '../assets/svg/rightWeb.svg'
import leftWeb from '../assets/svg/leftWeb.svg'
const Tannlegesenter = () => {
  return (
    <div className=' 2xl:max-h-[600px] 2xl:mb-[158px] overflow-hidden'>
      <div className='bg-blue 2xl:h-[595px]'>
        <div className='   overflow-hidden mb-[158px] max-w-[1920px]  mx-auto relative z-[1] '>
          <div className="container 2xl:max-w-[1568px] max-w-[1320px]  sm:px-6 px-3 mx-auto">
        <div className="w-full lg:min-h-[624px]  bg-pink border-8 2xl:-translate-y-4 md:border-[16px] border-solid 2xl:max-w-[1520px] xl:max-w-[1100px] mx-auto lg:max-w-[900px] border-white rounded-[44px] lg:rounded-[96px] py-[100px] md:py-[164px] md:px-6 px-3 relative">
        <h3 className='font-avenir md:text-4xl text-2xl sm:text-3xl lg:text-4xxl leading-lg text-center font-extrabold text-black mb-3 md:mb-8'>Why use Oslo Tannlegesenter?</h3>
        <p className='max-w-[1166px] text-center mx-auto sm:text-xl text-base lg:text-2xl leading-lg font-normal'>Oslo Dental Center, one of the largest clinics in Norway, is conveniently situated just a two-minute walk from
        National theateret station in Oslo. We provide state-of-the-art X-ray technologies, 3D scanning, digital smile
        design, and dental technician services. Equally vital is our emphasis on modern and pain-free treatment
        approaches. Ensuring our patients' comfort and delivering exceptional experiences are fundamental to our
        practice. Additionally, we specialize in providing care and support for patients with dental phobia</p>
        <img src={questionMark1} alt="questionMark"  className='absolute  top-[1%] md:top-[2%] md:left-[1%] left-[5%] max-w-[100px] md:max-w-[194px] animate-wiggle'/>
        <img src={questionMark2} alt="questionMark" className='absolute 2xl:bottom-0 md:bottom-[-4%] bottom-0  right-[5%] md:right-[1%] max-w-[100px] md:max-w-[194px] animate-wiggle' />
        </div>
          </div>
          <img src={rightWeb} alt="rightWeb" className='absolute right-0 top-0 h-full z-[-1]' />
          <img src={leftWeb} alt="leftWeb" className='absolute left-0 top-0 h-full z-[-1]' />
        </div>
      </div>
    </div>
  )
}

export default Tannlegesenter
