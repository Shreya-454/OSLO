import React from 'react'
import { Tooth } from './common/Icons'
import WhatHappenImg from '../assets/images/whatHappensImg.webp'

const WhatHappens = () => {
  return (
    <div className=' pt-[221px] mt-[307px]'>
      <div className="container max-w-[1520px] mx-auto px-3">
        <div className="flex flex-row flex-wrap -mx-3">
            <div className="w-7/12 px-3">
            <h3 className='font-avenir font-extrabold text-black text-4xxl leading-md1 mb-[6px]'>What happens if discolouration, plaque and tartar are not removed regularly?</h3>
                <p className='font-avenir font-normal text-2xl leading-lg text-lightBlack mb-[51px] max-w-[774px]'>Even with good dental care at home, bacteria and tartar will always build up. It occurs especially under and along the gum line and between teeth that are crowded together. Discolouration from food, drink, tobacco, etc., creates additional rough surfaces on which bacteria can attach.</p>
            <div className="flex gap-9">
                <div><Tooth/></div>
                <div className=' mt-[22px]'>
                    <h4 className=' text-skyBlue text-3xl font-avenir mb-10 font-extrabold'>Bacteria and infections</h4>
                    <p className=' font-avenir text-lightBlack text-2xl leading-lg font-normal max-w-[597px]'>Untreated tartar will provide a breeding ground for even more bacteria and increase the risk of infections in the gums. Regular professional teeth cleaning thus helps to prevent gum inflammation, which over time can develop into the serious and irreversible condition of periodontitis. The bacteria also convert carbohydrates into acids, and this is the biggest cause of cavities in the teeth (caries).</p>
                </div>
            </div>
            </div>
            <div className="w-5/12 px-3 ">
            <img src={WhatHappenImg} alt="whatImg" className='-translate-x-16' />
            </div>
        </div>
         </div>
    </div>
  )
}

export default WhatHappens
