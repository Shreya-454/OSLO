import React, { useState } from 'react'
import { PlayIcon } from './common/Icons';
import videoThumbnail from '../assets/images/videoThumbnail.webp'
import osloVideo from '../assets/videos/osloVideo.mp4'

const Airflow = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayVideo = () => {
        setIsPlaying(true);
    };

    const handleVideoEnded = () => {
        setIsPlaying(false);
    };
  return (
    <div className='bg-lightBlue md:pt-[56px] md:max-h-[540px] py-10 md:pb-0'>
      <div className="max-w-[1568px] mx-auto sm:px-6 px-3 container">
        <h3 className='font-avenir  font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-4xxl leading-lg text-center text-black mb-3 md:mb-[30px]'>See for yourself how efficient Airflow is!</h3>
        <p className='font-avenirstd text-center sm:text-start text-base sm:text-xl lg:text-2xl font-normal leading-lg text-grey max-w-[1250px] mx-auto mb-5 md:mb-[53px]'>Airflow teeth cleaning is done after the tartar has been removed. Airflow is a perfect treatment for those who want a whiter, cleaner and healthier smile in a gentle and effective way. A water and powder solution is blown onto the teeth with high precision without causing any damage to the tooth enamel. With absolutely no discomfort for you!</p>
        <div className="relative  ">
                    {isPlaying ? (
                        <video
                            className="xl:max-w-[901px] lg:max-w-[750px] max-w-[500px] w-full md:max-h-[350px] xl:min-h-[542px] mx-auto overflow-hidden"
                            controls
                            autoPlay
                            onEnded={handleVideoEnded}>
                            <source src={osloVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <div className="cursor-pointer" onClick={handlePlayVideo} >
                            <img
                                src={videoThumbnail}
                                alt="Video Thumbnail"
                                className="xl:max-w-[901px] lg:max-w-[750px] max-w-[500px] w-full mx-auto"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <PlayIcon />
                            </div>
                        </div>
                    )}
                </div>
      </div>
    </div>
  )
}

export default Airflow
