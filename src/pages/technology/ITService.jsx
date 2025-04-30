import React from 'react';
import HeroBanner from '../../components/IT services/HeroBanner';
import Differentiators from '../../components/IT services/Differentiators';
import WhatWeDoSlider from '../../components/IT services/WhatWeDoSection';
import BenefitsSection from '../../components/IT services/BenefitsSection';
import StaffAugmentationSection from '../../components/IT services/StaffAugmentationSection';



const ItServices = () => {
  return (
    <div className="w-full">
    <HeroBanner/>
   <Differentiators/>
   <WhatWeDoSlider/>
   <BenefitsSection/>
   <StaffAugmentationSection/>

    </div>
  );
};

export default ItServices;