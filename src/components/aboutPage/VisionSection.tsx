import React from 'react';
import VisionImage from '@/assets/images/about/vision.webp';
import Image from 'next/image';

const VisionSection = () => {
  return (
    <section id='vision' className='px-primary mt-[118px]'>
      <h2 className='text-center font-bold text-primary text-[30px] md:text-[35px] lg:text-[40px] mb-[51px] font-secondary'>
        Vision and Mission.
      </h2>

      <div className='flex flex-col gap-8 md:flex-row items-center md:items-start text-center md:text-left'>
        <div className='-mt-10 md:flex-[50%]'>
          <Image src={VisionImage} alt='vision' />
        </div>
        <div className='flex flex-col gap-[56px] text-[#00050D] md:flex-[50%]'>
          <div className='flex flex-col gap-1'>
            <p className='font-lg font-secondary font-bold uppercase'>RCCG Vision</p>
            <p className='text-2xl'>
The Redeemed Christian Church of God (RCCG) has a vision that aligns with its purpose of spreading the gospel and preparing people for eternity. The vision is often summarized as:
            </p>
            <p>
1. To make heaven.
              </p>
              <p>
                2. To take as many people as possible with us to heaven.
              </p>
              <p>
                3.To have a member of RCCG in every family of all nations.
              </p>
              <p>
                4.To accomplish No. 1 above, holiness will be our lifestyle.
              </p>
              <p>
5.To accomplish Nos. 2 & 3 above, we will plant churches within five minutes walking distance in every city and town of developing countries and within five minutes driving distance in every city and town of developed countries.
</p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='font-lg font-secondary font-bold uppercase'></p>
            <p className='text-2xl'></p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='font-lg font-secondary font-bold uppercase'>RCCG Mission</p>
            <p className='text-2xl'>
            The mission of RCCG is deeply rooted in carrying out God’s work through its core mandates, which are:
            </p>
            <p>
1.Living a Holy Life
                Emphasizing holiness as a standard for personal and communal living.
              </p>
              <p>

2. Evangelism
Reaching out to individuals, families, and communities to bring them to Christ through active evangelistic efforts.
            </p>
            <p>
3. Church Planting
Establishing churches in all parts of the world to ensure accessibility to the Word of God.
                </p>
                <p>
4. Preparing Believers for Heaven
                  Encouraging and equipping members to live their lives in readiness for Christ’s return.
                  </p>
                  <p>
5. This vision and mission drive the structure, activities, and outreach efforts of the RCCG globally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
