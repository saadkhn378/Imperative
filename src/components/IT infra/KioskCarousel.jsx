import React, { useState } from 'react';
import { motion, LayoutGroup } from 'framer-motion';

// Banking Kiosk variants
import imgCash from '../../assets/images/kiosk-cash-cheque.png';
import imgMulti from '../../assets/images/kiosk-multi-function.png';
import imgPass from '../../assets/images/kiosk-passbook.png';
import ellipse from '../../assets/images/Ellipse 18.png';

// Healthcare Kiosk variants
import imgHealth1 from '../../assets/images/kiosk-cash-cheque.png';
import imgHealth2 from '../../assets/images/kiosk-multi-function.png';
import imgHealth3 from '../../assets/images/kiosk-passbook.png';

// Educational Kiosk variants
import imgEdu1 from '../../assets/images/kiosk-cash-cheque.png';
import imgEdu2 from '../../assets/images/kiosk-multi-function.png';
import imgEdu3 from '../../assets/images/kiosk-passbook.png';

// Logistic Kiosk variants
import imgLog1 from '../../assets/images/kiosk-cash-cheque.png';
import imgLog2 from '../../assets/images/kiosk-multi-function.png';
import imgLog3 from '../../assets/images/kiosk-passbook.png';

// Retail Kiosk variants
import imgRet1 from '../../assets/images/kiosk-cash-cheque.png';
import imgRet2 from '../../assets/images/kiosk-multi-function.png';
import imgRet3 from '../../assets/images/kiosk-passbook.png';

const data = {
    'Banking Kiosk': [
        {
            key: 'cash', title: 'Cash & Cheque Deposit Kiosk', image: imgCash, desc: 'Enables cash deposits, withdrawals, transfers, bill payments, and account management with secure authentication, reducing branch workload and enhancing customer convenience.',
        },
        {
            key: 'multi', title: 'Multi-Function Kiosk', image: imgMulti, desc: 'Enables cash deposits, withdrawals, transfers, bill payments, and account management with secure authentication, reducing branch workload and enhancing customer convenience.',
        },
        {
            key: 'pass', title: 'Passbook Printing Kiosk', image: imgPass, desc: 'Enables cash deposits, withdrawals, transfers, bill payments, and account management with secure authentication, reducing branch workload and enhancing customer convenience.',
        },
    ],
    'Healthcare Kiosk': [
        {
            key: 'hc1', title: 'Patient Check-In Kiosk', image: imgHealth1, desc: 'Enables cash deposits, withdrawals, transfers, bill payments, and account management with secure authentication, reducing branch workload and enhancing customer convenience.',
        },
        {
            key: 'hc2', title: 'Pharmacy Pickup Kiosk', image: imgHealth2, desc: 'Enables cash deposits, withdrawals, transfers, bill payments, and account management with secure authentication, reducing branch workload and enhancing customer convenience.',
        },
        {
            key: 'hc3', title: 'Vitals Monitoring Kiosk', image: imgHealth3, desc: 'Enables cash deposits, withdrawals, transfers, bill payments, and account management with secure authentication, reducing branch workload and enhancing customer convenience.',
        },
    ],
    'Educational Kiosk': [
        {
            key: 'ed1', title: 'Campus Info Kiosk', image: imgEdu1, desc: 'Enables cash deposits, withdrawals, transfers, bill payments, and account management with secure authentication, reducing branch workload and enhancing customer convenience.',
        },
        {
            key: 'ed2', title: 'Library Self-Checkout', image: imgEdu2, desc: 'Enables cash deposits, withdrawals, transfers, bill payments, and account management with secure authentication, reducing branch workload and enhancing customer convenience.',
        },
        {
            key: 'ed3', title: 'Admissions Kiosk', image: imgEdu3, desc: 'Enables cash deposits, withdrawals, transfers, bill payments, and account management with secure authentication, reducing branch workload and enhancing customer convenience.',
        },
    ],
    'Logistic Kiosk': [
        {
            key: 'lg1', title: 'Inventory Lookup Kiosk', image: imgLog1, desc: 'Enables cash deposits, withdrawals, transfers, bill payments, and account management with secure authentication, reducing branch workload and enhancing customer convenience.',
        },
        {
            key: 'lg2', title: 'Label Printing Kiosk', image: imgLog2, desc: 'Enables cash deposits, withdrawals, transfers, bill payments, and account management with secure authentication, reducing branch workload and enhancing customer convenience.',
        },
        {
            key: 'lg3', title: 'Package Drop-off Kiosk', image: imgLog3, desc: 'Enables cash deposits, withdrawals, transfers, bill payments, and account management with secure authentication, reducing branch workload and enhancing customer convenience.',
        },
    ],
    'Retail Kiosk': [
        {
            key: 'rt1', title: 'Self-Checkout Kiosk', image: imgRet1, desc: 'Enables cash deposits, withdrawals, transfers, bill payments, and account management with secure authentication, reducing branch workload and enhancing customer convenience.',
        },
        {
            key: 'rt2', title: 'Price Lookup Kiosk', image: imgRet2, desc: 'Enables cash deposits, withdrawals, transfers, bill payments, and account management with secure authentication, reducing branch workload and enhancing customer convenience.',
        },
        {
            key: 'rt3', title: 'Digital Signage Kiosk', image: imgRet3, desc: 'Enables cash deposits, withdrawals, transfers, bill payments, and account management with secure authentication, reducing branch workload and enhancing customer convenience.',
        },
    ],
};

export default function KioskCarousel() {
    const sectors = Object.keys(data);
    const [activeSector, setActiveSector] = useState(sectors[0]);
    const variants = data[activeSector];

    // center index among the 3
    const [idx, setIdx] = useState(0);
    const prev = () => setIdx(i => (i === 0 ? 2 : i - 1));
    const next = () => setIdx(i => (i === 2 ? 0 : i + 1));

    // derive left/center/right
    const L = variants[(idx + 2) % 3];
    const C = variants[idx];
    const R = variants[(idx + 1) % 3];

    // widths for positions
    const sizeClasses = [
        'w-24 md:w-32',  // left
        'w-48 md:w-64',  // center
        'w-24 md:w-32',  // right
    ];

    return (
        <section className="py-16 bg-white">
            {/* Header & Tabs */}
            <div className="text-center px-4">
                <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-900">
                    Transforming Transactions with Self-Service &amp; Automation
                </h2>
                <p className="mt-2 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
                    An integrated suite of infrastructure offerings that combine hardware, automation, and intelligence.
                </p>
                <div className="mt-4 flex justify-center space-x-6 text-sm md:text-base">
                    {sectors.map(sec => (
                        <button
                            key={sec}
                            onClick={() => { setActiveSector(sec); setIdx(0); }}
                            className={`font-bold pb-1 uppercase ${sec === activeSector
                                ? 'text-orange-500 border-b-2 border-orange-500'
                                : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            {sec}
                        </button>
                    ))}
                </div>
            </div>

            {/* Carousel */}
            <div className="relative mt-10 flex justify-center overflow-hidden">
                <LayoutGroup>
                    <div className="flex items-end justify-center space-x-4">
                        {[L, C, R].map((item, pos) => (
                            <motion.div
                                key={item.key}
                                layout
                                className={`${sizeClasses[pos]} cursor-pointer`}
                                onClick={() => (pos === 0 ? prev() : pos === 2 ? next() : null)}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            >
                                <div className="relative pb-3 flex justify-center">
                                    {/* Ellipse shadow underneath */}
                                    <img
                                        src={ellipse}
                                        alt=""
                                        className="absolute  bottom-0 left-1/2 w-3/4 md:w-2/3 transform -translate-x-1/2 z-0 pointer-events-none"
                                    />

                                    {/* Kiosk image in front */}
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className={`relative z-10 w-full object-contain ${pos === 1

                                            }`}
                                    />
                                </div>

                            </motion.div>

                        ))}
                    </div>
                </LayoutGroup>
            </div>

            {/* Caption */}
            <div className="text-center mt-8 px-4 md:px-0 max-w-2xl mx-auto">
                <h3 className="text-xl md:text-2xl font-bold uppercase text-orange-500">
                    {C.title}
                </h3>
                <p className="mt-2 text-base text-gray-700">
                    {C.desc}
                </p>
                <button className="mt-3 inline-block text-sm font-semibold uppercase text-orange-500 hover:underline">
                    QUICK INQUIRY &rarr;
                </button>
            </div>
        </section>
    );
}
