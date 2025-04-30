import React from 'react';

import img1 from '../../assets/images/dedicated.png';
import img2 from '../../assets/images/onsite.png';
import img3 from '../../assets/images/onboarding.png';

const augmentationItems = [
  {
    image: img1,
    title: 'Dedicated or shared resources',
  },
  {
    image: img2,
    title: 'Onsite or remote delivery',
  },
  {
    image: img3,
    title: 'Quick onboarding',
  },
];

const StaffAugmentationSection = () => {
  return (
    <section className="py-12 px-4 sm:px-8 md:px-16 lg:px-24 bg-[#F8F8F8] text-center">
      <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold uppercase text-gray-800 tracking-widest">
        Developer On-Demand / Staff Augmentation
      </h2>
      <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-2 relative inline-block">
        Extend your team with our vetted IT experts.
        <span className="block w-12 sm:w-16 h-[2px] bg-orange-500 mx-auto mt-2 sm:mt-3" />
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 sm:gap-8 justify-items-center">
        {augmentationItems.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center px-4">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white rounded-full shadow-md flex items-center justify-center mb-4">
              <img src={item.image} alt={item.title} className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 font-medium leading-snug max-w-[180px]">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StaffAugmentationSection;