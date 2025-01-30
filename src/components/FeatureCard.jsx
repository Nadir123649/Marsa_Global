import Image from 'next/image';
import React from 'react';

const FeatureCard = ({ features }) => {
    return (
        <div className='feature-card connect-card min-h-[300px] md:min-h-[363px] p-[40px] flex flex-col justify-between relative'>
            <Image src={features.imageSrc} alt="feature" className='feature-arrow mb-[24px] absolute top-[27px] right-[-30px]' />
            <p className='text-[#B8B8B8] text-[18px] not-italic leading-[23px] font-[500]'>
                Core Features
            </p>
            <div>
                <Image src={features.image} alt="feature" className='mb-[24px]'/>
                <h3 className='mb-[16px] text-[20px] text-[#8BC34A] not-italic leading-normal font-[700]'>
                    {features.name}
                </h3>
                <p className='text-[#535353] text-[18px] not-italic font-[400] leading-[23px] h-[69px]'>
                    {features.text}
                </p>
            </div>

        </div>
    );
}

export default FeatureCard;
