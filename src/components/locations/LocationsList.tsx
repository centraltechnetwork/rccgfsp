import React from 'react';
import churchLocations from './churchLocations';

const LocationsList = () => {
  return (
    <section id='church-locations' className='px-primary py-[100px]'>
      <ul className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {churchLocations.map((item) => (
          <li
            key={item.name}
            className='py-[18px] px-5 border border-primary rounded-[5px] bg-white'
          >
            <p className='text-primary md:text-xl lg:text-3xl mb-[7px] font-bold font-secondary'>
              {item.name}
            </p>
            <p className='md:text-lg'>{item.address}</p>
          </li>
        ))}
      </ul>
      
      {/* Google Map Section */}
      <div className='mt-10'>
        <h2 className='text-center text-primary md:text-2xl lg:text-3xl font-bold mb-5'>Locate Us using Google Maps</h2>
        <div className='w-full h-[400px]'>
          <iframe
            title='Google Map Location'
            className='w-full h-full border-0'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.482711770537!2d3.292369574359805!3d6.587756693397201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9225fa92673b%3A0xd9208819c097107!2s30%20Ibari%20St%2C%20Ifako%20Agege%2C%20Lagos!5e0!3m2!1sen!2sng!4v1707753079357!5m2!1sen!2sng'
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationsList;
