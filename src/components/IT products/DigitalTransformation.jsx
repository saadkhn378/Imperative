import React, { useState } from 'react';
import finboImg from '../assets/images/finbo-laptop.png';
import productList from '../data/ProductTabsData';

const tabs = [
    'AI-Enabled Solutions',
    'Identity Tech',
    'Healthcare Platforms',
    'E-commerce',
    'Communication Tools',
    'Learning & Media',
];

const DigitalTransformation = () => {
    const [activeTab, setActiveTab] = useState('AI-Enabled Solutions');
    const [featured, setFeatured] = useState(productList['AI-Enabled Solutions']?.featured);
    const productIcons = productList[activeTab]?.products || [];



    return (
        <section className="py-10 px-4 md:px-16 bg-white">
            {/* Header */}
            <div className="text-center mb-8">
                <h2 className="text-[16px] font-bold uppercase text-gray-800 tracking-wide">
                    DIGITAL TRANSFORMATION
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                    <span className="italic font-medium">Built for speed, trust, and intelligence</span>
                    —our digital tools align with your vision and industry demands.
                </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center items-center gap-6 border-b border-gray-200 pb-3 mb-8">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => {
                            setActiveTab(tab);
                            setFeatured(productList[tab]?.featured);
                        }}
                        className={`text-[13px] font-medium pb-1 transition ${activeTab === tab
                                ? 'text-orange-600 border-b-[2px] border-orange-600'
                                : 'text-gray-600 hover:text-orange-600'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Featured Product Section */}
            <div className="flex flex-col lg:flex-row justify-between gap-10 mb-12">
                {/* Left */}
                <div className="lg:w-[60%]">
                    <img src={featured.logo} alt={featured.title} className="w-28 mb-3" />
                    <h3 className="font-semibold text-gray-800 text-[14px]">{featured.title}</h3>
                    <p className="text-sm text-gray-700 mt-2 leading-relaxed max-w-md">
                        {featured.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mt-4">
                        <button className="bg-orange-500 text-white px-4 py-2 text-sm rounded hover:bg-orange-600 transition">
                            DEMO VIDEO
                        </button>
                        <button className="border border-gray-800 text-gray-800 px-4 py-2 text-sm rounded hover:bg-gray-100 transition">
                            QUICK INQUIRY
                        </button>
                        <button className="border border-gray-800 text-gray-800 px-4 py-2 text-sm rounded hover:bg-gray-100 transition">
                            SCHEDULE DEMO
                        </button>
                    </div>
                </div>

                {/* Right */}
                <div className="lg:w-[40%] flex items-center justify-center">
                    <img src={finboImg} alt="FinBO+ UI" className="w-full max-w-sm" />
                </div>
            </div>

            {/* Product Icons Row */}
            <div className="border-t border-b border-orange-100 py-6">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-y-6 gap-x-4 px-4">
                    {productIcons.map((product, idx) => (
                        <div
                            key={idx}
                            onClick={() => setFeatured(product)}
                            className="flex flex-col items-center justify-start text-center cursor-pointer"
                        >
                            <img src={product.icon} alt={product.title} className="h-10 mb-1" />
                            <div className="border-b-2 border-orange-500 w-10 mt-1 mb-1" />
                            <p className="text-[12px] text-gray-800 leading-tight max-w-[140px]">
                                {product.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default DigitalTransformation;