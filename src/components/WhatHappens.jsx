import React from 'react'
import { Tooth } from './common/Icons'
import whatHappenImg from '../assets/images/whatHappensImg.webp'
import whatEllipse from '../assets/images/whatHappenEllipse.webp'

const WhatHappens = () => {
  return (
    <div className=' overflow-x-clip xl:pt-[221px] md:pt-0 sm:pt-20 pt-10 lg:mt-[307px] md:mt-[180px] sm:pb-20 pb-12 lg:pb-[135px]' >
      <div className="container max-w-[1568px] mx-auto sm:px-6 px-3">
        <div className="flex flex-row flex-wrap -mx-3 items-center">
            <div className="xl:w-7/12 w-full px-3 mb-8 xl:mb-0 relative z-[1]">
            <h3 className='font-avenir font-extrabold text-black md:text-4xl sm:text-3xl text-2xl lg:text-4xxl !leading-md1 mb-[6px] text-center sm:text-start 2xl:max-w-[774px]'>What happens if discolouration, plaque and tartar are not removed regularly?</h3>
                <p className='font-avenir font-normal sm:text-xl text-base lg:text-2xl leading-lg text-lightBlack md:mb-[51px] mb-5 2xl:max-w-[774px] text-center sm:text-start'>Even with good dental care at home, bacteria and tartar will always build up. It occurs especially under and along the gum line and between teeth that are crowded together. Discolouration from food, drink, tobacco, etc., creates additional rough surfaces on which bacteria can attach.</p>
            <div className="sm:flex gap-9">
                <div className=' flex justify-center sm:block'><Tooth/></div>
                <div className=' mt-[22px]'>
                    <h4 className=' text-skyBlue text-xl sm:text-2xl md:text-3xl font-avenir text-center sm:text-start sm:mb-10 mb-3 font-extrabold'>Bacteria and infections</h4>
                    <p className=' font-avenir text-lightBlack sm:text-xl text-base lg:text-2xl leading-lg font-normal text-center sm:text-start 2xl:max-w-[597px]'>Untreated tartar will provide a breeding ground for even more bacteria and increase the risk of infections in the gums. Regular professional teeth cleaning thus helps to prevent gum inflammation, which over time can develop into the serious and irreversible condition of periodontitis. The bacteria also convert carbohydrates into acids, and this is the biggest cause of cavities in the teeth (caries).</p>
                </div>
            </div>
            <img src={whatEllipse} alt="ellipse" className='absolute top-[-23%] left-[-24%] z-[-1] ' />
            </div>
            <div className="xl:w-5/12 w-full px-3">
            <img src={whatHappenImg} alt="whatImg" className='max-w-[795.57px] 2xl:mb-[128px] max-h-[726.8px] min-[1600px]:w-auto w-full xl:object-contain mx-auto 2xl:mx-0'  />
            </div>
        </div>
         </div>
    </div>
  )
}

export default WhatHappens
