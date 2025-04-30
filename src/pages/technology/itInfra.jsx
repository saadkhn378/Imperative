import React from 'react';
import HeroBanner from '../sections/it infra/HeroBanner';
import BenefitsSection from '../sections/it infra/BenefitsSection';
import Differentiators from '../sections/it infra/Differentiators';
import PartnershipsSection from '../sections/it infra/PartnershipsSection.JSX';
import KioskCarousel from '../sections/it infra/KioskCarousel';




const ItInfra = () => {
    return (
        <div className="w-full">
            <HeroBanner />
            <Differentiators/>
            <KioskCarousel/>
            <PartnershipsSection/>
            <BenefitsSection />

        </div>
    );
};

export default ItInfra;
